import {Component, OnInit, ViewChild} from '@angular/core';
import {PagingTevaService} from '../../../@core/services/customer/teva/paging-teva.service';
import { take} from 'rxjs/operators';
import {PageState, State} from '../../../@core/dto/customer/teva/state';
import {LazyLoadEvent} from 'primeng/api';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-teva-tobra-grid',
  templateUrl: './teva-tobra-grid.component.html',
  styleUrls: ['./teva-tobra-grid.component.scss']
})
export class TevaTobraGridComponent implements OnInit {
  public totalRecords: number;
  public stateList: State[] = [];
  public cols: any[];
  private oldStateList: State[] = [];

  settings = {
    globalFilter: true,
    emptyMessage: 'No records found',
    rowsPerPage: 10,
    defaultSort: { field: 'id', order: 1 }
  };

  constructor(private pagingTevaService: PagingTevaService) {
  }


  lazyLoadFilterData(event: any, field: any) {
    const val = event.target.value;
    if (val.length > 0){
      this.stateList =  this.stateList.filter(x => x.id.includes(val) );
    } else {
      this.stateList =  this.oldStateList;
      console.log(this.oldStateList);
    }
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id', sortable: true, searchable: true, type: 'string' },
      { field: 'batchId', header: 'Batch', sortable: true, searchable: true, type: 'string'  },
      { field: 'batchStartDate', header: 'BatchStartDate', sortable: true, searchable: true, type: 'string' },
      { field: 'fermenterName', header: 'FermenterName', sortable: true, searchable: true, type: 'string' },
      { field: 'batchAgeInMin', header: 'BatchAgeInMin', sortable: true, searchable: true, type: 'number' },
      { field: 'batchSerialNumber', header: 'BatchSerialNumber', sortable: true, searchable: true, type: 'number' },
    ];

    this.pagingTevaService.findAll(this.buildUrl(0, 10)).pipe(take(1)).subscribe((res: PageState) => {
      this.totalRecords = res.totalPages;
      this.stateList = res.content;
    });
  }

  buildUrl(pageNumber: any, pageSize: any ) {
      return `?page=${pageNumber}&size=${pageSize}`;
  }

  loadPage(event: LazyLoadEvent) {
    this.pagingTevaService.findAll(this.buildUrl(event.first, event.rows)).pipe(take(1)).subscribe((res: PageState) => {
      this.totalRecords = res.totalPages;
      this.stateList = res.content;
      this.oldStateList = res.content;
    });
  }
}


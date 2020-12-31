import {Component, OnInit, ViewChild} from '@angular/core';
import {PagingTevaService} from '../../../@core/services/customer/teva/paging-teva.service';
import { take} from 'rxjs/operators';
import {PageState, State} from '../../../@core/dto/customer/teva/state';
import {LazyLoadEvent} from 'primeng/api';


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
  public batchFilter = '';

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

  loadPageByBatchId(){
    if (this.batchFilter.length > 0) {
        this.pagingTevaService.findAll(`?page=0&size=10&batchId=${this.batchFilter}`).pipe(take(1)).subscribe((res: PageState) => {
          this.totalRecords = res.totalPages;
          this.stateList = res.content;
        });
    }else {
      this.pagingTevaService.findAll('?page=0&size=10').pipe(take(1)).subscribe((res: PageState) => {
        this.totalRecords = res.totalPages;
        this.stateList = res.content;
      });
    }
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id', sortable: false, searchable: true, type: 'string' },
      { field: 'batchId', header: 'Batch', sortable: false, searchable: true, type: 'string'  },
      { field: 'batchStartDate', header: 'BatchStartDate', sortable: true, searchable: true, type: 'string' },
      { field: 'fermenterName', header: 'FermenterName', sortable: false, searchable: true, type: 'string' },
      { field: 'batchAgeInMin', header: 'BatchAgeInMin', sortable: true, searchable: true, type: 'number' },
      { field: 'batchSerialNumber', header: 'BatchSerialNumber', sortable: false, searchable: true, type: 'number' },
    ];

    this.pagingTevaService.findAll('?page=0&size=10').pipe(take(1)).subscribe((res: PageState) => {
      this.totalRecords = res.totalPages;
      this.stateList = res.content;
    });
  }

  buildUrl(event: LazyLoadEvent ) {
    const pageNumber = event.first;
    const pageSize = event.rows;
    const sortField = event.sortField;
    if (sortField && event.sortOrder === -1 ) {
      return `?page=${pageNumber}&size=${pageSize}&sortField=${sortField}&order=desc&batchId=${this.batchFilter}`;
    }else if (sortField) {
      return `?page=${pageNumber}&size=${pageSize}&sortField=${sortField}&order=asc&batchId=${this.batchFilter}`;
    }
    return `?page=${pageNumber}&size=${pageSize}&batchId=${this.batchFilter}`;
  }

  loadPage(event: LazyLoadEvent) {
    console.log(event.sortField);
    console.log(event.sortOrder);
    this.pagingTevaService.findAll(this.buildUrl(event)).pipe(take(1)).subscribe((res: PageState) => {
      this.totalRecords = res.totalPages;
      this.stateList = res.content;
      this.oldStateList = res.content;
    });
  }
}


import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {StateDataSource} from '../../../@core/utils/state-data-source';
import {PagingTevaService} from '../../../@core/services/customer/teva/paging-teva.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-teva-tobra-grid',
  templateUrl: './teva-tobra-grid.component.html',
  styleUrls: ['./teva-tobra-grid.component.scss']
})
export class TevaTobraGridComponent implements OnInit, AfterViewInit {
  form: any = {};
  private sortDir = '';
  displayedColumns: string[] = ['Id', 'batchId', 'fermenterName', 'batchStartDate', 'batchAgeInMin'];
  pageStateDatasource: StateDataSource;

  constructor(private pagingTevaService: PagingTevaService) {
    this.form.batchId = '';
    this.form.sortField = '';
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.pageStateDatasource = new StateDataSource(this.pagingTevaService);
    this.pageStateDatasource.loadPageState();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.sort.sortChange);

    this.pageStateDatasource.counter$
      .pipe(
        tap((count) => {
          this.paginator.length = count;
        })
      )
      .subscribe();

    this.paginator.page
      .pipe(
        tap(() => this.loadPageState())
      )
      .subscribe();

    this.sort.sortChange
      .pipe(
        tap(() => this.loadPageStateBySort())
      )
      .subscribe();
  }

  loadPageState() {
    this.pageStateDatasource.loadPageState(this.paginator.pageIndex, this.paginator.pageSize, '', '');
  }

  loadPageStateBySort(){
    this.sortDir = this.sort.direction;
    if (this.sortDir && this.sortDir.length > 2) {
        this.pageStateDatasource.loadPageState(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction );
    }else{
      this.pageStateDatasource.loadPageState(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, '' );
    }
  }

  onSubmit(order: string){
    if (order && order.length > 2 && this.form.batchId.length > 4 && this.form.sortField.length > 4) {
      this.pageStateDatasource.loadPageState
      (this.paginator.pageIndex, this.paginator.pageSize, this.form.sortField, order, this.form.batchId);
    }else {
      alert('You miss some field/s!!');
    }

  }

}




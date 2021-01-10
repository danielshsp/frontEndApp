import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../@core/dto/user/user';
import {UserService} from '../../../../@core/services/user-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<User>;
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = this.userService.findByAdmin('admin=Y').subscribe( user => {
      console.log(user);
      this.dataSource = new MatTableDataSource(user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['username', 'firstname', 'lastname', 'email', 'enabled', 'company.name', 'company.address', 'company.country', 'company.city', 'company.phone', 'company.product'];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  applyFilter(search: any){
    let filterValue = search.value;
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    };
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

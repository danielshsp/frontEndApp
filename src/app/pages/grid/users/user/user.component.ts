import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../../@core/services/user-service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../../../../@core/dto/user/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy  {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<User>;
  subscription: Subscription;
  displayedColumns: string[] = ['username', 'firstname', 'email', 'enabled', 'company.name', 'company.address', 'company.country', 'company.city', 'company.phone', 'company.product'];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.subscription = this.userService.findByAdmin('admin=N').subscribe( user => {
      console.log(user);
      this.dataSource = new MatTableDataSource(user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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

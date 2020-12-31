import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {PagingTevaService} from '../services/customer/teva/paging-teva.service';
import {PageState, State} from '../dto/customer/teva/state';
import {catchError, finalize} from 'rxjs/operators';


export class StateDataSource implements DataSource<State> {
  private stateSubject = new BehaviorSubject<State[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);
  public counter$ = this.countSubject.asObservable();

  constructor(private pagingTevaService: PagingTevaService) { }

  connect(collectionViewer: CollectionViewer): Observable<State[]> {
    return this.stateSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.stateSubject.complete();
    this.loadingSubject.complete();
    this.countSubject.complete();
  }

  loadPageState(pageNumber = 0, pageSize = 10, sortfield = '', sortDirection = '', batchId = '' ) {
    const generetUrl = this.buildUrl(pageNumber, pageSize, sortfield, sortDirection, batchId );
    this.loadingSubject.next(true);
    this.pagingTevaService.findAll(generetUrl)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((result: any | PageState) => {
          this.stateSubject.next(result.content);
          this.countSubject.next(result.totalPages);
        }
      );
  }

  buildUrl(pageNumber: number, pageSize: number, sortField: string , sortDirection: string, batchId: string) {
    if (batchId.length > 0 && batchId !== ''){
      return `?page=${pageNumber}&size=${pageSize}&sortField=${sortField}&order=${sortDirection}&batchId=${batchId}`;
    }
    else if (sortDirection.length < 2) {
      return `?page=${pageNumber}&size=${pageSize}`;
    }else if (sortField.length > 3 && sortDirection.length > 2 ){
      return `?page=${pageNumber}&size=${pageSize}&sortField=${sortField}&order=${sortDirection}`;
    }
    return `?page=${pageNumber}&size=${pageSize}`;
  }
}


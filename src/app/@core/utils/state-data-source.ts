/*import {CollectionViewer, DataSource} from '@angular/cdk/collections';
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

  loadPageState(pageNumber = 0, pageSize = 10) {
    const generetUrl = this.buildUrl(pageNumber, pageSize);
    this.loadingSubject.next(true);
    this.pagingTevaService.findAll(generetUrl)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((result: PageState) => {
          this.stateSubject.next(result.content);
          this.countSubject.next(result.totalElements);
        }
      );
  }

  buildUrl(pageNumber: number, pageSize: number ) {
      return `?page=${pageNumber}&size=${pageSize}`;
  }
}
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { APICONFIG, IPageRequest } from '..';
import { requestQuery } from '../../utils';

@Injectable()
export class DioceseService {

  constructor(private http: HttpClient) { }

  public getAll(request: IPageRequest) {
    return this.http.get<any>(`${APICONFIG.DIOCESE.GET}?${(requestQuery(request))}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes: any) => {
        throw errorRes.error;
      })
    );
  }

  public getDetail(id) {
    return this.http.get<any>(`${APICONFIG.DIOCESE.GET_DETAIL(id)}`).pipe(
      map(result => {
        return result;
      }),
      catchError(errorRes => {
        throw errorRes.error;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseEntity } from '../common/response-entity.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import {GlobalDataService} from './global-data.service'
import {StorageService} from './storage.service'

@Injectable({
  providedIn: 'root'
})

export class RestAPIInvocationService {
  userDetails: any;
  // Base url TODO Later move this to environemnt
  baseurl = 'http://localhost:8090/seedsystem/';

  constructor(private httpClient: HttpClient,
    private globalService: GlobalDataService,
    private storageService: StorageService) { }


  public getRequest(endPoint: string): Observable<ResponseEntity> {
    const strBaseUrl: string = this.baseurl;

    this.userDetails = this.globalService.userDetails == null ?
    this.storageService.read('userDetails')['token'] : this.globalService.userDetails.token;
    return this.httpClient.get<any>(strBaseUrl + endPoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         'Authorization': this.userDetails
      })
    })
      .pipe(
        tap(
          data => {
          }
        ),
        catchError((error: any) => {
          return throwError(error);
          }
        )
      );
  }

  public postRequest(authRequired:boolean, endPoint: string, requestObject: any): Observable<ResponseEntity> {
    const strBaseUrl: string = this.baseurl;
    if(authRequired){
    this.userDetails = this.globalService.userDetails == null ?
    this.storageService.read('userDetails')['token'] : this.globalService.userDetails.token;
    return this.httpClient.post<any>(strBaseUrl + endPoint,requestObject, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         'Authorization': this.userDetails
      })
    })
      .pipe(
        tap(
          data => {
            console.log(data);
          }
        ),
        catchError((error: any) => {
          return throwError(error);
          }
        )
      );
        } else{
          return this.httpClient.post<any>(strBaseUrl + endPoint,requestObject, {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          })
            .pipe(
              tap(
                data => {
                  console.log(data);
                }
              ),
              catchError((error: any) => {
                return throwError(error);
                }
              )
            );
      
        }
  }


  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}
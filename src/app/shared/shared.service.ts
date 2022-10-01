import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {SupportRequest} from "./supportForm/support";
import {AppConstants} from "../app.constant";
import {SupportResponseModel} from "../model/support-response.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = 'http://thelastholyjourney.com//api';

  constructor(private httpClient: HttpClient) {
  }

  submitSupportForm(supportRequest: SupportRequest): Observable<SupportResponseModel> {
    return this.httpClient.post<SupportResponseModel>(this.baseUrl + '/form',
      supportRequest, AppConstants.requestOptions)
  }

  getSupportData(): Observable<SupportResponseModel> {
    return this.httpClient.get<SupportResponseModel>(this.baseUrl + '/form',
      AppConstants.requestOptions)
  }

}

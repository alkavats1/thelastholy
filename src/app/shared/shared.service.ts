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

  constructor(private httpClient: HttpClient) {
  }

  submitSupportForm(supportRequest: SupportRequest): Observable<SupportResponseModel> {
    return this.httpClient.post<SupportResponseModel>('http://localhost:3000/api/form',
      supportRequest, AppConstants.requestOptions)
  }

  getSupportData(): Observable<SupportResponseModel> {
    return this.httpClient.get<SupportResponseModel>('http://localhost:3000/api/form',
      AppConstants.requestOptions)
  }

}

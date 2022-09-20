import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SupportRequest} from "./support";
import {Observable} from "rxjs";
import {SupportResponseModel} from "../../../model/support-response.model";
import {AppConstants} from "../../../app.constant";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

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

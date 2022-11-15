import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {SupportRequest} from "./supportForm/support";
import {AppConstants} from "../app.constant";
import {BookSlotResponseModel, EnquiryResponseModel, SupportResponseModel} from "../model/support-response.model";
import {EnquiryRequest} from "./enquiryForm/enquiry";
import {BookSlotRequest} from "../modules/general/services/bookSlot/bookSlot";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = 'http://backend:3000/api';

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

  submitEnquireForm(enquiryRequest: EnquiryRequest): Observable<SupportResponseModel> {
    return this.httpClient.post<SupportResponseModel>(this.baseUrl + '/enquiryForm',
      enquiryRequest, AppConstants.requestOptions)
  }

  getEnquireData(): Observable<EnquiryResponseModel> {
    return this.httpClient.get<EnquiryResponseModel>(this.baseUrl + '/enquiryForm',
      AppConstants.requestOptions)
  }

  bookSlotForm(bookSlotRequest: BookSlotRequest): Observable<BookSlotResponseModel> {
    return this.httpClient.post<BookSlotResponseModel>(this.baseUrl + '/bookSlot',
      bookSlotRequest, AppConstants.requestOptions)
  }

  getBookSlotData(): Observable<BookSlotResponseModel> {
    return this.httpClient.get<BookSlotResponseModel>(this.baseUrl + '/bookSLot',
      AppConstants.requestOptions)
  }


}

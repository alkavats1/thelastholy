import {SupportRequest} from "../shared/supportForm/support";
import {EnquiryRequest} from "../shared/enquiryForm/enquiry";
import {BookSlotRequest} from "../modules/general/services/bookSlot/bookSlot";


export class SupportResponseModel {
  response!: SupportRequest[];
}

export class EnquiryResponseModel {
  response!: EnquiryRequest[];
}

export class BookSlotResponseModel {
  response!: BookSlotRequest[];
}

import {Component, OnInit} from '@angular/core';
import {SeoService} from "../../../../_services/seo.service";


@Component({
  selector: 'app-funeralServices',
  templateUrl: './funeralServices.component.html',
  styleUrls: ['./funeralServices.component.css']
})
export class FuneralServicesComponent implements OnInit {


  constructor(private seoService: SeoService) {

    const content = 'The Last Holy Journey - The Last Holy Journey is the funeral website which helps you to offer all the funeral services at one place. We offer serval packages also, so that you don\'t have to worry. Our end-to-end funeral services allow families to mourn in peace. - Contact Page';
    const title = 'The Last Holy Journey - Services Page - Funeral Services';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }


  ngOnInit(): void {

  }

}


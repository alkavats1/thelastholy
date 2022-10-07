import {Component, OnInit} from '@angular/core';
import {AppConstants} from "./app.constant";
import {Meta} from "@angular/platform-browser";
import {SeoService} from "./_services/seo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Last Holy Journey';

  constructor(private meta: Meta, private seoService: SeoService) {

    const content = 'The Last Holy Journey - The Last Holy Journey is the funeral website which helps you to offer all the funeral services at one place. We offer serval packages also, so that you don\'t have to worry. Our end-to-end funeral services allow families to mourn in peace. - Contact Page';
    const title = 'The Last Holy Journey - Home Page';
    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }


  ngOnInit(): void {
    this.setPanelGtag();
    this.meta.addTags([
      {
        name: 'description',
        content: 'The Last Holy Journey is the funeral website which helps you to offer all the funeral services at one place. We offer serval packages also, so that you don\'t have to worry. Our end-to-end funeral services allow families to mourn in peace.'
      },
      {name: 'keywords', content: 'thelastholyjourney,funeral,antim,shamshaan,ghat,ghazipur'},
      {name: 'robots', content: 'index, follow'},
      {charset: 'UTF-8'}
    ]);
  }

  setPanelGtag() {
    const gtagPanelScript = document.createElement('script');
    gtagPanelScript.async = true;
    gtagPanelScript.src = AppConstants.gtagPanelScriptSrc;
    document.getElementsByTagName('head')[0].appendChild(gtagPanelScript);
    const gtagDataLayer = document.createElement('script');
    gtagDataLayer.innerHTML = AppConstants.gtagPanelDataLayer;
    document.getElementsByTagName('head')[0].appendChild(gtagDataLayer);

  }
}

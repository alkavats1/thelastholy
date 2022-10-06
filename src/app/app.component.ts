import {Component, OnInit} from '@angular/core';
import {AppConstants} from "./app.constant";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Last Holy Journey';

  constructor(private meta: Meta) {
  }


  ngOnInit(): void {
    this.setPanelGtag();
    this.meta.updateTag({name: 'og:title', property: 'og:title', content: 'The Last Holy Journey'});
    this.meta.updateTag({
      name: 'og:description',
      property: 'og:description',
      content: 'The Last Holy Journey is the funeral website which helps you to offer all the funeral services at one place. We offer serval packages also, so that you don\'t have to worry. Our end-to-end funeral services allow families to mourn in peace.'
    });
    this.meta.addTags([
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

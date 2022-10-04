import {Component, OnInit} from '@angular/core';
import {AppConstants} from "./app.constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Last Holy Journey';


  ngOnInit(): void {
    this.setPanelGtag();
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

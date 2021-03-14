import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';


@Component({
  selector: 'app-browser-banner',
  templateUrl: './browser-banner.component.html',
  styleUrls: ['./browser-banner.component.scss']
})
export class BrowserBannerComponent implements OnInit {

  constructor(public platform: Platform) {

  }

  ngOnInit(): void {

  }

}

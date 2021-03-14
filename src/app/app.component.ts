import { Component, EventEmitter, OnInit } from '@angular/core';
import { SliderConfiguration } from './models/SliderConfiguration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * Sliders updater event listener
   */
  slidersUpdater = new EventEmitter<SliderConfiguration[]>();

  sliderConfigurations: SliderConfiguration[] = [];
  /**
   * Init, setup slider collection update listener
   */
  ngOnInit(): void {
    this.slidersUpdater.subscribe((sliders: SliderConfiguration[]) => this.sliderConfigurations = sliders);
  }
}

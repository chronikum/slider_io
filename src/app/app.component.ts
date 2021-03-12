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

  sliderConfigurations: SliderConfiguration[] = [
    {
      value: 20,
      min: 0,
      max: 100,
    }
  ];

  autoTicks = true;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  /**
   * Init, setup slider collection update listener
   */
  ngOnInit(): void {
    this.slidersUpdater.subscribe((sliders: SliderConfiguration[]) => this.sliderConfigurations = sliders);
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderConfiguration } from 'src/app/models/SliderConfiguration';

@Component({
  selector: 'app-slider-selector',
  templateUrl: './slider-selector.component.html',
  styleUrls: ['./slider-selector.component.scss']
})
export class SliderSelectorComponent implements OnInit {

  sliderConfigurations: SliderConfiguration[] = [];

  @Input() slidersUpdater?: EventEmitter<SliderConfiguration[]>;

  /**
   * Slider Config
   */
  autoTicks = false;
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

  ngOnInit(): void {

  }


  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  /**
   * Add slider configuration and fire event
   */
  addSlider() {
    // left?: string,
    // right?: string,
    // vertical?: boolean,
    // max?: number,
    // min?: number,
    // step?: number,
    // fillColor?: string,
    // markColor?: string,
    // value?: number,
    // tickInterval?: number
    // invert?: boolean,
    // thumbLabel?: boolean
    let sliderConfiguration: SliderConfiguration = {
      vertical: this.vertical,
      max: this.max,
      min: this.min,
      step: this.step,
      value: this.value,
      invert: this.invert,
      thumbLabel: this.thumbLabel,
    }
    this.sliderConfigurations.push(sliderConfiguration);
    if (this.slidersUpdater) {
      this.slidersUpdater.next(this.sliderConfigurations);
    }
  }

}

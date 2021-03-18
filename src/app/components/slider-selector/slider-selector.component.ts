import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SliderConfiguration } from 'src/app/models/SliderConfiguration';

@Component({
  selector: 'app-slider-selector',
  templateUrl: './slider-selector.component.html',
  styleUrls: ['./slider-selector.component.scss']
})
export class SliderSelectorComponent implements OnInit {

  sliderConfigurations: SliderConfiguration[] = [];

  @Input() slidersUpdater?: EventEmitter<SliderConfiguration[]>;

  backgroundColor = '#000000';

  fillColor = '#ffd740';

  /**
   * FormGroup right
   */
  rightGroup: FormGroup;

  /**
   * FormGroup left
   */
  leftGroup: FormGroup;

  /**
   * Slider Config
   */
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;
  left = "";
  right = "";
  colorMode = 0;
  customColors: boolean = false;

  ngOnInit(): void {

    // setup listener if slider gets deleted
    this.slidersUpdater?.subscribe((updatedArray: SliderConfiguration[]) => {
      console.log("SLIDERS GET UPDATED")
      this.sliderConfigurations = updatedArray
    });
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.rightGroup = this.formBuilder.group({
      right: [''],
    });
    this.leftGroup = this.formBuilder.group({
      left: [''],
    });
  }

  /**
   * Get slider value
   * @param event 
   */
  setSliderValue(event: any) {
    console.log(event.value)
    this.value = event.value;
    console.log(this.value)
  }


  getSliderTickInterval(): number | 'auto' {
    if (this.autoTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  /**
   * Add slider configuration and fire event
   */
  addSlider() {
    let sliderConfiguration: SliderConfiguration = {
      sliderId: Math.floor(Math.random() * 87124687),
      vertical: this.vertical,
      max: this.max,
      min: this.min,
      step: this.step,
      value: this.value,
      autoTick: this.autoTicks,
      invert: this.invert,
      thumbLabel: this.thumbLabel,
      colorMode: this.colorMode,
      left: this.leftGroup.get('left')?.value,
      right: this.rightGroup.get('right')?.value,
    }
    console.log(this.fillColor);
    this.sliderConfigurations.push(sliderConfiguration);
    if (this.slidersUpdater) {
      this.slidersUpdater.next(this.sliderConfigurations);
    }
  }

}

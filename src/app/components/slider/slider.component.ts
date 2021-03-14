import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() control?: FormControl;
  @Input() autoTicks = false;
  @Input() disabled = false;
  @Input() invert = false;
  @Input() max = 100;
  @Input() min = 0;
  @Input() showTicks = false;
  @Input() step = 1;
  @Input() thumbLabel = false;
  @Input() value = 0;
  @Input() vertical = false;
  @Input() tickInterval = 1;
  @Input() left: string = "";
  @Input() right: string = "";

  @Output() change = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log("VAL: " + this.value);
  }

  /**
   * Slider value changed
   */
  valueChange(event: any) {
    this.change.next(event);
  }

}

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
  @Input() colorMode = 0;
  @Input() disabled = false;
  @Input() invert = false;
  @Input() max = 100;
  @Input() min = 0;
  @Input() showTicks: boolean = false;
  @Input() step = 1;
  @Input() thumbLabel = false;
  @Input() value = 0;
  @Input() vertical = false;
  @Input() tickInterval = 1;
  @Input() left: string = "";
  @Input() autoTick: boolean = false;
  @Input() right: string = "";
  @Input() presentationMode: boolean = false;
  @Input() sliderId: number = -1;

  @Output() change = new EventEmitter<any>();
  @Output() deleteMe = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log("VAL: " + this.value);
  }

  getSliderTickInterval(): number | 'auto' {
    console.log("TICKS: " + this.autoTick)
    if (this.autoTick) {
      return 'auto';
    }
    return 0;
  }

  /**
   * Slider value changed
   */
  valueChange(event: any) {
    this.change.next(event);
  }

  /**
   * Returns a color for different modes
   */
  getColorMode(): string {
    switch (this.colorMode) {
      case 0:
        return 'accent';
      case 1:
        return 'primary';
      case 2:
        return 'warn';
      case 3:
        return 'background';
    }
    return 'accent'
  }

}

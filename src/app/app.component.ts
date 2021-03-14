import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
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

  /**
   * Deletes slider with id and fires event
   */
  deleteSlider(sliderId: number) {
    this.sliderConfigurations = this.sliderConfigurations.filter(x => x.sliderId !== sliderId);
    this.slidersUpdater.next(this.sliderConfigurations);
  }
}

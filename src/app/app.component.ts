import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { SliderConfiguration } from './models/SliderConfiguration';
import domtoimage from 'dom-to-image';
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
   * Determine if presentationmode should be enabled
   */
  presentationMode = true;

  /**
   * Capture Area
   */
  @ViewChild('captureArea') capture?: ElementRef;


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


  /**
   * We cannot capture the thumb because it has absolute positioning
   */

  /**
   * Capture the sliders
   */
  capturePNG() {
    this.presentationMode = false;
    setTimeout(() => {
      domtoimage.toPng(this.capture?.nativeElement as any, {

      })
        .then((dataUrl: string) => {
          var link = document.createElement('a');
          link.download = 'slides.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error: any) => {
          console.error('oops, something went wrong!', error);
        });
    }, 1000);
  }

  captureSVG() {
    this.presentationMode = false;
    setTimeout(() => {
      domtoimage.toSvg(this.capture?.nativeElement as any, {

      })
        .then((dataUrl: string) => {
          var link = document.createElement('a');
          link.download = 'slides.svg';
          link.href = dataUrl;
          link.click();
        })
        .catch((error: any) => {
          console.error('oops, something went wrong!', error);
        });
    }, 1000);
  }
}

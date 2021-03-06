import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SliderSelectorComponent } from './components/slider-selector/slider-selector.component';
import { SliderComponent } from './components/slider/slider.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserBannerComponent } from './components/browser-banner/browser-banner.component';




@NgModule({
  declarations: [
    AppComponent,
    SliderSelectorComponent,
    SliderComponent,
    BrowserBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    ColorPickerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

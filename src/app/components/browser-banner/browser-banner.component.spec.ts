import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBannerComponent } from './browser-banner.component';

describe('BrowserBannerComponent', () => {
  let component: BrowserBannerComponent;
  let fixture: ComponentFixture<BrowserBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

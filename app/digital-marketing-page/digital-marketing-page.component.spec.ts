import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingPageComponent } from './digital-marketing-page.component';

describe('DigitalMarketingPageComponent', () => {
  let component: DigitalMarketingPageComponent;
  let fixture: ComponentFixture<DigitalMarketingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMarketingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

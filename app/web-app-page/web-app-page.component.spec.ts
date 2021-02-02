import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppPageComponent } from './web-app-page.component';

describe('WebAppPageComponent', () => {
  let component: WebAppPageComponent;
  let fixture: ComponentFixture<WebAppPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAppPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

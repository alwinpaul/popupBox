import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBoxComponent } from './popup-box.component';

describe('PopupBoxComponent', () => {
  let component: PopupBoxComponent;
  let fixture: ComponentFixture<PopupBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

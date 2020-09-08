import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesDetailComponent } from './mobiles-detail.component';

describe('MobilesDetailComponent', () => {
  let component: MobilesDetailComponent;
  let fixture: ComponentFixture<MobilesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

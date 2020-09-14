import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesDescriptionDetailComponent } from './mobiles-description-detail.component';

describe('MobilesDescriptionDetailComponent', () => {
  let component: MobilesDescriptionDetailComponent;
  let fixture: ComponentFixture<MobilesDescriptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesDescriptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesDescriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

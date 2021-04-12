import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsCardComponent } from './locations-card.component';

describe('LocationsCardComponent', () => {
  let component: LocationsCardComponent;
  let fixture: ComponentFixture<LocationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

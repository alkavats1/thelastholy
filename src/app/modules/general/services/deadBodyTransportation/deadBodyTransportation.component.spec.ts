import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeadBodyTransportationComponent} from './deadBodyTransportation.component';

describe('AboutComponent', () => {
  let component: DeadBodyTransportationComponent;
  let fixture: ComponentFixture<DeadBodyTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeadBodyTransportationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadBodyTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

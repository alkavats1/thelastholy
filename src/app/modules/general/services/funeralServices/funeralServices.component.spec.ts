import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WhyChooseUsComponent} from './funeralServices.component';

describe('AboutComponent', () => {
  let component: WhyChooseUsComponent;
  let fixture: ComponentFixture<WhyChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyChooseUsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

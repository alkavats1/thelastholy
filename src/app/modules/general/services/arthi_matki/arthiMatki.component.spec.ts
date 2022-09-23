import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ArthiMatkiComponent} from "./arthiMatki.component";


describe('AboutComponent', () => {
  let component: ArthiMatkiComponent;
  let fixture: ComponentFixture<ArthiMatkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArthiMatkiComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthiMatkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

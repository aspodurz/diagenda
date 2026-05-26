import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanLoaderComponent } from './plan.loader.component';

describe('PlanLoaderComponent', () => {
  let component: PlanLoaderComponent;
  let fixture: ComponentFixture<PlanLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanLoaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

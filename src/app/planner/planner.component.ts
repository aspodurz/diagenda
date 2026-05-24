import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepper, CdkStepperModule} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import { PlanDto } from '../dto/plan';
import { PlanStepper } from '../utils/stepper/plan.stepper';
import { Plan } from './plan/plan';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [
    TranslatePipe,
    MatButtonModule,
    MatStepperModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PlanStepper,
    Plan
  ],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
  providers: [CdkStepper] 
})
export class PlannerComponent {

  readonly action: string;
  private route = inject(ActivatedRoute);
  private _formBuilder = inject(FormBuilder);
  plan: PlanDto=new PlanDto();

  isLinear = true;

  constructor() {
    this.action = this.route.snapshot.queryParamMap.get('action') || '';
  }

}

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
import { Meals } from './meals/meals';
import { End } from './end/end';
import { SecureStoreService } from '../service/store.service';


@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PlanStepper,
    Plan,
    Meals,  
    End
  ],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
  providers: [CdkStepper] 
})
export class PlannerComponent {
  private route = inject(ActivatedRoute);
  private serviceStore= inject(SecureStoreService);
  readonly mode: string;
  
  plan: PlanDto=new PlanDto();

  isLinear = true;

  constructor() {
    let plan = this.route.snapshot.queryParamMap.get('plan');
    if(plan){
      this.mode="edit";
      this.serviceStore.getItem(plan).then((out) => { const res = JSON.parse(out); this.plan=res; });
    }else{
      this.mode="add";
    }
  }

}

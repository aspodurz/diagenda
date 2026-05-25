import { CdkStepper, CdkStepperModule } from "@angular/cdk/stepper";
import { NgTemplateOutlet } from "@angular/common";
import { Component, inject, input, Input } from "@angular/core";
import {TranslatePipe} from "@ngx-translate/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PlanDto } from "../../dto/plan";
import { PlannerConstants, StoreConstants } from "../constants.component";
import { SecureStoreService } from '../../service/store.service';
import { ConfigurationDto } from "../../dto/configuration";
import { BaseService } from "../../service/base.service";
import { RouterLink } from "@angular/router";

/** Plan CDK stepper component */
@Component({
  selector: 'plan-stepper',
  templateUrl: './plan.stepper.html',
  styleUrl: './plan.stepper.css',
  providers: [{provide: CdkStepper, useExisting: PlanStepper}],
  imports: [TranslatePipe, NgTemplateOutlet, CdkStepperModule, MatButtonModule, MatIconModule, RouterLink],
})
export class PlanStepper extends CdkStepper {
  readonly stepTitles: string[] = PlannerConstants.STEP_TITLES;
  private readonly storeService = inject(SecureStoreService);
  private readonly baseService = inject(BaseService);
  
  plan = input.required<PlanDto>();
  mode = input.required<string>();
  names: string[] = [];

  constructor() {
    super();
    let config: ConfigurationDto = new ConfigurationDto();
    const df = JSON.stringify(config, null, 2);
    let content = this.storeService.getItemDefault(StoreConstants.CONFIGURATIONS_KEY, df).then((out) => { const res = JSON.parse(out); this.names=res.elements; }).catch((err) => { console.error(err); });
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }

  isFirstStep(): boolean {
    return this.selectedIndex === 0;
  }

  isLastStep(): boolean {
    return this.selectedIndex === this.steps.length - 1;
  }

  isNextDisabled(): boolean {
    let disabled = true;
    if(this.selectedIndex === PlannerConstants.PLAN_INDEX){
      disabled = !(!!this.plan().name && !!this.plan().description && !!this.plan().owner);
      if(!disabled && this.mode() === 'add'){
        const key=this.plan().name?? '';
        disabled = this.names.includes(key);
      }
    }else if(this.selectedIndex === PlannerConstants.MEALS_INDEX){
      let mls: Array<string>=new Array<string>();
      for(let meal of this.plan().meals){
        if(!meal.name || meal.options.length === 0){
          return true;
        }else {
          if(!mls.includes(meal.name)){
            mls.push(meal.name);
          }else{
            return true;
          }
        }
        let opts: Array<string>=new Array<string>();
        for(let option of meal.options){ 
          if(!option.name){
            return true;
          } else{
            if(!opts.includes(option.name)){
              opts.push(option.name);
            }else{
              return true;
            } 
          }
        }
      }
      disabled = this.plan().meals.length === 0;
    }else if(this.selectedIndex === PlannerConstants.FINISH_INDEX){
      disabled = false;
    }
    return disabled;
  }
}
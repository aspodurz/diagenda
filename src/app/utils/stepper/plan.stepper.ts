import { CdkStepper, CdkStepperModule } from "@angular/cdk/stepper";
import { NgTemplateOutlet } from "@angular/common";
import { Component, input, Input } from "@angular/core";
import {TranslatePipe} from "@ngx-translate/core";
import { PlanDto } from "../../dto/plan";
import { PlannerConstants } from "../constants.component";

/** Plan CDK stepper component */
@Component({
  selector: 'plan-stepper',
  templateUrl: './plan.stepper.html',
  styleUrl: './plan.stepper.css',
  providers: [{provide: CdkStepper, useExisting: PlanStepper}],
  imports: [TranslatePipe, NgTemplateOutlet, CdkStepperModule],
})
export class PlanStepper extends CdkStepper {
  readonly stepTitles: string[] = PlannerConstants.STEP_TITLES;
  item = input.required<PlanDto>();

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }

  isLastStep(): boolean {
    return this.selectedIndex === this.steps.length - 1;
  }

  isNextDisabled(): boolean {
    let disabled = true;
    if(this.selectedIndex === PlannerConstants.PLAN_INDEX){
      disabled = !(!!this.item().key && !!this.item().description && !!this.item().owner);
    }else if(this.selectedIndex === PlannerConstants.MEALS_INDEX){
      disabled = this.item().meals.length === 0;
    }else if(this.selectedIndex === PlannerConstants.OPTIONS_INDEX){
      disabled = false;
    }else if(this.selectedIndex === PlannerConstants.FINISH_INDEX){
      disabled = false;
    }
    return disabled;
  }
}
import { Component, input } from '@angular/core';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Meal, PlanDto } from '../../dto/plan';
import { OptionDto } from '../../dto/option';



@Component({
  selector: 'planner-meals',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  templateUrl: './meals.html',
  styleUrl: './meals.css',
})
export class Meals {
  plan = input.required<PlanDto>();

  addMeal(): void {
    this.plan().add(new Meal());
  }

  addOption(index:number): void {
    this.plan().meals[index].options.push(new OptionDto());
  }

  deleteMeal(index:number): void {
    this.plan().meals.splice(index, 1);
  }

  deleteOption(index:number, idx:number): void {
    this.plan().meals[index].options.splice(idx, 1);
  }
}

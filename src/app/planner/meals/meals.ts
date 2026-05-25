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



@Component({
  selector: 'planner-meals',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  templateUrl: './meals.html',
  styleUrl: './meals.css',
})
export class Meals {
  item = input.required<PlanDto>();
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  addMeal(): void {
    this.item().add(new Meal());
  }
}

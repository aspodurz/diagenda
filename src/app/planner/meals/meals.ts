import { Component, input } from '@angular/core';
import { PlanDto } from '../../dto/plan';

@Component({
  selector: 'planner-meals',
  imports: [],
  templateUrl: './meals.html',
  styleUrl: './meals.css',
})
export class Meals {
  item = input.required<PlanDto>();
}

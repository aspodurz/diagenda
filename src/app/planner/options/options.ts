import { Component, input } from '@angular/core';
import { PlanDto } from '../../dto/plan';

@Component({
  selector: 'planner-options',
  imports: [],
  templateUrl: './options.html',
  styleUrl: './options.css',
})
export class Options {

  item = input.required<PlanDto>();

}

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
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MealDto, PlanDto, SectionDto, TypeDto } from '../../dto/plan';
import { Type } from '../type/type'; 




@Component({
  selector: 'configurer-meal',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, FormsModule, AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent, Type],
  templateUrl: './meal.html',
  styleUrl: './meal.css',
})
export class Meal {
  plan = input.required<PlanDto>();

  addMeal(): void {
    this.plan().add(new MealDto());
    this.plan().meals[this.plan().meals.length-1].add(new TypeDto());
  }
  
  addType(midx:number): void {
    this.plan().meals[midx].types.push(new TypeDto());
  }

  addSection(midx:number, tidx:number): void {
    this.plan().meals[midx].types[tidx].sections.push(new SectionDto());
  }

  deleteMeal(index:number): void {
    this.plan().meals.splice(index, 1);
  }

}

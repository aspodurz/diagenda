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
import { MealDto, SectionDto, TypeDto } from '../../dto/plan';
import { Section } from '../section/section';




@Component({
  selector: 'configurer-type',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, FormsModule, AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent, Section],
  templateUrl: './type.html',
  styleUrl: './type.css',
})
export class Type {
  meal = input.required<MealDto>();

  addType(): void {
    this.meal().types.push(new TypeDto());
  }

  addSection(midx:number): void {
    this.meal().types[midx].sections.push(new SectionDto());
  }

  deleteType(tidx:number): void {
    this.meal().types.splice(tidx, 1);
  }
}

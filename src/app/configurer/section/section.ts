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
import { TypeDto } from '../../dto/plan';
import { OptionDto } from '../../dto/option';
import { Option} from '../option/option';

@Component({
  selector: 'configurer-section',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, FormsModule, AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent, Option],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
  type = input.required<TypeDto>();

  addOption(idx:number): void {
    this.type().sections[idx].options.push(new OptionDto());
  }

  deleteSection(idx:number): void {
   this.type().sections.splice(idx, 1);
  }
}

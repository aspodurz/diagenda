import { Component, input } from '@angular/core';
import {
  AccordionGroup,
} from '@angular/aria/accordion';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SectionDto } from '../../dto/plan';

@Component({
  selector: 'configurer-option',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, FormsModule],
  templateUrl: './option.html',
  styleUrl: './option.css',
})
export class Option {
  section = input.required<SectionDto>();

  deleteOption(idx:number): void {
   this.section().options.splice(idx, 1);
  }
}

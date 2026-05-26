import { Component, input } from '@angular/core';
import { PlanDto } from '../../dto/plan';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { PlanNameValidator } from '../../validator/plan.name.validator';


@Component({
  selector: 'configurer-plan',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, PlanNameValidator],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan {

  plan = input.required<PlanDto>();
  mode = input.required<string>();

}

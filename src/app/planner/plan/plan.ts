import { Component, input } from '@angular/core';
import { PlanDto } from '../../dto/plan';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'planner-plan',
  imports: [TranslatePipe, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan {

  item = input.required<PlanDto>();
}

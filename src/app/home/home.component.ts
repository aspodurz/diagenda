import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { BaseService } from '../service/base.service';
import { TitleComponent } from '../utils/title';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, MatButtonModule,  RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends TitleComponent {

}

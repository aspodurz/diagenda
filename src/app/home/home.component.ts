import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { BaseService } from '../service/base.service';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, TranslateDirective, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  constructor(private baseService: BaseService) {
  }

  setTitle(item: string) {
    this.baseService.setTitle(item);
  }

}

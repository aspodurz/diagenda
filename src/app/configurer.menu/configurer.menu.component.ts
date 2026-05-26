import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configurer-menu',
  imports: [
    TranslatePipe,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './configurer.menu.component.html',
  styleUrl: './configurer.menu.component.css',
})
export class ConfigurerMenuComponent {

}

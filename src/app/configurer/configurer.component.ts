import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-configurer',
  imports: [TranslatePipe, MatButtonModule,RouterLink],
  templateUrl: './configurer.component.html',
  styleUrl: './configurer.component.scss'
})
export class ConfigurerComponent {

}

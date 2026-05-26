import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import {MatTableModule} from '@angular/material/table';
import { SecureStoreService } from '../service/store.service';
import { ConfigurationDto } from '../dto/configuration';
import { StoreConstants } from '../utils/constants.component';
import { OptionDto } from '../dto/option';
import { TitleComponent } from '../utils/title';

@Component({
  selector: 'app-plan.loader.component',
  imports: [TranslatePipe, MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './plan.loader.component.html',
  styleUrl: './plan.loader.component.css',
})
export class PlanLoaderComponent extends TitleComponent {
  private readonly storeService = inject(SecureStoreService);
  private route = inject(ActivatedRoute);
  
  elements: string[] = [];
  
  selectRouterLink: string = '';
  backRouterLink: string = '';
  backTitle: string = '';


  constructor() {
      super();
      let config: ConfigurationDto = new ConfigurationDto();
      const df = JSON.stringify(config, null, 2);
      let content = this.storeService.getItemDefault(StoreConstants.CONFIGURATIONS_KEY, df).then((out) => { const res = JSON.parse(out); this.elements = res.elements; });

      let mode = this.route.snapshot.queryParamMap.get('mode');
      if(mode === 'configurer'){
        this.selectRouterLink = '/planner-component';
        this.backRouterLink = '/configurer-component';
        this.backTitle = 'app.configurer.title';
      }else if(mode === 'viewer'){
        this.selectRouterLink = '/viewer-component';
        this.backRouterLink = '/home-component';
        this.backTitle = 'app.home.title';
      }
    }
}

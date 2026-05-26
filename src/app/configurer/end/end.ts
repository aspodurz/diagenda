import { Component, inject, input } from '@angular/core';
import { PlanDto } from '../../dto/plan';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SecureStoreService } from '../../service/store.service';
import { ConfigurationDto } from '../../dto/configuration';
import { StoreConstants } from '../../utils/constants.component';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'configurer-end',
  imports: [TranslatePipe, MatButtonModule, RouterLink],
  templateUrl: './end.html',
  styleUrl: './end.css',
})
export class End {
  private readonly storeService = inject(SecureStoreService);
  private readonly baseService = inject(BaseService);
  plan = input.required<PlanDto>();

  async savePlan(): Promise<void> {
    console.log('Saving plan');
    if (this.plan().name) {
      let key: string = this.plan().name?? '';
      let config: ConfigurationDto=new ConfigurationDto();
      const df=JSON.stringify(config, null, 2);
      let content=await this.storeService.getItemDefault(StoreConstants.CONFIGURATIONS_KEY, df);
      content=this.baseService.fixString(content);

      config = JSON.parse(content);
      if (!config.elements.includes(key)) {
        config.elements.push(key);
        let cfg = JSON.stringify(config, null, 2);
        await this.storeService.setItem(StoreConstants.CONFIGURATIONS_KEY, cfg);
      }
      
      let data = JSON.stringify(this.plan());
      await this.storeService.setItem(key, data);
      console.log(data);
    }
  }
}

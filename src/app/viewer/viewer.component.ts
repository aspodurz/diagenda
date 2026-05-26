import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { SecureStoreService } from '../service/store.service';
import { PlanDto } from '../dto/plan';

@Component({
  selector: 'app-viewer',
  imports: [TranslatePipe, MatTabsModule, MatListModule, MatButtonModule, RouterLink],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
  private route = inject(ActivatedRoute);
  private serviceStore= inject(SecureStoreService);
  plan: PlanDto = new PlanDto();

  constructor() {
    let key = this.route.snapshot.queryParamMap.get('plan');
    if(key){
      this.serviceStore.getItem(key).then((out) => { const res = JSON.parse(out); this.plan=res; });
    }
  }


}

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';
import { ConfigurerComponent } from './configurer/configurer.component';
import { ViewerComponent } from './viewer/viewer.component';
import { PlannerComponent } from './planner/planner.component';
import { PlanLoaderComponent } from './plan.loader/plan.loader.component';
import { ConfigurerMenuComponent } from './configurer.menu/configurer.menu.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'viewer-component', component: ViewerComponent },
    { path: 'configurer-menu-component', component: ConfigurerMenuComponent },
    { path: 'configurer-component', component: ConfigurerComponent },
    { path: 'plan-loader-component', component: PlanLoaderComponent },
    { path: 'planner-component', component: PlannerComponent},
    { path: 'setting-component', component: SettingComponent },
    { path: 'about-component', component: AboutComponent },
    { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);

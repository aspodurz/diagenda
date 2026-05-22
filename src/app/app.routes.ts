import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'viewer-component', component: SettingComponent },
    { path: 'setting-component', component: SettingComponent },
    { path: 'about-component', component: AboutComponent },
    { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);

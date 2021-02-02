import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MobileAppPageComponent } from './mobile-app-page/mobile-app-page.component';
import { WebAppPageComponent } from './web-app-page/web-app-page.component';
import { DigitalMarketingPageComponent } from './digital-marketing-page/digital-marketing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {path: '', component: HomePageComponent}
    ]
  },
  {
    path: 'about-us',
    children: [
      {path: '', component: AboutPageComponent}
    ]
  },
  {
    path: 'service',
    children: [
      {path: 'mobile-application', component: MobileAppPageComponent},
      {path: 'web-application', component: WebAppPageComponent},
      {path: 'digital-marketing', component: DigitalMarketingPageComponent}
    ]
  },
  {
    path: 'contact-us',
    children: [
      {path: '', component: ContactPageComponent}
      
    ]
  },
  {
    path: 'our-customers',
    children: [
      {path: '', component: CustomerPageComponent}
      
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

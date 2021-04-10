import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorComponent } from './utilities/color/color.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
// import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '', component: LayoutComponent ,children: [
      { path: '', component: DashboardComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'utilities', children: [
          { path: 'color', component: ColorComponent, data: { seo: "111" } },
          { path: 'color/:type', component: ColorComponent, data: { seo: "111" } }
        ]
      },
      { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    //QuicklinkModule,
    //preloadingStrategy:QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

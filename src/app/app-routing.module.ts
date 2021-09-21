import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { AttentionComponent } from './pages/attention/attention.component';


const routes: Routes = [
  { path: 'attention', component: AttentionComponent },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },

  {
    path: '',
    redirectTo: 'attention',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

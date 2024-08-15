
import { CancellationDemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  // other routes
  { path: 'cancellation-demo', component: CancellationDemoComponent },
  { path: '', redirectTo: '/introduction-to-reactivex', pathMatch: 'full' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

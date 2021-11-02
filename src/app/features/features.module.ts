import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featureComponent } from './feature/feature.component';

/*
const routes = [
  {
    path:"feature",
    component: featureComponent
}
];
*/

@NgModule({
  declarations: [featureComponent],
  imports: [
    CommonModule
  ],
  exports:[featureComponent]
})
export class FeaturesModule { }

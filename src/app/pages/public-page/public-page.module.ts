import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutes } from './public-page.routing';
import { DashboardModule } from '../../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PublicRoutes),
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  declarations: [
  ],
  entryComponents: [
  ]
})

export class PublicPageModule {}

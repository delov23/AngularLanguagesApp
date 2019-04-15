import {NgModule} from '@angular/core';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatBadgeModule,
  MatProgressBarModule,
} from '@angular/material';

let modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatBadgeModule,
  MatProgressBarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
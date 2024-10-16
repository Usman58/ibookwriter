import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './directives/click-outside.directive';
// Adjust the path accordingly

@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ClickOutsideDirective],
  imports: [CommonModule]
})
export class SharedModule {}

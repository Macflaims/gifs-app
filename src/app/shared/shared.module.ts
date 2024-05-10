import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';




@NgModule({
  imports: [CommonModule,],
  exports: [SidebarComponent],
  declarations: [
    SidebarComponent
  ],
  providers: [],
})
export class SharedModule { }

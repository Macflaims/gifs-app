import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazyImage/lazyImage.component';




@NgModule({
  imports: [CommonModule,],
  exports: [SidebarComponent, LazyImageComponent],
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  providers: [],
})
export class SharedModule { }

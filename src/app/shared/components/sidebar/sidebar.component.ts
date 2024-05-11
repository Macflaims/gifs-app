import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) { }

  searchTag(tag: string): void {
    return this.GifsService.searchTag(tag)
  }

  get tags() {
    return this.GifsService.tagsHistory
  }

}

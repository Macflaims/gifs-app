
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  ngOnInit(): void {
    if (!this.url) throw new Error("url no provided")
  }

  public hasLoaded: boolean = false;

  onLoad() {
    console.log("imagen cargada");
    this.hasLoaded = true;
  }
}

import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-battista';

// @HostBinding('class') componentCssClass : any;

  constructor(private overlayContainer : OverlayContainer){}

  public onSet(e: string){
    //this.overlayContainer.getContainerElement().classList.add(e);
    //this.componentCssClass = e;
  }

}



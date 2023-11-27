import {Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  info1() {
    const element = this.el.nativeElement.querySelector('#informacion1');
    if (element) {
      this.renderer.setStyle(element, 'display', 'block');
    }
    this.hideOtherElements(['informacion2', 'informacion3', 'informacion4']);
  }

  info2() {
    const element = this.el.nativeElement.querySelector('#informacion2');
    if (element) {
      this.renderer.setStyle(element, 'display', 'block');
    }
    this.hideOtherElements(['informacion1', 'informacion3', 'informacion4']);
  }

  info3() {
    const element = this.el.nativeElement.querySelector('#informacion3');
    if (element) {
      this.renderer.setStyle(element, 'display', 'block');
    }
    this.hideOtherElements(['informacion1', 'informacion2', 'informacion4']);
  }

  info4() {
    const element = this.el.nativeElement.querySelector('#informacion4');
    if (element) {
      this.renderer.setStyle(element, 'display', 'block');
    }
    this.hideOtherElements(['informacion1', 'informacion2', 'informacion3']);
  }

  private hideOtherElements(idsToHide: string[]): void {
    idsToHide.forEach(id => {
      const elementToHide = this.el.nativeElement.querySelector(`#${id}`);
      if (elementToHide) {
        this.renderer.setStyle(elementToHide, 'display', 'none');
      }
    });
  }
}

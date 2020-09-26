import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const MACHINE_SPECS = {
  machineWidth: 640,
  screenWidth: 480,
};

@Component({
  selector: 'app-tetris-container',
  templateUrl: './tetris-container.component.html',
  styleUrls: ['./tetris-container.component.scss']
})
export class TetrisContainerComponent implements OnInit {

  styles$: Observable<any> = of(this.getStyles());

  constructor() { }

  ngOnInit() {
    this.styles$ = fromEvent(window, 'resize').pipe(
      map(this.getStyles)
    );

  }

  getStyles() {
    const h = document.documentElement.clientHeight;
    const w = document.documentElement.clientWidth;
    const ratio = h / w;
    const scale = (ratio < 1.5) ? h / 960 : w / MACHINE_SPECS.machineWidth;
    const filling = (h - (960 * scale)) / scale / 3;
    const paddingTop = Math.floor(filling) + 42;
    const paddingBottom = Math.floor(filling);
    const marginTop = Math.floor(-1 * MACHINE_SPECS.screenWidth - (filling * 1.5));

    const styles = {
      'transform': `scale(${scale})`,
      'padding-top': `${paddingTop}px`,
      'padding-bottom': `${paddingBottom}px`,
      'margin-top': `${marginTop}px`
    };
    return styles;
  }
   

}
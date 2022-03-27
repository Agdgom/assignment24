import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
})
export class Task2Component implements OnInit {
  divs: number[] = [];

  constructor() {}

  ngOnInit() {
    this.push();
  }

  push() {
    let i = 0;
    while (i < 49) {
      this.divs.push(i);
      i++;
    }
  }
}

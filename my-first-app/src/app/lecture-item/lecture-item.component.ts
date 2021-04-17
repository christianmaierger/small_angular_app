import { Component, Input, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';

@Component({

  // meaning like in Css a elem with class after . so here it is: <a class="app-lecture-item item"/>
  selector: 'a.app-lecture-item',
  templateUrl: './lecture-item.component.html',
  styleUrls: ['./lecture-item.component.css']
})
export class LectureItemComponent implements OnInit {

//You can transfer data, especially between parent- and children-components via @Input()-property. The decorator marks the class field as an input property 
//and provides configuration metadata. This declares a data-bound input property, which is automatically updated during change detection.
  @Input() lecture: Lecture;
  constructor() { }


  

  ngOnInit(): void {
  }

}

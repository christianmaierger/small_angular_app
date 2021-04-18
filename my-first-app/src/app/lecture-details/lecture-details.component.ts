import { Component, Input, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit {

@Input() lecture: Lecture;

  constructor() { }

  ngOnInit(): void {
  }

}

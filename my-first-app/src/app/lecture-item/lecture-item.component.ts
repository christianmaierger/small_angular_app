import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'app-lecture-item',
  templateUrl: './lecture-item.component.html',
  styleUrls: ['./lecture-item.component.css']
})
export class LectureItemComponent implements OnInit {


  lecture: Lecture = {
    id: 1,
    name: 'Webtechnologien',
    room: '075',
    day: 'Monday',
    time: {hours: 10, minutes: 15},
    building: 'WE5',
    floor: '02',
    department: 'Lehrstuhl für Medieninformatik'
  }

  constructor() { }


  

  ngOnInit(): void {
  }

}

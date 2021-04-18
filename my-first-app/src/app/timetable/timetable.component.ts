import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';
import { LECTURES } from '../shared/mock-lectures';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: []
})
export class TimetableComponent implements OnInit {

  lectures: Lecture[];
  selectedLecture: Lecture;

  onSelect(lecture: Lecture): void {
    this.selectedLecture = lecture;
  }

  getLectures(): void {
    this.lectureService.getLectures()
    .subscribe(lectureArray => this.lectures = lectureArray);
  }

  // Singleton Pattern, wir können keine Dependencies per new anlegen und da der Service nur EIN mal injeziert wurde, existiert nur EIN Objekt
  constructor(private lectureService: LectureService) { }
 
  
  

  ngOnInit(): void {
    this.getLectures();
  }

}

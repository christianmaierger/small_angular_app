import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit {

@Input() lecture: Lecture;

constructor(
  private route: ActivatedRoute,
  private lectureService: LectureService,
  private location: Location
) { 
}


getLecture(): void {
  const id = +this.route.snapshot.paramMap.get("id");
  this.lectureService.getLecture(id)
  .subscribe(lecture => this.lecture = lecture);
}

goBack(): void {
  this.location.back();
}

  ngOnInit(): void {
    this.getLecture();
  }

}



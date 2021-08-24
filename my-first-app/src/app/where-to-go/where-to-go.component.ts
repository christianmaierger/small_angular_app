import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';


// Decorator to tell Angular this is a Component
@Component({

  // selector for css, but also custom element to be inserted in other components template like: <app-where-to-go> </app-where-to-go>
  selector: 'app-where-to-go',
  // location of this components html template
  templateUrl: './where-to-go.component.html',
  // location of this components css or other type of stylesheet | optional!
  styleUrls: ['./where-to-go.component.css']
})

// The components class always needs to be exported, to reuse it in other files, for example the AppModule, which is the root of every Angular project.
export class WhereToGoComponent implements OnInit {


  lectures: Lecture[];
nextLecture: Lecture;
isThereANextLecture: boolean = false;
tempLecture;

  //in TypeScript only ONE constructor is allowed
  //when called, neither input- and output-data-bindings nor the child components are available -> only little logic in constructor preferrable.
  constructor(private lectureService: LectureService) { }


  //ngOnInit is one of the provided component lifecycle hook methods. It will be called once after the component is
  //initialized after calling the constructor and after all input-data-bindings are initialised. 
  //This function is used to place additional initialisation logic.
  ngOnInit() {
    this.getLectures();
}

getLectures(): void {
    this.lectureService.getLectures()
      .subscribe(lectures => {this.lectures = lectures;
        this.getNextLecture()}
      );
}
  getNextLecture() {
    console.log("Method called");
    let currentdate: Date = new Date(); 
    let currentDayAsNumber: number = currentdate.getDay();
    let weekDayStrings = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentWeekDayAsString: string = weekDayStrings[currentDayAsNumber];

    var hours: number = currentdate.getHours();
    var minutes: number = currentdate.getMinutes();
    let time = { hours, minutes };
    this.tempLecture = new Lecture(0, "Dummy", "0", currentWeekDayAsString, time, "WE5", "0");
    let onSameDay = false;
   
    let diff = 24;
   
    for (let lecture of this.lectures) {

      let lectureDayAsNumber = weekDayStrings.indexOf(lecture.day);

      console.log(lecture.day + "  " + currentWeekDayAsString)
      if(lecture.day === currentWeekDayAsString) {
        console.log("there is one upcoming or same day");
        if(lecture.time.hours >= hours) {
          console.log("there is on upcoming on day");
          if(this.tempLecture.time.hours>=lecture.time.hours) {
            this.tempLecture=lecture;
            this.isThereANextLecture = true;
            onSameDay=true;
            console.log("true on same day");
          }
        } 
      }
      const difference = currentDayAsNumber-lectureDayAsNumber;
      let tempDayAsNumber = weekDayStrings.indexOf(this.tempLecture.day);
      if (onSameDay==false && currentDayAsNumber-lectureDayAsNumber<= difference) {
        console.log("there is on other day");
        if(lecture.time.hours >= hours) {
          
          console.log("there is on upcoming on other day later hour");
          if(this.tempLecture.time.hours-lecture.time.hours < diff) {
            this.tempLecture=lecture;
            console.log("true on other day");
            diff = this.tempLecture.time.hours - lecture.time.hours;
            this.isThereANextLecture = true;
          }
      }
    }
    if(this.isThereANextLecture) {
      this.nextLecture = this.tempLecture;
    }
  }
}



}

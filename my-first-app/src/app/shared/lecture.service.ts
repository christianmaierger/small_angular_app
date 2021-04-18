import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lecture } from './lecture';
import { LECTURES } from './mock-lectures';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor() { }

  getLectures(): Observable<Lecture[]> {
    return of(LECTURES);
  }

}

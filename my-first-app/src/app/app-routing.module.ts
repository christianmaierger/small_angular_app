import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';
import { TimetableComponent } from './timetable/timetable.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';

const routes: Routes = [{ path: "", redirectTo: "/where-to-go", pathMatch: "full" },{ path: "timetable", component: TimetableComponent },
{ path: "where-to-go", component: WhereToGoComponent }, { path: "lecture-details/:id", component: LectureDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

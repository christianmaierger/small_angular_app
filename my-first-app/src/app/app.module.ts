import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { LectureItemComponent } from './lecture-item/lecture-item.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FormsModule } from '@angular/forms';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';

@NgModule({
  // allle Components in diesem Modul
  declarations: [
    AppComponent,
    WhereToGoComponent,
    LectureItemComponent,
    TimetableComponent,
    LectureDetailsComponent
  ],
  // generelle Module von Angular, die man hier verwenden will oder auch selbst erstellte
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  // Services kann man hier eintragen oder im Constructor einer Klasse per Dependency Injection und kennzeichen des Services mit Decorator: Injectable()
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

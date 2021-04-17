import { Component, OnInit } from '@angular/core';


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


  tempText: string = "Here will appear your information soon!";

  //in TypeScript only ONE constructor is allowed
  //when called, neither input- and output-data-bindings nor the child components are available -> only little logic in constructor preferrable.
  constructor() { }


  //ngOnInit is one of the provided component lifecycle hook methods. It will be called once after the component is
  //initialized after calling the constructor and after all input-data-bindings are initialised. 
  //This function is used to place additional initialisation logic.
  ngOnInit(): void {
  }

}

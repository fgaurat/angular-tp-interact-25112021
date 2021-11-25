import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {


  @Output()
  nameChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  send(name:string){
    console.log("OutputChildComponent "+name)
    this.nameChanged.emit(name)
  }

  sayHello(){
    console.log("Hello from OutputChildComponent")
  }
}

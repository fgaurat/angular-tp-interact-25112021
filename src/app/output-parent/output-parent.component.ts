import { Component, OnInit, ViewChild } from '@angular/core';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {

  @ViewChild(OutputChildComponent)
  outputChild?:OutputChildComponent

  name="..."
  constructor() { }

  ngOnInit(): void {
  }

  onNameChanged(name:string){
    console.log("OutputParentComponent",name)
    this.name = name
  }

  callSayHello(){
    this.outputChild?.sayHello()
  }
}

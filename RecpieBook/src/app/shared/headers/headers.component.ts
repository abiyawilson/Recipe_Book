import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Output() selectedNav = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  selected(value:string){
      this.selectedNav.emit(value);
  }
}

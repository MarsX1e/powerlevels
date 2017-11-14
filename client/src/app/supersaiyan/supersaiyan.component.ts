import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupersaiyanComponent implements OnInit {
  @Input() power:number;
  constructor() { }

  ngOnInit() {
  }

}

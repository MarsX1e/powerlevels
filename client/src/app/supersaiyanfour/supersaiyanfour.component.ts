import { Component, OnInit, ViewEncapsulation,Input} from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupersaiyanfourComponent implements OnInit {
  @Input() power:number;
  constructor() { }

  ngOnInit() {
  }

}

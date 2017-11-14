import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeadComponent implements OnInit {
  power:number;
  user:{[key:string]:number};
  constructor() {
    this.power=0;
    this.user={"powerlevel":0}
   }
  submit(){
    this.power=this.user.powerlevel;
  }
  ngOnInit() {
  }

}

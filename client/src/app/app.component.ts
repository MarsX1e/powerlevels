import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  power:number;
  user:{[key:string]:number};
  constructor() {
    this.power=0;
    this.user={"powerlevel":0}
   }
   submit(){
    this.power=this.user.powerlevel;
  }
}

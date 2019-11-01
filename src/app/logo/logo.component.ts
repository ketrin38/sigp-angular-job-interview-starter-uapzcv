
import { Component, ViewChild, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Input() width:number;
  public counter = 0;
  ngOnInit():void {

  }

  count():void {
    this.counter++;
  }
}
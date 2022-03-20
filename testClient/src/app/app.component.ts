import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  @ViewChild('addTruma') addTruma:any;
  @ViewChild('trumotList') trumotList:any;

  AddTrumaTabOn() {
    this.addTruma.nativeElement.style.background="#3d759a";
    this.addTruma.nativeElement.style.color="white";
    this.trumotList.nativeElement.style.background="white";
    this.trumotList.nativeElement.style.color="#3d759a";
  }

  trumotListTabOn() {
    this.trumotList.nativeElement.style.background="#3d759a";
    this.trumotList.nativeElement.style.color="white";
    this.addTruma.nativeElement.style.background="white";
    this.addTruma.nativeElement.style.color="#3d759a";
  }

  ngOnInit(): void {
    
  }
}

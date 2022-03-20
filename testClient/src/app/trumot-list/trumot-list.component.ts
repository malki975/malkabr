import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trumot-list',
  templateUrl: './trumot-list.component.html',
  styleUrls: ['./trumot-list.component.css']
})
export class TrumotListComponent implements OnInit {

  @Input() namet:string;
  
  flag: boolean = true;
  name: string;
  sum: number;

  constructor() { }

  ngOnInit(): void {

  }

  addTruma(form: NgForm) {
    // this.insertRecord(form);

  }

  edit(form: NgForm) {
    this.flag = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-truma-edit-state',
  templateUrl: './truma-edit-state.component.html',
  styleUrls: ['./truma-edit-state.component.css']
})
export class TrumaEditStateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reset(form: NgForm) {
    form.form.reset();
    // this.service.addTrumaData = new AddTrumaModel();
  }

  onSubmit(form: NgForm) {
    // this.insertRecord(form);
  }

}

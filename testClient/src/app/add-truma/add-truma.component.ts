import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrumotServiceService } from '../trumot-service.service';
import { AddTrumaModel } from './add-truma-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrumotListComponent } from '../trumot-list/trumot-list.component';

@Component({
  selector: 'app-add-truma',
  templateUrl: './add-truma.component.html',
  styleUrls: ['./add-truma.component.css']
})
export class AddTrumaComponent implements OnInit {

  formData: FormGroup;
  numRegex = /^-?\d*[.,]?\d{0,2}$/;
  typeList: any = ['firstType', 'secondType', 'thirdType'];
  currencyTypeList: any = ['dollar', 'nis', 'euro'];

  constructor(public service: TrumotServiceService) { }
  changeWebsite(e) {
    console.log(e.target.value);
  }

  nameValidator(control: FormControl): { [key: string]: boolean } {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }
  }


  ngOnInit(): void {

    this.formData = new FormGroup({
      Name: new FormControl('"', [Validators.compose([Validators.required, this.nameValidator])]),
      Sum: new FormControl('"', [Validators.required, Validators.pattern(this.numRegex)]),
      Type: new FormControl('"', [Validators.required]),
      Purpose: new FormControl('"', [Validators.required]),
      CurrencyType: new FormControl('"', [Validators.required]),
      ExchangeRate: new FormControl('"', [Validators.required]),
    })
  }

  reset(form: NgForm) {
    form.form.reset();
    this.service.addTrumaData = new AddTrumaModel();
  }

  onSubmit(form: NgForm) {
    if (this.formData.valid) {
      console.log("כל השדות תקינים");
    }
    else {
      console.log("ישנם שדות שאינם תקינים");
    }
    this.addTruma(form);
  }
  status: string;

  addTruma(form: NgForm) {
    this.service.addTrumaData.Name = this.service.addTruma.name;
    // this.service.addTrumaData.Sum = this.service.addTruma.sum;

    this.service.addTruma().subscribe(
      res => {
        // this.status = "5";
      },
      err => { console.log(err); }
    );

  }




}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    email: ['', Validators.required],
    address:['', Validators.required],
    password:['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    accountHolderName: ['', Validators.required],
    bankName: ['', Validators.required],
    accountNumber: ['', Validators.required],
    UPI_id:['', Validators.required]
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}

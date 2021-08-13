import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  person!: any[];

  formObj: any = {};
  constructor() {}

  ngOnInit(): void {
    this.person = [
      {
        name: 'Armaan',
        age: 27,
        sex: 'other',
        country: 'India',
      },
      {
        name: 'Hari',
        age: 23,
        country: 'Pakistan',
      },
    ];
  }

  submitForm = () => {
    console.log(this.formObj);
  };
}

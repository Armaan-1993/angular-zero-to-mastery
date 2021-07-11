import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  person!: any[];
  constructor() {}

  ngOnInit(): void {
    this.person = [
      {
        name: 'Armaan',
        age: 27,
        country: 'India',
      },
      {
        name: 'Hari',
        age: 23,
        country: 'Pakistan',
      },
    ];
  }
}

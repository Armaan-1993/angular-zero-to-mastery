import { Component, OnInit } from '@angular/core';
import { Details } from './model/details.model';

@Component({
  selector: 'app-roots',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  details!: Details[];
  name!: string;
  age!: number;
  isShown: boolean = true;
  input!: string;
  title: any = 'hello-world';
  ngOnInit(): void {
    this.details = [
      {
        name: 'Armaan',
        age: 27,
        sex: 'pokkii adi',
      },
      { name: 'Mohmmed', age: 24, sex: 'no pokki adi' },
    ];
  }

  hello = (num: number) => {
    this.age = num;
    console.log(this.age);
  };

  clickMe = (e: any) => {
    this.input = e.target.value;
    console.log(e.target.value);
  };
}

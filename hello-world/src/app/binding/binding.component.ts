import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  result!: any;
  newVal!: string;
  keyUp!: number;
  constructor() {}

  ngOnInit(): void {
    this.result = 'One way binding';
  }

  hey = (yo: any) => {
    console.log(yo);
  };

  //   toShowKeyUp = (e: any) => {
  //     this.keyUp = e.target.value;
  //   };
}

import { Component, OnInit } from '@angular/core';
import { Details } from '../model/details.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  details!: Details[];
  isVisible: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.details = [
      {
        name: 'Sreerag',
        age: 22,
        sex: 'male',
      },
      {
        name: 'Mahesh',
        age: 23,
        sex: 'male',
      },
      {
        name: 'Meera',
        age: 23,
        sex: 'Female',
      },

      {
        name: 'Jeena',
        age: 24,
        sex: 'Female',
      },

      {
        name: 'Preetha',
        age: 31,
        sex: 'Female',
      },
    ];
  }

  clickToDisplay = () => {
    this.isVisible = true;
  };

  clickToHide = () => {
    this.isVisible = false;
  };
}

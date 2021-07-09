import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathServiceService {
  usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private api: HttpClient) {}

  public GetData = () => {
    return this.api.get(this.usersUrl);
  };
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:7102/api/users/GetList';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<string>(this.url);
  }

  getTodo(id: number) {
    return this.http.get<string>(this.url + '/' + id);
  }
}

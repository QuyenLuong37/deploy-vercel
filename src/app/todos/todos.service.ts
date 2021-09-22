import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = [];
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.baseUrl}/todos`).subscribe((res: any) => {
      this.todos = res;
    })
  }
}

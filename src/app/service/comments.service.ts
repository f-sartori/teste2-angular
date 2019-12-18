import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }

  searchById(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
  }
  

 
}


  
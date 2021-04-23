import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  
  constructor(private http:HttpClient) { }
  url='http://localhost:8081/enroll'
  enroll(data:Data){
    return this.http.post<any>(this.url,data)  
  }
}

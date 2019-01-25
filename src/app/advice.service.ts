import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ADVICE = 'https://api.adviceslip.com/advice';
@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  currentAdvice:any;
  constructor(private http:HttpClient) { }
  
  
  getAdvice(id){
    return this.http.get(`${API_ADVICE}/${id}`);
  }
}

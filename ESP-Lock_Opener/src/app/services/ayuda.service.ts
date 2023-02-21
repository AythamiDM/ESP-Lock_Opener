import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AyudaService {

  constructor(private http: HttpClient) { }

  getAyudas() {
    return this.http.get('/assets/data/ayuda.json');
  }

}
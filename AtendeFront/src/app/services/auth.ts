import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private http: HttpClient){}

  authenticate(creds: Credenciais){
    return this.http.post()
  }
  
}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userinterface } from './UserInterface/userinterface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor( private http:HttpClient) { }

  baseUrl: string = 'http://localhost:8080';
  

  getUser():Observable<Userinterface[]> {
    return this.http.get<Userinterface[]>(this.baseUrl + "/getall");
}

  addUser(user) {
           let body = JSON.stringify(user);
           return this.http.post(this.baseUrl + "/add", body, httpOptions);
      }
      
  updateUser(user) {
               let body = JSON.stringify(user);
               return this.http.put(this.baseUrl + "/update" + user.id, body, httpOptions);
         }
      
 deleteUser(user) {
                return this.http.delete(this.baseUrl + "/delete" + user.id);
           }

}

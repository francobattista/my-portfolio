import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  GH_API = 'https://api.github.com/users/francobattista/repos'

  constructor(private http:HttpClient) { }


  getRepositories():Observable<any>
  {
    return this.http.get(this.GH_API);
  }
}

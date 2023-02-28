import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  GH_API = 'https://api.github.com/users/francobattista/repos'
  GH_BASE_API = 'https://api.github.com/repos/'

  public appTheme:string = 'dark';

  constructor(private http:HttpClient) { }


  getRepositories():Observable<any>
  {
    return this.http.get(this.GH_API);
  }

  getOneRepository(fullPath:string):Observable<any>
  {
    return this.http.get(this.GH_BASE_API + fullPath);
  }


  setApplicationTheme(theme: string){
    this.appTheme = theme;
  }
}

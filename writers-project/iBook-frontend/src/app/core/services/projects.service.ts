import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
   
  
  constructor(private http: HttpClient) { }
  projectsApi(): Observable<any> {
   
    return this.http.get(baseUrl + 'projects/');
  }
  createProject(data: any): Observable<any> {
    return this.http.post(baseUrl + "projects/", data)
  }
 
}

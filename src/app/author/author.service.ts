import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorDetail } from './author-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl: string = environment.baseUrl + 'authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<AuthorDetail[]>{
    return this.http.get<AuthorDetail[]>(this.apiUrl);
  }

  getAuthor(id: String): Observable<AuthorDetail> {
    return this.http.get<AuthorDetail>(this.apiUrl+'/'+id);
  }

}

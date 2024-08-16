import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Promise<T> {
    return lastValueFrom(this.http.get<T>(`${this.apiUrl}/${endpoint}`));
  }

  post<T>(endpoint: string, body: any): Promise<T> {
    return lastValueFrom(this.http.post<T>(`${this.apiUrl}/${endpoint}`, body));
  }

  put<T>(endpoint: string, body: any): Promise<T> {
    return lastValueFrom(this.http.put<T>(`${this.apiUrl}/${endpoint}`, body));
  }

  delete<T>(endpoint: string): Promise<T> {
    return lastValueFrom(this.http.delete<T>(`${this.apiUrl}/${endpoint}`));
  }
}

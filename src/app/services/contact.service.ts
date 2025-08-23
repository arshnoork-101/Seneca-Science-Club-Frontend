import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  submitMessage(message: ContactMessage): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }

  getFAQ(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(`${this.apiUrl}/faq`);
  }
}

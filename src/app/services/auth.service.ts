import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface AuthResponse {
  user: User;
  token: string;
  message: string;
}

interface AuthStatus {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  public authStatus$ = new BehaviorSubject<AuthStatus>({ isLoggedIn: false, isAdmin: false });

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.getCurrentUser().subscribe();
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(map(response => {
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(response.user);
        this.authStatus$.next({ isLoggedIn: true, isAdmin: response.user.role === 'admin' });
        return response;
      }));
  }

  register(userData: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, userData)
      .pipe(map(response => {
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(response.user);
        this.authStatus$.next({ isLoggedIn: true, isAdmin: response.user.role === 'admin' });
        return response;
      }));
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`)
      .pipe(map(user => {
        this.currentUserSubject.next(user);
        this.authStatus$.next({ isLoggedIn: true, isAdmin: user.role === 'admin' });
        return user;
      }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.authStatus$.next({ isLoggedIn: false, isAdmin: false });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token') && this.currentUserSubject.value !== null;
  }

  isAdmin(): boolean {
    const currentUser = this.currentUserSubject.value;
    return currentUser?.role === 'admin' || false;
  }

  verifyAccessCode(accessCode: string): Observable<boolean> {
    return this.http.post<{ valid: boolean }>(`${this.apiUrl}/verify-code`, { accessCode })
      .pipe(map(response => response.valid));
  }
}

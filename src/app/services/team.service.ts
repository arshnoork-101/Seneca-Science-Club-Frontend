import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  order: number;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:5000/api/team';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(this.apiUrl);
  }

  getMember(id: string): Observable<TeamMember> {
    return this.http.get<TeamMember>(`${this.apiUrl}/${id}`);
  }

  createMember(member: Partial<TeamMember>): Observable<TeamMember> {
    return this.http.post<TeamMember>(this.apiUrl, member);
  }

  updateMember(id: string, member: Partial<TeamMember>): Observable<TeamMember> {
    return this.http.put<TeamMember>(`${this.apiUrl}/${id}`, member);
  }

  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

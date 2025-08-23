import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  videoUrl?: string;
  category: string;
  tags: string[];
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = `${environment.apiUrl}/gallery`;

  constructor(private http: HttpClient) {}

  getItems(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(this.apiUrl);
  }

  getItem(id: string): Observable<GalleryItem> {
    return this.http.get<GalleryItem>(`${this.apiUrl}/${id}`);
  }

  uploadItem(item: FormData): Observable<GalleryItem> {
    return this.http.post<GalleryItem>(this.apiUrl, item);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

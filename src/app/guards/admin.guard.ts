import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    return this.authService.currentUser$.pipe(
      map(user => {
        if (user && (user.role === 'ADMIN' || user.role === 'MODERATOR')) {
          return true;
        }
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-blog-detail',
  template: `
    <div class="article-detail-container">
      <!-- Science Background -->
      <div class="science-background">
        <div class="large-science-tool tool-1">🧪</div>
        <div class="large-science-tool tool-2">🔬</div>
        <div class="large-science-tool tool-3">⚗️</div>
        <div class="large-science-tool tool-4">🔍</div>
        <div class="large-science-tool tool-5">🧬</div>
        <div class="large-science-tool tool-6">⚛️</div>
        <div class="large-science-tool tool-7">🌡️</div>
        <div class="large-science-tool tool-8">📊</div>
      </div>

      <div class="content" *ngIf="article">
        <!-- Back Button -->
        <button class="back-btn" (click)="goBack()">
          <span class="back-icon">←</span>
          Back to Articles
        </button>

        <!-- Article Header -->
        <header class="article-header">
          <div class="article-hero-image" *ngIf="article.image">
            <img [src]="article.image" [alt]="article.title" />
            <div class="hero-overlay"></div>
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
          <div class="article-meta">
            <div class="author-info">
              <span class="author-label">By</span>
              <span class="author-name">{{ article.author }}</span>
            </div>
            <div class="date-info">
              <span class="date-icon">📅</span>
              <span class="date">{{ article.date | date:'MMMM dd, yyyy' }}</span>
            </div>
          </div>
          <div class="article-tags">
            <span class="tag" *ngFor="let tag of article.tags">#{{ tag }}</span>
          </div>
        </header>

        <!-- Article Body -->
        <article class="article-body">
          <div class="article-content" [innerHTML]="formatArticleBody(article.body)"></div>
        </article>

        <!-- Article Actions -->
        <div class="article-actions">
          <button class="edit-btn" (click)="editArticle()">
            <span class="edit-icon">✏️</span>
            Edit Article
          </button>
          <button class="share-btn" (click)="shareArticle()">
            <span class="share-icon">🔗</span>
            Share
          </button>
        </div>
      </div>

      <!-- Article Not Found -->
      <div class="not-found" *ngIf="!article && !loading">
        <div class="not-found-icon">📄</div>
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist or has been removed.</p>
        <button class="back-btn" (click)="goBack()">Back to Articles</button>
      </div>

      <!-- Loading State -->
      <div class="loading" *ngIf="loading">
        <div class="loading-icon">⏳</div>
        <p>Loading article...</p>
      </div>

      <!-- Authentication Modal -->
      <div class="auth-modal" *ngIf="showAuth" (click)="hideAuthModal()">
        <div class="auth-content" (click)="$event.stopPropagation()">
          <h3>Enter Access Code</h3>
          <p>Please enter your mentor access code to edit this article.</p>
          <input 
            type="password" 
            [(ngModel)]="accessCode" 
            placeholder="Access Code"
            class="code-input"
            (keyup.enter)="verifyCode()"
          />
          <div class="auth-actions">
            <button class="cancel-btn" (click)="hideAuthModal()">Cancel</button>
            <button class="verify-btn" (click)="verifyCode()">Verify</button>
          </div>
          <div class="error-message" *ngIf="authError">{{ authError }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .article-detail-container {
      background-color: #1a1a1a;
      color: #ffffff;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      padding-top: 90px;
    }

    .science-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      overflow: hidden;
    }

    .large-science-tool {
      position: absolute;
      font-size: 7rem;
      opacity: 0.1;
      animation: floatAround 15s infinite linear;
      transform-origin: center;
      color: #333;
    }

    .tool-1 { top: 10%; left: 10%; animation-delay: 0s; }
    .tool-2 { top: 20%; right: 15%; animation-delay: -3s; }
    .tool-3 { top: 40%; left: 5%; animation-delay: -6s; }
    .tool-4 { top: 60%; right: 10%; animation-delay: -9s; }
    .tool-5 { top: 80%; left: 15%; animation-delay: -12s; }
    .tool-6 { top: 30%; right: 5%; animation-delay: -15s; }
    .tool-7 { top: 70%; left: 80%; animation-delay: -18s; }
    .tool-8 { top: 50%; left: 50%; animation-delay: -21s; }

    @keyframes floatAround {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
      75% { transform: translateY(-15px) rotate(3deg); }
    }

    .content {
      position: relative;
      z-index: 2;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .back-btn {
      background: #333;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 8px;
      cursor: pointer;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .back-btn:hover {
      background: #444;
      transform: translateX(-5px);
    }

    .back-icon {
      font-size: 1.2rem;
    }

    .article-header {
      margin-bottom: 40px;
      padding-bottom: 30px;
      border-bottom: 1px solid #333;
    }

    .article-hero-image {
      position: relative;
      width: 100%;
      height: 300px;
      margin-bottom: 30px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .article-hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
    }

    .article-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .article-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 15px;
    }

    .author-info, .date-info {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #ccc;
    }

    .author-label {
      font-weight: 500;
    }

    .author-name {
      font-weight: 600;
      color: #fff;
    }

    .date-icon {
      font-size: 1rem;
    }

    .article-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tag {
      background: #333;
      color: #ccc;
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .article-body {
      margin-bottom: 40px;
    }

    .article-content {
      line-height: 1.8;
      font-size: 1.1rem;
      color: #e0e0e0;
    }

    .article-content p {
      margin-bottom: 20px;
    }

    .article-content h1, .article-content h2, .article-content h3 {
      color: #ffffff;
      margin: 30px 0 15px 0;
    }

    .article-actions {
      display: flex;
      gap: 15px;
      padding-top: 30px;
      border-top: 1px solid #333;
    }

    .edit-btn, .share-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .edit-btn:hover, .share-btn:hover {
      background: #444;
      transform: translateY(-2px);
    }

    .not-found, .loading {
      position: relative;
      z-index: 2;
      text-align: center;
      padding: 100px 20px;
      color: #888;
    }

    .not-found-icon, .loading-icon {
      font-size: 4rem;
      margin-bottom: 20px;
      opacity: 0.7;
    }

    .not-found h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      color: #aaa;
    }

    /* Auth Modal */
    .auth-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .auth-content {
      background: #2a2a2a;
      padding: 30px;
      border-radius: 15px;
      max-width: 400px;
      width: 90%;
      text-align: center;
    }

    .auth-content h3 {
      margin-bottom: 15px;
      color: #ffffff;
    }

    .auth-content p {
      color: #ccc;
      margin-bottom: 20px;
    }

    .code-input {
      width: 100%;
      padding: 12px;
      border: 1px solid #555;
      border-radius: 8px;
      background: #1a1a1a;
      color: #fff;
      margin-bottom: 20px;
      font-size: 1rem;
    }

    .auth-actions {
      display: flex;
      gap: 10px;
      justify-content: center;
    }

    .cancel-btn, .verify-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cancel-btn {
      background: #555;
      color: white;
    }

    .verify-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
    }

    .cancel-btn:hover {
      background: #666;
    }

    .verify-btn:hover {
      background: #444;
    }

    .error-message {
      color: #ff6b6b;
      margin-top: 10px;
      font-size: 0.9rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .article-title {
        font-size: 2rem;
      }

      .article-meta {
        flex-direction: column;
        gap: 10px;
      }

      .article-content {
        font-size: 1rem;
      }

      .article-actions {
        flex-direction: column;
      }

      .content {
        padding: 20px 15px;
      }
    }

    @media (max-width: 480px) {
      .article-title {
        font-size: 1.6rem;
      }

      .tag {
        font-size: 0.8rem;
        padding: 4px 8px;
      }
    }
  `]
})
export class BlogDetailComponent implements OnInit {
  article: any = null;
  loading = true;
  showAuth = false;
  accessCode = '';
  authError = '';

  private readonly VALID_ACCESS_CODE = 'SSC2024MENTOR';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadArticle();
  }

  loadArticle() {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.blogService.getPost(articleId).subscribe({
        next: (article) => {
          this.article = article;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading article:', error);
          // Fallback to localStorage
          const storedArticles = localStorage.getItem('ssc_articles');
          if (storedArticles) {
            const articles = JSON.parse(storedArticles);
            this.article = articles.find((a: any) => a.id.toString() === articleId);
          }
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }

  formatArticleBody(body: string): string {
    return body.replace(/\n/g, '<br><br>');
  }

  goBack() {
    this.router.navigate(['/articles']);
  }

  editArticle() {
    this.showAuth = true;
    this.accessCode = '';
    this.authError = '';
  }

  hideAuthModal() {
    this.showAuth = false;
    this.accessCode = '';
    this.authError = '';
  }

  verifyCode() {
    this.authService.verifyAccessCode(this.accessCode).subscribe({
      next: (isValid: boolean) => {
        if (isValid) {
          this.hideAuthModal();
          // Navigate back to articles page with edit mode
          this.router.navigate(['/articles'], { 
            queryParams: { edit: this.article.id } 
          });
        } else {
          this.authError = 'Invalid access code. Please try again.';
        }
      },
      error: (error: any) => {
        console.error('Error verifying access code:', error);
        // Fallback to hardcoded verification for development
        if (this.accessCode === this.VALID_ACCESS_CODE) {
          this.hideAuthModal();
          this.router.navigate(['/articles'], { 
            queryParams: { edit: this.article.id } 
          });
        } else {
          this.authError = 'Invalid access code. Please try again.';
        }
      }
    });
  }

  shareArticle() {
    if (navigator.share) {
      navigator.share({
        title: this.article.title,
        text: this.article.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  }
}

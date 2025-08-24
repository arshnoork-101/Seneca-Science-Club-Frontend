import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-blog',
  template: `
    <div class="articles-container">
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
        <div class="large-science-tool tool-9">🔭</div>
        <div class="large-science-tool tool-10">💊</div>
        <div class="large-science-tool tool-11">🧫</div>
        <div class="large-science-tool tool-12">⚖️</div>
        <div class="large-science-tool tool-13">🌌</div>
        <div class="large-science-tool tool-14">🔋</div>
        <div class="large-science-tool tool-15">🧲</div>
        <div class="large-science-tool tool-16">📐</div>
      </div>

      <!-- Header Section -->
      <section class="hero-section">
        <div class="hero-background-icons">
          <div class="hero-science-icon tool-1">🧪</div>
          <div class="hero-science-icon tool-2">🔬</div>
          <div class="hero-science-icon tool-3">⚗️</div>
          <div class="hero-science-icon tool-4">🔍</div>
          <div class="hero-science-icon tool-5">🧬</div>
          <div class="hero-science-icon tool-6">⚛️</div>
          <div class="hero-science-icon tool-7">🌡️</div>
          <div class="hero-science-icon tool-8">📊</div>
          <div class="hero-science-icon tool-9">🔭</div>
          <div class="hero-science-icon tool-10">💊</div>
          <div class="hero-science-icon tool-11">🧫</div>
          <div class="hero-science-icon tool-12">⚖️</div>
        </div>
        <div class="hero-content">
          
          <h1 class="hero-title">Scientific Articles & Research</h1>
          <p class="hero-subtitle">
            Discover cutting-edge research and insights from our scientific community.
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">{{ articles.length }}</span>
              <span class="stat-label">Published Articles</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ getUniqueAuthors() }}</span>
              <span class="stat-label">Contributing Authors</span>
            </div>
            <div class="stat-item">
             <span class="stat-number">{{ getAllTags().length }}</span>
              <span class="stat-label">Research Areas</span>
            </div>
          </div>
          <div class="hero-actions">
            <button class="write-btn" (click)="showAuthModal()">
              <span class="btn-icon">✍️</span>
              Contribute Research
            </button>
            <button class="browse-btn" (click)="scrollToArticles()">
              <span class="btn-icon">🔍</span>
              Browse Research
            </button>
          </div>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="filter-section" id="articles-section">
        <div class="container">
          <div class="filter-header">
            <h2 class="filter-title">Research Library</h2>
            <div class="filter-controls">
              <div class="search-box">
                <input type="text" [(ngModel)]="searchTerm" placeholder="Search articles..." class="search-input">
                <span class="search-icon">🔍</span>
              </div>
              <select [(ngModel)]="selectedTag" class="tag-filter">
                <option value="">All Topics</option>
                <option *ngFor="let tag of getAllTags()" [value]="tag">{{ tag }}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <!-- Articles Grid -->
      <section class="articles-section">
        <div class="container">
          <div class="articles-grid" *ngIf="getFilteredArticles().length > 0">
            <div class="article-card" *ngFor="let article of getFilteredArticles(); trackBy: trackByArticleId">
              <div class="article-image">
                <img [src]="article.imageUrl || article.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'" [alt]="article.title" />
                <div class="image-overlay"></div>
              </div>
              <div class="article-content">
                <div class="article-header">
                  <h3>{{ article.title }}</h3>
                  <div class="article-meta">
                    <span class="author">By {{ getAuthorName(article.author) }}</span>
                    <span class="date">{{ article.date | date:'MMM dd, yyyy' }}</span>
                  </div>
                </div>
                <p class="article-excerpt">{{ article.excerpt }}</p>
                <div class="article-tags">
                  <span class="tag" *ngFor="let tag of article.tags">#{{ tag }}</span>
                </div>
                <button class="read-more-btn" (click)="readArticle(article.id)">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div *ngIf="getFilteredArticles().length === 0 && articles.length > 0" class="no-results">
            <div class="empty-icon">🔍</div>
            <h3>No Articles Found</h3>
            <p>Try adjusting your search terms or filters.</p>
            <button class="clear-filters-btn" (click)="clearFilters()">Clear Filters</button>
          </div>
          <div *ngIf="articles.length === 0" class="no-articles">
            <div class="empty-icon">📄</div>
            <h3>No Articles Yet</h3>
            <p>Be the first to share your scientific insights with the community!</p>
            <button class="write-first-btn" (click)="showAuthModal()">Write First Article</button>
          </div>
        </div>
      </section>

      <!-- Authentication Modal -->
      <div class="auth-modal" *ngIf="showAuth" (click)="hideAuthModal()">
        <div class="auth-content" (click)="$event.stopPropagation()">
          <h3>Enter Access Code</h3>
          <p>Please enter your mentor access code to write or edit articles.</p>
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

      <!-- Article Detail Modal -->
      <div class="article-detail-modal" *ngIf="showArticleDetail" (click)="hideArticleDetail()">
        <div class="article-detail-content" (click)="$event.stopPropagation()">
          <div class="article-detail-header">
            <button class="close-btn" (click)="hideArticleDetail()">×</button>
          </div>
          <div class="article-detail-body" *ngIf="selectedArticle">
            <div class="article-detail-image" *ngIf="selectedArticle.imageUrl || selectedArticle.image">
              <img [src]="selectedArticle.imageUrl || selectedArticle.image" [alt]="selectedArticle.title" />
            </div>
            <div class="article-detail-info">
              <h1 class="article-detail-title">{{ selectedArticle.title }}</h1>
              <div class="article-detail-meta">
                <span class="article-detail-author">By {{ getAuthorName(selectedArticle.author) }}</span>
                <span class="article-detail-date">{{ selectedArticle.date | date:'MMM dd, yyyy' }}</span>
              </div>
              <div class="article-detail-tags">
                <span class="article-detail-tag" *ngFor="let tag of selectedArticle.tags">#{{ tag }}</span>
              </div>
              <div class="article-detail-excerpt">
                <p>{{ selectedArticle.excerpt }}</p>
              </div>
              <div class="article-detail-content-text">
                <div [innerHTML]="getFormattedContent(selectedArticle.content || selectedArticle.body)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Article Editor -->
      <div class="editor-modal" *ngIf="showEditor" (click)="hideEditor()">
        <div class="editor-content" (click)="$event.stopPropagation()">
          <div class="editor-header">
            <h3>{{ editingArticle ? 'Edit Article' : 'Write New Article' }}</h3>
            <button class="close-btn" (click)="hideEditor()">×</button>
          </div>
          <div class="editor-form">
            <input 
              type="text" 
              [(ngModel)]="articleForm.title" 
              placeholder="Article Title"
              class="title-input"
            />
            <input 
              type="text" 
              [(ngModel)]="articleForm.author" 
              placeholder="Author Name"
              class="author-input"
            />
            <textarea 
              [(ngModel)]="articleForm.excerpt" 
              placeholder="Short excerpt (2-3 lines)"
              class="excerpt-input"
              rows="3"
            ></textarea>
            <input 
              type="url" 
              [(ngModel)]="articleForm.image" 
              placeholder="Image URL (optional)"
              class="image-input"
            />
            <textarea 
              [(ngModel)]="articleForm.body" 
              placeholder="Article content..."
              class="body-input"
              rows="15"
            ></textarea>
            <input 
              type="text" 
              [(ngModel)]="articleForm.tags" 
              placeholder="Tags (comma separated, e.g., Physics, Innovation)"
              class="tags-input"
            />
          </div>
          <div class="editor-actions">
            <button class="cancel-btn" (click)="hideEditor()">Cancel</button>
            <button class="publish-btn" (click)="publishArticle()">
              {{ editingArticle ? 'Update' : 'Publish' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .articles-container {
      background-color: #1a1a1a;
      color: #ffffff;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
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
      opacity: 0.15;
      animation: floatAround 15s infinite linear;
      transform-origin: center;
      color: #333;
    }

    .tool-1 { top: 5%; left: 5%; animation-delay: 0s; }
    .tool-2 { top: 5%; right: 5%; animation-delay: -2s; }
    .tool-3 { top: 20%; left: 8%; animation-delay: -4s; }
    .tool-4 { top: 20%; right: 8%; animation-delay: -6s; }
    .tool-5 { top: 35%; left: 2%; animation-delay: -8s; }
    .tool-6 { top: 35%; right: 2%; animation-delay: -10s; }
    .tool-7 { top: 50%; left: 5%; animation-delay: -12s; }
    .tool-8 { top: 50%; right: 5%; animation-delay: -14s; }
    .tool-9 { top: 65%; left: 8%; animation-delay: -16s; }
    .tool-10 { top: 65%; right: 8%; animation-delay: -18s; }
    .tool-11 { top: 80%; left: 2%; animation-delay: -1s; }
    .tool-12 { top: 80%; right: 2%; animation-delay: -3s; }
    .tool-13 { top: 95%; left: 5%; animation-delay: -5s; }
    .tool-14 { top: 95%; right: 5%; animation-delay: -7s; }
    .tool-15 { top: 10%; left: 50%; animation-delay: -9s; }
    .tool-16 { top: 90%; left: 50%; animation-delay: -11s; }

    @keyframes floatAround {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
      75% { transform: translateY(-15px) rotate(3deg); }
    }

    /* Responsive science background - reduce tool visibility on small screens */
    @media (max-width: 1200px) {
      .large-science-tool {
        font-size: 5.5rem;
        opacity: 0.12;
      }
      /* Hide some tools on medium screens */
      .tool-9, .tool-10, .tool-11, .tool-12, .tool-13, .tool-14, .tool-15, .tool-16 {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .science-background {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
      }
      .large-science-tool {
        font-size: 4.5rem;
        opacity: 0.08;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        flex: 1;
        text-align: center;
        margin: 10px;
      }
      /* Hide more tools on small screens */
      .tool-5, .tool-6, .tool-7, .tool-8 {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .science-background {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
      }
      .large-science-tool {
        font-size: 3.5rem;
        opacity: 0.05;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        flex: 1;
        text-align: center;
        margin: 15px 5px;
      }
      /* Keep only 2 tools on very small screens */
      .tool-3, .tool-4 {
        display: none;
      }
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%);
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      padding: 0 20px;
      animation: fadeInUp 1s ease-out;
      position: relative;
      z-index: 10;
    }

    .hero-badge {
      display: inline-block;
      background: linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(6, 182, 212, 0.2));
      border: 1px solid rgba(255, 105, 180, 0.3);
      border-radius: 50px;
      padding: 8px 20px;
      margin-bottom: 2rem;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .badge-text {
      color: #ffffff;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-top: -30px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #b0b0b0;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto 2.5rem;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin: 2.5rem 0;
      flex-wrap: wrap;
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      display: block;
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: bold;
      line-height: 1;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    .stat-label {
      display: block;
      font-size: 0.9rem;
      color: #888;
      margin-top: 5px;
      font-weight: 500;
    }

    .hero-actions {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
      position: relative;
      z-index: 10;
    }

    .write-btn, .browse-btn {
      padding: 15px 30px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      border: none;
      position: relative;
      z-index: 10;
    }

    .write-btn, .browse-btn {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .write-btn:hover, .browse-btn:hover {
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.1);
    }

    .btn-icon {
      font-size: 1.2rem;
    }

    /* Container */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Filter Section */
    .filter-section {
      padding: 40px 0;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      position: relative;
      z-index: 2;
    }

    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .filter-title {
      font-size: 2rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
    }

    .filter-controls {
      display: flex;
      gap: 15px;
      align-items: center;
      flex-wrap: wrap;
    }

    .search-box {
      position: relative;
      display: flex;
      align-items: center;
    }

    .search-input {
      padding: 12px 45px 12px 15px;
      border: 1px solid #555;
      border-radius: 25px;
      background: #1a1a1a;
      color: #fff;
      font-size: 1rem;
      width: 250px;
      transition: all 0.3s ease;
    }

    .search-input:focus {
      outline: none;
      border-color: #ff69b4;
      box-shadow: 0 0 0 2px rgba(255, 105, 180, 0.2);
    }

    .search-icon {
      position: absolute;
      right: 15px;
      color: #888;
      pointer-events: none;
    }

    .tag-filter {
      padding: 12px 15px;
      border: 1px solid #555;
      border-radius: 25px;
      background: #1a1a1a;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tag-filter:focus {
      outline: none;
      border-color: #06b6d4;
      box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
    }

    /* Hero Section */
    .hero-section {
      padding: 8rem 0 4rem;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .hero-background-icons {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 1;
    }

    .hero-science-icon {
      position: absolute;
      font-size: 6rem;
      opacity: 0.15;
      animation: heroFloat 15s infinite linear;
      transform-origin: center;
      color: #444;
    }

    .tool-1 { top: 8%; left: 12%; animation-delay: 0s; }
    .tool-2 { top: 15%; right: 8%; animation-delay: -2s; }
    .tool-3 { top: 22%; left: 6%; animation-delay: -4s; }
    .tool-4 { top: 18%; right: 25%; animation-delay: -6s; }
    .tool-5 { top: 28%; left: 18%; animation-delay: -8s; }
    .tool-6 { top: 32%; right: 12%; animation-delay: -10s; }
    .tool-7 { top: 68%; left: 14%; animation-delay: -12s; }
    .tool-8 { top: 72%; right: 22%; animation-delay: -14s; }
    .tool-9 { top: 78%; left: 8%; animation-delay: -16s; }
    .tool-10 { top: 75%; right: 15%; animation-delay: -18s; }
    .tool-11 { top: 82%; left: 28%; animation-delay: -1s; }
    .tool-12 { top: 85%; right: 6%; animation-delay: -3s; }

    @keyframes heroFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
      75% { transform: translateY(-15px) rotate(3deg); }
    }

    /* Articles Section */
    .articles-section {
      padding: 60px 0 80px;
      background: #1a1a1a;
      position: relative;
      z-index: 2;
    }

    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-top: 2rem;
    }

    .article-card {
      background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      border: 1px solid #333;
      display: flex;
      flex-direction: column;
      height: 500px;
      max-height: 500px;
    }

    .article-card:hover {
      transform: translateY(-5px);
      border-color: #555;
    }

    .article-image {
      position: relative;
      height: 220px;
      min-height: 220px;
      overflow: hidden;
      flex-shrink: 0;
    }

    .article-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .article-card:hover .article-image img {
      transform: scale(1.05);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    }

    .article-content {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      overflow: hidden;
    }

    .article-header h3 {
      font-size: 1.3rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .article-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      font-size: 0.9rem;
      color: #888;
    }

    .author {
      font-weight: 500;
    }

    .date {
      color: #aaa;
    }

    .article-excerpt {
      color: #cccccc;
      line-height: 1.5;
      margin-bottom: 12px;
      font-size: 0.9rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }

    .article-tags {
      margin-bottom: 15px;
      margin-top: auto;
      max-height: 60px;
      overflow: hidden;
    }

    .tag {
      display: inline-block;
      background: #333;
      color: #ccc;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      margin-right: 8px;
      margin-bottom: 5px;
    }

    .read-more-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      font-size: 0.9rem;
      flex-shrink: 0;
    }

    .read-more-btn:hover {
      transform: translateY(-2px);
      background: #555;
    }

    .no-articles, .no-results {
      text-align: center;
      padding: 60px 20px;
      color: #888;
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 20px;
      opacity: 0.7;
    }

    .no-articles h3, .no-results h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #aaa;
    }

    .clear-filters-btn {
      background: linear-gradient(135deg, #06b6d4, #ff69b4);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 20px;
    }

    .clear-filters-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
    }

    .write-first-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 20px;
    }

    .write-first-btn:hover {
      transform: translateY(-2px);
      background: #555;
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
      background: #555;
    }

    .error-message {
      color: #ff6b6b;
      margin-top: 10px;
      font-size: 0.9rem;
    }

    /* Editor Modal */
    .editor-modal {
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
      padding: 20px;
    }

    .editor-content {
      background: #2a2a2a;
      border-radius: 15px;
      max-width: 800px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
    }

    .editor-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 30px;
      border-bottom: 1px solid #555;
    }

    .editor-header h3 {
      color: #ffffff;
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      color: #ccc;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 5px;
    }

    .close-btn:hover {
      color: #fff;
    }

    .editor-form {
      padding: 30px;
    }

    .title-input, .author-input, .excerpt-input, .body-input, .tags-input, .image-input {
      width: 100%;
      padding: 12px;
      border: 1px solid #555;
      border-radius: 8px;
      background: #1a1a1a;
      color: #fff;
      margin-bottom: 15px;
      font-size: 1rem;
      font-family: inherit;
    }

    .title-input {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .body-input {
      resize: vertical;
      min-height: 300px;
    }

    .editor-actions {
      display: flex;
      gap: 15px;
      justify-content: flex-end;
      padding: 20px 30px;
      border-top: 1px solid #555;
    }

    .publish-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .publish-btn:hover {
      background: #555;
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    /* Article Detail Modal */
    .article-detail-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
      animation: fadeIn 0.3s ease-out;
      overflow-y: auto;
    }

    .article-detail-content {
      background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
      border-radius: 20px;
      max-width: 900px;
      width: 100%;
      max-height: calc(100vh - 40px);
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      border: 1px solid #333;
      animation: slideInUp 0.4s ease-out;
      margin: auto;
      position: relative;
    }

    .article-detail-header {
      display: flex;
      justify-content: flex-end;
      padding: 20px 25px 0;
    }

    .article-detail-header .close-btn {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: #ccc;
      font-size: 1.8rem;
      cursor: pointer;
      padding: 8px 12px;
      border-radius: 50%;
      transition: all 0.3s ease;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .article-detail-header .close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      transform: scale(1.1);
    }

    .article-detail-body {
      padding: 0 30px 30px;
      overflow-y: auto;
    }

    .article-detail-image {
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 15px;
      margin-bottom: 25px;
    }

    .article-detail-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .article-detail-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 15px;
      line-height: 1.2;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .article-detail-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #333;
    }

    .article-detail-author {
      font-weight: 600;
      color: #06b6d4;
      font-size: 1.1rem;
    }

    .article-detail-date {
      color: #888;
      font-size: 0.95rem;
    }

    .article-detail-tags {
      margin-bottom: 25px;
    }

    .article-detail-tag {
      display: inline-block;
      background: linear-gradient(135deg, #333, #444);
      color: #06b6d4;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      margin-right: 10px;
      margin-bottom: 8px;
      font-weight: 500;
      border: 1px solid #444;
    }

    .article-detail-excerpt {
      background: rgba(6, 182, 212, 0.1);
      border-left: 4px solid #06b6d4;
      padding: 20px;
      border-radius: 0 10px 10px 0;
      margin-bottom: 30px;
    }

    .article-detail-excerpt p {
      color: #e0e0e0;
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 0;
      font-style: italic;
    }

    .article-detail-content-text {
      color: #cccccc;
      line-height: 1.8;
      font-size: 1.05rem;
      max-height: none;
      overflow: visible;
    }

    .article-detail-content-text p {
      margin-bottom: 20px;
    }

    .article-detail-content-text p:last-child {
      margin-bottom: 0;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .hero-stats {
        gap: 25px;
      }

      .stat-number {
        font-size: 4rem;
        font-weight: bold;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .write-btn, .browse-btn {
        width: 200px;
        justify-content: center;
      }

      .filter-header {
        flex-direction: column;
        align-items: stretch;
      }

      .filter-controls {
        justify-content: center;
      }

      .search-input {
        width: 200px;
      }

      .articles-grid {
        grid-template-columns: 1fr;
      }

      .article-meta {
        flex-direction: column;
        gap: 5px;
      }

      .editor-content {
        margin: 10px;
        max-height: 95vh;
      }

      .editor-form {
        padding: 20px;
      }

      .article-detail-content {
        margin: 10px;
        max-height: 95vh;
      }

      .article-detail-body {
        padding: 0 20px 20px;
      }

      .article-detail-title {
        font-size: 2rem;
      }

      .article-detail-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
      }

      .article-detail-image {
        height: 250px;
      }
    }

      /* Stat Numbers */
.stat-number {
  display: block;
  font-size: 3.5rem; /* increased from 3rem */
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

  `]
})
export class BlogComponent implements OnInit {
  articles: any[] = [];
  filteredArticles: any[] = [];
  searchTerm: string = '';
  selectedTag: string = '';
  showEditor: boolean = false;
  showAuth: boolean = false;
  showArticleDetail: boolean = false;
  selectedArticle: any = null;
  accessCode: string = '';
  authError: string = '';
  showDetail: boolean = false;
  VALID_ACCESS_CODE: string = 'SSC2024MENTOR';
  
  articleForm = {
    title: '',
    author: '',
    excerpt: '',
    body: '',
    tags: '',
    image: ''
  };
  
  editingArticle: any = null;

  constructor(
    private router: Router,
    private blogService: BlogService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    // Load articles from backend API
    this.blogService.getPosts().subscribe({
      next: (articles) => {
        console.log('Loaded articles from backend:', articles);
        this.articles = articles;
        this.filteredArticles = articles;
      },
      error: (error) => {
        console.error('Error loading articles from backend:', error);
        // Only fallback to default articles if backend is completely unavailable
        // Don't fallback if backend returns empty array - that's valid
        if (error.status === 0 || error.status >= 500) {
          console.log('Backend unavailable, using fallback articles');
          this.setDefaultArticles();
          this.filteredArticles = this.articles;
        } else {
          // Backend is available but returned error - show empty state
          this.articles = [];
          this.filteredArticles = [];
        }
      }
    });
  }

  setDefaultArticles() {
    this.articles = [
      {
        id: 1,
        title: 'Breakthrough in Alzheimer\'s Research: New Drug Shows Promise',
        author: 'Dr. Elena Vasquez',
        date: new Date('2024-08-15'),
        excerpt: 'Recent clinical trials of lecanemab demonstrate significant reduction in amyloid plaques and cognitive decline in early-stage Alzheimer\'s patients, offering new hope for millions affected by this devastating disease.',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        body: 'Alzheimer\'s disease affects over 55 million people worldwide, making it the most common form of dementia. Recent breakthrough results from Phase III clinical trials of lecanemab have provided the first clear evidence that targeting amyloid-beta plaques in the brain can slow cognitive decline in patients with early Alzheimer\'s disease. The drug works as a monoclonal antibody that specifically targets and removes amyloid-beta protofibrils from the brain.',
        tags: ['Neuroscience', 'Medicine', 'Clinical Research']
      },
      {
        id: 2,
        title: 'Climate Change Accelerates Arctic Ice Loss: New Satellite Data',
        author: 'Dr. James Arctic',
        date: new Date('2024-08-10'),
        excerpt: 'Latest satellite observations reveal Arctic sea ice is declining at an unprecedented rate of 13% per decade, with profound implications for global climate patterns and sea level rise.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        body: 'The Arctic region is experiencing climate change at twice the global average rate. New satellite data provides the most detailed picture yet of how rapidly Arctic ice is disappearing. Since satellite records began in 1979, Arctic sea ice extent has declined by approximately 13% per decade during September. This ice loss is already affecting global weather patterns and contributing to sea level rise.',
        tags: ['Climate Science', 'Environmental Research', 'Oceanography']
      },
      {
        id: 3,
        title: 'Revolutionary Cancer Treatment: CAR-T Therapy Success',
        author: 'Dr. Sarah Chen',
        date: new Date('2024-08-05'),
        excerpt: 'New clinical trial results show CAR-T cell therapy achieving remarkable remission rates in previously untreatable blood cancers, offering hope for thousands of patients.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        body: 'Chimeric Antigen Receptor T-cell (CAR-T) therapy represents one of the most significant breakthroughs in cancer treatment in decades. This revolutionary approach involves genetically modifying a patient\'s own immune cells to better recognize and attack cancer cells. Recent clinical trial results have shown unprecedented success rates, with some patients achieving complete remission from previously incurable blood cancers.',
        tags: ['Oncology', 'Immunotherapy', 'Medical Innovation']
      }
    ];
  }

  saveArticles() {
    // Articles are now saved directly to PostgreSQL via API calls
    // No need for localStorage - data persists in database
    console.log('Articles are automatically saved to database via API');
  }

  showAuthModal() {
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
          this.openEditor();
        } else {
          this.authError = 'Invalid access code. Please try again.';
        }
      },
      error: (error: any) => {
        console.error('Error verifying access code:', error);
        // Fallback to hardcoded verification for development
        if (this.accessCode === this.VALID_ACCESS_CODE) {
          this.hideAuthModal();
          this.openEditor();
        } else {
          this.authError = 'Invalid access code. Please try again.';
        }
      }
    });
  }

  openEditor(article?: any) {
    this.editingArticle = article || null;
    if (article) {
      this.articleForm = {
        title: article.title,
        author: this.getAuthorName(article.author),
        excerpt: article.excerpt,
        body: article.body,
        tags: article.tags.join(', '),
        image: article.image
      };
    } else {
      this.articleForm = {
        title: '',
        author: '',
        excerpt: '',
        body: '',
        tags: '',
        image: ''
      };
    }
    this.showEditor = true;
  }

  hideEditor() {
    this.showEditor = false;
    this.editingArticle = null;
  }

  publishArticle() {
    if (!this.articleForm.title || !this.articleForm.author || !this.articleForm.excerpt || !this.articleForm.body) {
      alert('Please fill in all required fields');
      return;
    }

    const tagsArray = this.articleForm.tags.split(',').map((tag: any) => tag.trim()).filter((tag: any) => tag);
    
    // Parse author name for API compatibility
    const authorParts = this.articleForm.author.split(' ');
    const authorObj = {
      firstName: authorParts[0] || '',
      lastName: authorParts.slice(1).join(' ') || ''
    };
    
    const articleData = {
      title: this.articleForm.title,
      author: this.articleForm.author, // Send as string, backend will parse
      excerpt: this.articleForm.excerpt,
      content: this.articleForm.body, // API uses 'content' instead of 'body'
      tags: this.articleForm.tags, // Send as string, backend will parse
      imageUrl: this.articleForm.image, // API uses 'imageUrl' instead of 'image'
      accessCode: this.VALID_ACCESS_CODE // Use stored access code
    } as any;

    if (this.editingArticle) {
      // Update existing article
      this.blogService.updatePost(this.editingArticle.id, articleData).subscribe({
        next: (updatedArticle) => {
          const index = this.articles.findIndex((a: any) => a.id === this.editingArticle.id);
          if (index !== -1) {
            this.articles[index] = updatedArticle;
          }
          this.filteredArticles = this.articles;
          this.hideEditor();
          alert('Article updated successfully!');
        },
        error: (error) => {
          console.error('Error updating article:', error);
          alert('Failed to update article. Please check your connection and try again.');
        }
      });
    } else {
      // Create new article via simplified API
      this.blogService.createPostSimple(articleData).subscribe({
        next: (newArticle) => {
          console.log('Article created successfully:', newArticle);
          // Reload all articles from API to ensure consistency
          this.loadArticles();
          this.hideEditor();
          
          // Clear the form
          this.articleForm = {
            title: '',
            author: '',
            excerpt: '',
            body: '',
            tags: '',
            image: ''
          };
          
          // Show success message
          alert('Article published successfully! Your article has been saved and will persist on refresh.');
        },
        error: (error) => {
          console.error('Error creating article:', error);
          console.error('Error details:', error.error);
          if (error.status === 401) {
            alert('Invalid access code. Please check your access code and try again.');
          } else if (error.status === 400) {
            const errorMsg = error.error?.error || 'Please check all fields are filled correctly.';
            alert(`Validation error: ${errorMsg}`);
          } else {
            alert('Failed to publish article. Please check your connection and try again.');
          }
        }
      });
    }
  }

  readArticle(articleId: number) {
    this.selectedArticle = this.articles.find((article: any) => article.id === articleId);
    this.showArticleDetail = true;
  }

  editArticle(article: any) {
    this.showAuthModal();
    // Store the article to edit for after authentication
    setTimeout(() => {
      if (!this.showAuth) {
        this.openEditor(article);
      }
    }, 100);
  }

  getFilteredArticles() {
    return this.articles.filter(article => {
      const matchesSearch = !this.searchTerm || 
        article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        this.getAuthorName(article.author).toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesTag = !this.selectedTag || 
        article.tags.some((tag: string) => tag.toLowerCase() === this.selectedTag.toLowerCase());
      
      return matchesSearch && matchesTag;
    });
  }

  getAllTags(): string[] {
    const allTags = this.articles.flatMap(article => article.tags);
    return [...new Set(allTags)].sort();
  }

  getUniqueAuthors(): number {
    const authors = [...new Set(this.articles.map(article => this.getAuthorName(article.author)))];
    return authors.length;
  }

  getAuthorName(author: any): string {
    if (typeof author === 'string') {
      return author;
    } else if (author && typeof author === 'object') {
      return `${author.firstName} ${author.lastName}`.trim();
    }
    return 'Unknown Author';
  }

  trackByArticleId(index: number, article: any): number {
    return article.id;
  }

  scrollToArticles() {
    const element = document.getElementById('articles-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedTag = '';
  }

  hideArticleDetail() {
    this.showArticleDetail = false;
    this.selectedArticle = null;
  }

  getFormattedContent(content: string): string {
    return content.replace(/\n/g, '<br>');
  }

  updateToScienceArticles() {
    // Clear localStorage and set new science articles
    localStorage.removeItem('ssc_articles');
    this.setDefaultArticles();
    this.saveArticles();
  }
}

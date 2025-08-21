import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
        <div class="hero-content">
          <div class="hero-visual">
            <div class="articles-icon">📚</div>
          </div>
          <h1 class="hero-title">Articles & Publications</h1>
          <p class="hero-subtitle">
            Explore science articles, research notes, and insights contributed by our mentors and members.
          </p>
          <div class="hero-actions">
            <button class="write-btn" (click)="showAuthModal()">
              <span class="btn-icon">✍️</span>
              Write Article
            </button>
          </div>
        </div>
      </section>

      <!-- Articles Grid -->
      <section class="articles-section">
        <div class="container">
          <div class="articles-grid" *ngIf="articles.length > 0">
            <div class="article-card" *ngFor="let article of articles">
              <div class="article-image" *ngIf="article.image">
                <img [src]="article.image" [alt]="article.title" />
                <div class="image-overlay"></div>
              </div>
              <div class="article-content">
                <div class="article-header">
                  <h3>{{ article.title }}</h3>
                  <div class="article-meta">
                    <span class="author">By {{ article.author }}</span>
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

    /* Hero Section */
    .hero-section {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%);
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      padding: 0 20px;
      animation: fadeInUp 1s ease-out;
    }

    .hero-visual {
      margin-bottom: 2rem;
    }

    .articles-icon {
      font-size: 6rem;
      opacity: 0.9;
      animation: pulse 2s infinite;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #b0b0b0;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto 2.5rem;
    }

    .hero-actions {
      margin-top: 2rem;
    }

    .write-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    }

    .write-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
      background: linear-gradient(135deg, #444 0%, #666 100%);
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

    /* Articles Section */
    .articles-section {
      padding: 80px 0;
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
    }

    .article-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
      border-color: #555;
    }

    .article-image {
      position: relative;
      height: 200px;
      overflow: hidden;
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
      padding: 25px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .article-header h3 {
      font-size: 1.4rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 10px;
      line-height: 1.3;
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
      line-height: 1.6;
      margin-bottom: 15px;
      font-size: 0.95rem;
    }

    .article-tags {
      margin-bottom: 20px;
      margin-top: auto;
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
      padding: 10px 20px;
      border-radius: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }

    .read-more-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      background: linear-gradient(135deg, #444 0%, #666 100%);
    }

    .no-articles {
      text-align: center;
      padding: 60px 20px;
      color: #888;
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 20px;
      opacity: 0.7;
    }

    .no-articles h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #aaa;
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
      background: linear-gradient(135deg, #444 0%, #666 100%);
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
      background: linear-gradient(135deg, #444 0%, #666 100%);
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
      background: linear-gradient(135deg, #444 0%, #666 100%);
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

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
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
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .articles-icon {
        font-size: 4rem;
      }
    }
  `]
})
export class BlogComponent implements OnInit {
  articles: any[] = [];
  showAuth = false;
  showEditor = false;
  accessCode = '';
  authError = '';
  editingArticle: any = null;
  articleForm = {
    title: '',
    author: '',
    excerpt: '',
    body: '',
    tags: '',
    image: ''
  };

  // Store access code (in production, this should be handled securely)
  private readonly VALID_ACCESS_CODE = 'SSC2024MENTOR';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    // Load articles from localStorage or initialize empty array
    const storedArticles = localStorage.getItem('ssc_articles');
    if (storedArticles) {
      this.articles = JSON.parse(storedArticles);
    } else {
      // Initialize with sample articles
      this.articles = [
        {
          id: 1,
          title: 'The Future of Quantum Computing',
          author: 'Dr. Sarah Chen',
          date: new Date('2024-01-15'),
          excerpt: 'Exploring the revolutionary potential of quantum computers and their impact on scientific research. From cryptography to drug discovery, quantum computing promises to solve problems that are impossible for classical computers.',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          body: `Quantum computing represents one of the most exciting frontiers in modern science and technology. Unlike classical computers that use bits to process information in binary states (0 or 1), quantum computers use quantum bits or "qubits" that can exist in multiple states simultaneously through a phenomenon called superposition.

This fundamental difference allows quantum computers to perform certain calculations exponentially faster than their classical counterparts. For instance, while a classical computer might take thousands of years to factor large numbers used in encryption, a sufficiently powerful quantum computer could accomplish this in hours or days.

The implications for scientific research are profound. In drug discovery, quantum computers could simulate molecular interactions with unprecedented accuracy, potentially accelerating the development of new medicines. In materials science, they could help design new materials with specific properties by modeling atomic-level interactions.

However, significant challenges remain. Quantum computers are extremely sensitive to environmental interference, requiring near-absolute zero temperatures and sophisticated error correction systems. Current quantum computers are still in their infancy, with limited numbers of qubits and high error rates.

Despite these challenges, major technology companies and research institutions are investing billions of dollars in quantum computing research. IBM, Google, and other tech giants have already demonstrated quantum supremacy in specific tasks, marking important milestones in the field's development.

As we look to the future, quantum computing promises to revolutionize fields ranging from artificial intelligence to climate modeling, opening new possibilities for scientific discovery and technological innovation.`,
          tags: ['Physics', 'Technology', 'Innovation']
        },
        {
          id: 2,
          title: 'CRISPR Gene Editing: Revolutionizing Medicine',
          author: 'Prof. Michael Rodriguez',
          date: new Date('2024-01-10'),
          excerpt: 'An in-depth look at CRISPR-Cas9 technology and its applications in treating genetic diseases. This revolutionary tool allows scientists to make precise edits to DNA, opening new possibilities for treating previously incurable conditions.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          body: `CRISPR-Cas9 has emerged as one of the most powerful and versatile tools in modern biology, offering unprecedented precision in editing genetic material. Originally discovered as part of bacterial immune systems, CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) has been adapted for use in a wide range of organisms, from bacteria to humans.

The technology works like molecular scissors, allowing scientists to cut DNA at specific locations and either remove, add, or replace genetic material. This precision has opened up new possibilities for treating genetic diseases that were previously considered incurable.

One of the most promising applications is in treating sickle cell disease, a genetic disorder that affects millions worldwide. Clinical trials using CRISPR to edit patients' bone marrow cells have shown remarkable success, with some patients achieving complete remission from their symptoms.

Beyond treating existing diseases, CRISPR also holds promise for preventing genetic disorders before they manifest. By editing embryonic cells, scientists could potentially eliminate hereditary diseases from family lines entirely, though this application raises important ethical considerations.

The technology isn't limited to human medicine. Agricultural applications include developing crops that are more resistant to pests, diseases, and climate change. Researchers are also exploring CRISPR's potential in conservation efforts, such as developing coral reefs that can withstand ocean acidification.

However, the power of CRISPR also brings responsibility. The scientific community continues to debate the ethical implications of genetic editing, particularly when it comes to making heritable changes to the human genome. International guidelines and regulations are being developed to ensure the technology is used safely and ethically.

As CRISPR technology continues to evolve, with new variants offering even greater precision and reduced off-target effects, we can expect to see more breakthrough treatments and applications in the coming years.`,
          tags: ['Biology', 'Medicine', 'Genetics']
        }
      ];
      this.saveArticles();
    }
  }

  saveArticles() {
    localStorage.setItem('ssc_articles', JSON.stringify(this.articles));
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
    if (this.accessCode === this.VALID_ACCESS_CODE) {
      this.hideAuthModal();
      this.openEditor();
    } else {
      this.authError = 'Invalid access code. Please try again.';
    }
  }

  openEditor(article?: any) {
    this.editingArticle = article || null;
    if (article) {
      this.articleForm = {
        title: article.title,
        author: article.author,
        excerpt: article.excerpt,
        body: article.body,
        tags: article.tags.join(', '),
        image: article.image || ''
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
      return;
    }

    const tagsArray = this.articleForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    if (this.editingArticle) {
      // Update existing article
      const index = this.articles.findIndex(a => a.id === this.editingArticle.id);
      if (index !== -1) {
        this.articles[index] = {
          ...this.editingArticle,
          title: this.articleForm.title,
          author: this.articleForm.author,
          excerpt: this.articleForm.excerpt,
          body: this.articleForm.body,
          tags: tagsArray,
          image: this.articleForm.image
        };
      }
    } else {
      // Create new article
      const newArticle = {
        id: Date.now(),
        title: this.articleForm.title,
        author: this.articleForm.author,
        date: new Date(),
        excerpt: this.articleForm.excerpt,
        body: this.articleForm.body,
        tags: tagsArray,
        image: this.articleForm.image
      };
      this.articles.unshift(newArticle);
    }

    this.saveArticles();
    this.hideEditor();
  }

  readArticle(articleId: number) {
    this.router.navigate(['/article', articleId]);
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
}

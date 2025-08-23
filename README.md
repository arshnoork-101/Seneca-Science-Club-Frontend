# Seneca Science Club - Frontend

A modern Angular web application for the Seneca Science Club, featuring event management, scientific articles, team profiles, and member engagement tools.

## 🚀 Features

- **Interactive Homepage** - Welcome section with science-themed animations
- **Event Management** - Browse upcoming events with detailed modals and photo galleries
- **Scientific Articles** - Professional research content with filtering and search
- **Team Profiles** - Meet the executive team with social links
- **Contact System** - Get in touch with the club
- **Responsive Design** - Optimized for all devices

## 🛠️ Tech Stack

- **Angular 16+** - Frontend framework
- **TypeScript** - Type-safe development
- **Angular Material** - UI components
- **SCSS** - Advanced styling
- **Cloudinary** - Image hosting and optimization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ./
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open browser**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Shared components
│   │   ├── header/         # Navigation header
│   │   └── footer/         # Site footer
│   ├── pages/              # Page components
│   │   ├── home/           # Homepage
│   │   ├── events/         # Events listing & details
│   │   ├── blog/           # Scientific articles
│   │   ├── team/           # Team profiles
│   │   └── contact/        # Contact form
│   ├── services/           # Angular services
│   └── assets/             # Static assets
```

## 🎨 Key Components

### Events System
- **Event Cards** - Display upcoming and past events
- **Event Modals** - Detailed event information with photo galleries
- **Image Lightbox** - Full-screen image viewing
- **Responsive Gallery** - Cloudinary-optimized images

### Blog System
- **Article Management** - CRUD operations for scientific articles
- **Search & Filter** - Find articles by topic or author
- **Authentication** - Mentor access for content management
- **Rich Content** - Formatted article display

### Team Profiles
- **Executive Profiles** - Team member information
- **Social Integration** - LinkedIn and email links
- **Role-based Display** - Different layouts for different positions

## 🔧 Configuration

### Environment Variables
Create `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Cloudinary Setup
Update image URLs in components with your Cloudinary cloud name:
```typescript
// Replace 'your-cloud-name' with actual cloud name
'https://res.cloudinary.com/your-cloud-name/image/upload/...'
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: 480px, 768px, 1024px, 1200px
- **Touch-friendly** interactions
- **Optimized images** for different screen sizes

## 🎯 Development Guidelines

### Code Style
- Use **TypeScript** strict mode
- Follow **Angular style guide**
- Use **SCSS** for styling
- Implement **responsive design** patterns

### Component Structure
```typescript
@Component({
  selector: 'app-component',
  template: `...`,
  styles: [`...`]
})
export class ComponentName implements OnInit {
  // Component logic
}
```

## 🚀 Build & Deployment

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --prod
```

### Deploy to Netlify
1. Build the project: `ng build --prod`
2. Upload `dist/` folder to Netlify
3. Configure redirects in `_redirects` file

## 🧪 Testing

### Unit Tests
```bash
ng test
```

## 📊 Performance

- **Lazy Loading** - Route-based code splitting
- **OnPush Strategy** - Optimized change detection
- **Image Optimization** - Cloudinary integration
- **Bundle Analysis** - webpack-bundle-analyzer

## 🔒 Security

- **Input Sanitization** - XSS protection
- **Authentication** - Access code system for content management
- **HTTPS** - Secure communication

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request


**Built with ❤️ by the Seneca Science Club Team**

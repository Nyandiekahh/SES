# JKUAT Society of Engineering Students Website Guide 🎓

## Folder Structure Explained
```
jkuat-ses/
├── src/
│   ├── components/    # Reusable website parts
│   ├── pages/        # Main website pages
│   ├── styles/       # CSS styling files
│   └── assets/       # Images and documents
```

## Files Explanation 📄

### Pages (`src/pages/`)
These are the main pages of our website:
- `Home.js` - Landing page with welcome message and latest news
- `About.js` - Information about SES, history, and mission
- `Membership.js` - How to join SES, benefits, and registration
- `Events.js` - Upcoming and past engineering events
- `Resources.js` - Study materials and engineering resources
- `Contact.js` - Contact form and information

### Components (`src/components/`)
These are reusable parts we'll use across different pages:
- `Header.js` - Top section with logo and navigation menu
- `Footer.js` - Bottom section with contact info and links
- `Navigation.js` - Menu links to move between pages

### Styles (`src/styles/`)
CSS files that make our website look good:
- `main.css` - General styles used everywhere
- `header.css` - Styles for the header section
- `footer.css` - Styles for the footer section

### Assets (`src/assets/`)
Store your media files here:
- `images/` - Pictures, logos, and icons
- `docs/` - PDFs and documents

## How to Create Each File 🛠️

### 1. Create folders
```bash
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/styles
mkdir -p src/assets/images
mkdir -p src/assets/docs
```

### 2. Create files
```bash
# Create pages
touch src/pages/Home.js
touch src/pages/About.js
touch src/pages/Membership.js
touch src/pages/Events.js
touch src/pages/Resources.js
touch src/pages/Contact.js

# Create components
touch src/components/Header.js
touch src/components/Footer.js
touch src/components/Navigation.js

# Create styles
touch src/styles/main.css
touch src/styles/header.css
touch src/styles/footer.css
```

## Basic Component Structure 📝

### Page Component Example:
```javascript
import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to JKUAT SES</h1>
      <p>Society of Engineering Students</p>
    </div>
  );
}

export default Home;
```

### Header Component Example:
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <Link to="/">JKUAT SES</Link>
      <Navigation />
    </header>
  );
}

export default Header;
```

## CSS Example 🎨
```css
/* main.css */
:root {
  --primary-color: #1E3A8A;    /* JKUAT Blue */
  --text-color: #333333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

## Getting Started 🚀

1. Clone the repository
  ```bash
    git clone https://github.com/Nyandiekahh/SES.git

2. Install dependencies:
    ```bash
    npm install
    ```
3. Start development server:
    ```bash
    npm start
    ```

## File Naming Rules 📌
- Use PascalCase for component files (e.g., `Header.js`)
- Use lowercase for style files (e.g., `main.css`)
- Keep names simple and descriptive

---

Made with ❤️ by JKUAT SES  
Last Updated: December 2024# SES

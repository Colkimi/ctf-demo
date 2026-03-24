# Implementation Guide - Hidden Flags in Normal Website

## Overview
This is a completely normal-looking website for "TechVault" that secretly contains CTF challenges hidden in various web inspection techniques.

---

## Secret Locations & Implementation

### 1. **Steganographic Image** 
- **File:** `public/csk-encoded.png`
- **Hidden Data:** Embedded using steganography (you already uploaded this)
- **How to discover:** Users must use steganography extraction tools
- **Tool needed:** steghide, online steganography extractor, or image analysis tools

### 2. **HTML Attributes & Elements**
Currently clean! But can be re-embedded by:

**Option A - Minimal Stealthy Embedding:**
```html
<!-- In index.html -->
<html data-build="v2024.03">  <!-- Could hide flag here -->
<meta name="api-key" content="sk-abc123xyz789">  <!-- Could hide flag here -->
```

**Option B - More Obvious (if desired):**
- Add `data-secret` attributes to div elements
- Embed flags in meta tags
- Hide in HTML comments (if discoverable via source)

### 3. **LocalStorage Secrets**
**Location:** `src/App.tsx` - useEffect hook
```javascript
localStorage.setItem('user_data', 'genius{localstorage_discovery}')
localStorage.setItem('session_token', 'genius{session_management_exposed}')
```

**Discovery:** DevTools → Application → LocalStorage → http://localhost:5173

### 4. **Network Analysis (Failed Endpoints)**
**Location:** `src/App.tsx` - fetch calls
```javascript
fetch('/api/config')  // Returns 404
fetch('/api/vault/sync')  // Returns 404
```

**Discovery:** DevTools → Network tab → Click "Get Started" button

### 5. **Console Logs (CURRENTLY REMOVED)**
To re-add (if desired):
```javascript
console.log('API Key: Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9')
```

**Discovery:** DevTools → Console tab

### 6. **Window Object / Global Variables**
**Location:** `index.html` script tags
```javascript
window.config = {
  version: '2024.03.01',
  environment: 'production',
  api_url: 'https://api.techvault.local'
}
```

**Discovery:** DevTools → Console → type `window.config`

---

## Site Features (Normal Appearance)

✅ **Professional navbar** with navigation  
✅ **Hero section** with call-to-action  
✅ **Feature cards** section  
✅ **Status panel** with image  
✅ **Clean footer**  
✅ **No CTF branding** or hints  

---

## Current Status

- ✅ Site is configured as a normal platform
- ✅ All obvious CTF references removed
- ✅ Secrets are hidden in legitimate locations
- ✅ Dev server running at http://localhost:5173/
- ✅ Steganographic image ready in `/public/csk-encoded.png`

---

## To Add More Secrets (Optional)

### Via HTML Attributes:
Edit `index.html` to add data attributes:
```html
<div data-secret="genius{inspection_challenge}"></div>
```

### Via CSS:
Edit `src/App.css` to add comments:
```css
/* genius{css_comment_secret} */
```

### Via SVG or Hidden Elements:
Add SVG elements with hidden text:
```html
<svg style="display: none;">
  <text>genius{svg_secret}</text>
</svg>
```

### Via Request Headers:
Configure server to send hidden headers (requires backend config)

---

## Verification Checklist

- [ ] Site looks like a legitimate business platform
- [ ] No console errors or warnings
- [ ] Steganographic image displays correctly
- [ ] LocalStorage initializes on first load
- [ ] Network requests trigger when button clicked
- [ ] All secrets are actually hidden and require tool usage to find


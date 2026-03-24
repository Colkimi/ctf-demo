# CTF Challenge Site - Complete Guide

Welcome to the CTF (Capture The Flag) challenge site! This website contains 6 main challenges and multiple hidden secrets. Each challenge reveals vulnerabilities or security oversights commonly found in web applications.

**Format:** All flags follow the format `genius{...}`

---

## 🎯 Challenges & Solutions

### Challenge 1: Steganographic Image
**Location:** Main page, image section  
**File:** `csk-encoded.png`  
**Difficulty:** Medium

**How to solve:**
1. Right-click on the steganographic image and save it
2. Use an online steganography tool or the `steghide` command-line tool
3. Extract the hidden message from the image
4. This reveals a hidden secret embedded in the image metadata

**Tool suggestions:**
- Online: https://www.steganografia.com/
- Command line: `steghide extract -sf csk-encoded.png`

**Flag location:** Inside the PNG file's metadata/hidden layer

---

### Challenge 2: HTML Inspection
**Location:** "Inspect the Page" section  
**Difficulty:** Easy

**How to solve:**
1. Right-click anywhere on the page → "Inspect" (or press F12)
2. Look for `data-flag` and `data-secret` attributes in the HTML
3. Check the page title, meta tags, and other HTML elements
4. You'll find flags like: `genius{inspect_element_works}`

**Where to look:**
- In `<div>` elements with `data-flag` attributes
- In `<head>` meta tags like `data-secret`
- In HTML comments (uncomment them)
- In the page's `<title>` tag

**Specific locations:**
- HTML root element: `<html data-secret="..."`
- Meta tag: `<meta name="api-key" content="..."`
- Hidden div: `data-flag="genius{inspect_element_works}"`
- HTML comments with flags

---

### Challenge 3: Browser LocalStorage
**Location:** "Browser Storage" section  
**Difficulty:** Easy

**How to solve:**
1. Open DevTools (Press F12)
2. Go to **Application** tab → **Local Storage**
3. Look for entries like:
   - `ctf_hints`: `genius{local_storage_access_granted}`
   - `api_endpoint`: `/api/secrets?key=genius{network_tab_secret}`
   - `user_session`: `admin=true`

**Or click the "Check LocalStorage" button to see them in an alert**

**Why this is a vulnerability:**
- Secrets should never be stored in localStorage (accessible via JavaScript)
- Any XSS attack could steal these values
- Sensitive data like API keys should never be exposed to client-side storage

---

### Challenge 4: Network Tab Secrets
**Location:** "Network Requests" section  
**Difficulty:** Medium

**How to solve:**
1. Open DevTools → **Network** tab
2. Make sure the Network tab is recording (red circle should be on)
3. Click the "Test Endpoints" button
4. Watch for requests to:
   - `/api/admin-config` (403 Forbidden)
   - `/api/users` (404 Not Found)
5. Click on each request to view:
   - **Response headers** containing `X-Secret-Header: genius{response_header_secret}`
   - **Response body** with hidden flags
   - **Cookies** and other metadata

**What to look for:**
- Response headers with `X-` prefixed headers (often contain secrets!)
- Response status codes and error messages
- Failed requests still leak information
- CORS headers that might expose sensitive endpoints

---

### Challenge 5: Console Logs & Debug Code
**Location:** "Console Messages" section  
**Difficulty:** Easy

**How to solve:**
1. Open DevTools → **Console** tab
2. You'll see console logs with:
   - `console.log('API Key (Base64): Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9')`
3. Click the "Decode Console Secret" button, or manually decode:
   - Base64 string: `Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9`
   - Decoded: `genius{console_log_floating_from_where}`

**Manual decoding:**
```javascript
// In your browser console, paste:
atob('Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9')
// Result: genius{console_log_floating_from_where}
```

**Why this is a vulnerability:**
- Debug code left in production
- API keys exposed in console logs
- Base64 is NOT encryption (just encoding)
- Console is accessible to any user

---

### Challenge 6: CSS-Hidden Content
**Location:** Hidden in CSS and stylesheets  
**Difficulty:** Hard

**How to solve:**
1. Open DevTools → **Sources** or **Inspector**
2. Look at the stylesheets:
   - `App.css` contains: `genius{css_hidden_content}`
   - `index.css` contains multiple hidden flags in comments
3. Check **computed styles** on elements (right-click → Inspect → Computed tab)
4. Look for:
   - CSS comments with flags
   - CSS variables with secret values
   - Pseudo-elements (::before, ::after)
   - Hidden animations with semantic meanings

**Specific CSS locations:**
- `.invisible-section` has `display: none` but the content is in the CSS comment
- `:root` CSS variables
- `::selection` pseudo-element comments
- `@keyframes` animations with hints in comments

---

## 🔍 Additional Hidden Secrets

Beyond the 6 main challenges, there are many more secrets hidden throughout the site:

### In the HTML (index.html):
- `<html data-secret="genius{html_root_attribute}">`
- Meta tags with hidden values
- HTML comments with flags
- Hidden `<script type="text/plain">` tags containing JSON data
- SVG elements with embedded text
- Tracking pixels with suspicious parameters

### In main.tsx:
- Mock fetch handler setup comments: `genius{swhandler_secret}`
- API response headers with secrets: `X-Secret-Header`
- Hardcoded credentials in comments

### In JavaScript:
- `window.DEBUG_MODE = true`
- `window.APP_VERSION = 'genius{production_debug_secret}'`
- Hardcoded API endpoints

### In Network Requests:
- Response headers with `X-Leaked-Info` messages
- JSON error responses containing hints
- Tracking URLs with suspicious parameters

---

## 📚 Learning Points

This CTF site demonstrates real-world security vulnerabilities:

1. **Steganography** - Hidden data in images
2. **Source Code Inspection** - Information in HTML/CSS/JS
3. **Client-Side Storage** - Insecure data storage
4. **Network Exposure** - Information in HTTP headers/responses
5. **Debug Artifacts** - Production code with debug info
6. **Encoding vs Encryption** - Base64 is not secure

---

## 🛠️ How to Extract Flags Quickly

### 1. View Page Source (Fastest)
- Press `Ctrl + U` to view source
- Search for "genius{"

### 2. Use DevTools Inspector (Most Common)
- Press `F12` → Elements/Inspector tab
- Search for "genius{"

### 3. Check Network Requests
- Press `F12` → Network tab
- Reload page or click buttons
- Look at each request's headers and responses

### 4. Check Application/Storage
- Press `F12` → Application tab
- Check LocalStorage, SessionStorage, Cookies

### 5. Check Console
- Press `F12` → Console tab
- Use `atob()` to decode Base64 strings

---

## 🎓 The Complete Flag List

Here's all the flags you should find:

```
1. genius{...}  - From steganographic image (extract with steghide)
2. genius{inspect_element_works}  - In HTML data attributes
3. genius{local_storage_access_granted}  - In browser LocalStorage
4. genius{network_tab_secret}  - In API response data
5. genius{console_log_floating_from_where}  - Base64 in console (decode: Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9)
6. genius{css_hidden_content}  - In CSS display:none section
7. genius{response_header_secret}  - In X-Secret-Header response header
8. genius{html_root_attribute}  - In root HTML element data attribute
9. genius{production_debug_secret}  - In window.APP_VERSION
10. genius{global_css_variable}  - In CSS comments
... and many more!
```

---

## 🚀 Getting Started

To run the site locally:

```bash
cd ctf-demo
pnpm install  # if needed
pnpm dev
```

Then open: http://localhost:5173/

Happy hacking! 🎯

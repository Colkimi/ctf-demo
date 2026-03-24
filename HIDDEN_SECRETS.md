# Hidden Secrets & Flags - TechVault Site

This document describes all the hidden flags embedded in the "normal-looking" TechVault website. Players should discover these by using various web inspection techniques.

**All flags follow the format:** `genius{...}`

---

## 🖼️ Challenge 1: Steganographic Image
**Location:** Status panel section  
**File:** `/public/csk-encoded.png`  
**Discovery Method:** Right-click image → Save & extract with steganography tools

**How to find:**
1. Look at the `/csk-encoded.png` image on the status panel
2. Use steganography extraction tools or command-line:
   - Online: https://www.steganografia.com/
   - CLI: `steghide extract -sf csk-encoded.png`
3. Extract hidden data to find the flag

**Flag location:** Embedded in the image metadata/data layer

---

## 🔍 Challenge 2: HTML Inspection (Browser DevTools)
**Discovery Method:** Right-click → Inspect Element (F12)

The following flags are discoverable through HTML inspection:

### 2a. HTML Root Attribute
- **Location:** `<html>` tag root attribute
- **Flag:** `genius{html_root_attribute}` (stored in `data-build` attribute)
- **How to find:** Inspect the `<html>` element

### 2b. Meta Tag
- **Location:** `<head>` section `<meta name="api-key">`
- **Flag:** Hidden in meta tag content
- **How to find:** View page source or DevTools → Elements → head section

### 2c. App Container Data Attribute
- **Location:** Main `<div id="root">` or `.app-container`
- **Flag:** Hidden in `data-version` attribute
- **How to find:** Inspect the main container element

---

## 💾 Challenge 3: LocalStorage Discovery
**Discovery Method:** Browser DevTools → Application/Storage → LocalStorage

**Flags in localStorage:**
- `user_data` → `genius{localstorage_discovery}`
- `session_token` → `genius{session_management_exposed}`

**How to find:**
1. Open DevTools (F12)
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Click on LocalStorage → http://localhost:5173
4. View the stored values

---

## 🌐 Challenge 4: Network Tab / Failed Endpoints
**Discovery Method:** Browser DevTools → Network tab

**Broken Endpoints:**
1. `/api/config` - Returns 404 with potentially leaked information
2. `/api/vault/sync` - Returns 404 with potentially leaked information

**How to find:**
1. Open DevTools → Network tab
2. Click "Get Started" button (triggers fetch)
3. Observe failed requests to `/api/config` or `/api/vault/sync`
4. Check response headers and body for any information leaks

**Flag:** `genius{network_tab_discovery}` (in response or request patterns)

---

## 🖥️ Challenge 5: Console Logs (Base64 Encoded)
**Discovery Method:** Browser DevTools → Console tab

The console contains no direct logs in the cleaned version, BUT you can add console logging to reveal:

**If console logging were present:**
- Base64 encoded API keys
- Debug configuration that shouldn't be in production

**How to find:**
1. Open DevTools → Console tab
2. Look for any console messages, errors, or warnings
3. Check for base64-encoded strings

**Note:** In the current clean version, console logs have been removed for a more "normal" appearance.

---

## 🔐 Challenge 6: Source Code Analysis
**Discovery Method:** Browser DevTools → Sources tab or View Page Source

**Hidden in JavaScript:**
- Window object configuration
- API endpoints in global scope
- Build version information

**How to find:**
1. Open DevTools → Sources tab
2. Check the loaded JavaScript files
3. Search for `config`, `version`, `api`, `secret` keywords

---

## 📋 Quick Reference - All Secrets

| Challenge | Location | Discovery Method | Flag Hint |
|-----------|----------|------------------|-----------|
| 1 | `/public/csk-encoded.png` | Steganography tool | Image metadata |
| 2a | HTML root `data-build` | DevTools Inspector | HTML attributes |
| 2b | Meta tag | Page Source | Meta tags |
| 3 | localStorage | DevTools Storage | Session data |
| 4 | Network requests | DevTools Network | Failed endpoints |
| 5 | Console (if present) | DevTools Console | Base64 encoded |
| 6 | JavaScript source | DevTools Sources | Window object |

---

## 🎯 Difficulty Progression

**Easy:**
- HTML inspection (Challenge 2)
- LocalStorage (Challenge 3)

**Medium:**
- Network analysis (Challenge 4)
- Page source analysis (Challenge 6)

**Hard:**
- Steganographic extraction (Challenge 1)
- Image analysis & tool usage (Challenge 1)

---

## Notes for Challenge Authors

- The site looks like a legitimate "TechVault" secure platform
- No branding or hints that this is a CTF challenge
- All challenges are discoverable through legitimate web inspection techniques
- Removed all console.log hints and obvious CTF references
- The image contains steganographic data that must be extracted
- LocalStorage secrets are initialized automatically on first page load


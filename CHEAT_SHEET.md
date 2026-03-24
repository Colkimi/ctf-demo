# CTF Challenge - Quick Cheat Sheet

## 🚩 All Challenges Summary

| # | Challenge | Method | Difficulty | Flag Format |
|---|-----------|--------|------------|-------------|
| 1 | Steganography | Extract from PNG using steghide | 🟡 Medium | genius{...} |
| 2 | HTML Inspection | Right-click → Inspect, find data attributes | 🟢 Easy | genius{inspect_element_works} |
| 3 | LocalStorage | F12 → Application → LocalStorage | 🟢 Easy | genius{local_storage_access_granted} |
| 4 | Network Tab | F12 → Network → Check request failures | 🟡 Medium | genius{network_tab_discovery} |
| 5 | Console Logs | F12 → Console, decode Base64 | 🟢 Easy | genius{console_base64_flag} |
| 6 | CSS Hidden | View page source, check CSS comments | 🔴 Hard | genius{css_hidden_content} |

---

## 🔑 Quick Flag Locations

### HTML/DOM (F12 → Inspector)
```
<html data-secret="genius{html_root_attribute}">
<div data-flag="genius{inspect_element_works}">
<meta name="api-key" content="genius{meta_tag_api_key}">
<script type="text/plain"> → genius{hidden_script_tag}
```

### LocalStorage (F12 → Application → Local Storage)
```
ctf_hints = "genius{local_storage_access_granted}"
api_endpoint = "/api/secrets?key=genius{network_tab_secret}"
user_session = "admin=true"
```

### Console (F12 → Console)
```
Base64: Z2VuaXVze2NvbnNvbGVfYmFzZTY0X2ZsYWd9
Decoded: genius{console_base64_flag}

// Decode in console:
atob('Z2VuaXVze2NvbnNvbGVfYmFzZTY0X2ZsYWd9')
```

### Network Tab (F12 → Network → Click Requests)
```
Request: /api/config (on page load)
Request: /api/vault/sync (when clicking "Get Started" button)
Both return 404 - check the status and timing
```

### CSS/Source (F12 → Sources or Ctrl+U)
```
App.css: /* genius{css_hidden_content} */
App.css: .invisible-section { display: none; /* genius{css_hidden_content} */ }
index.css: /* genius{css_comment_secret} */
```

### Window/Global Objects (Console)
```
window.DEBUG_MODE = true
window.APP_VERSION = 'genius{production_debug_secret}'
window.API_ENDPOINT = '/api/genius{hardcoded_endpoint}'
```

### Image Metadata (steghide)
```bash
steghide extract -sf csk-encoded.png
# Enter empty password when prompted
# Extracts to: csk-encoded.txt
```

---

## ⚡ Fastest Way to Find All Flags

1. **Ctrl+U** → View Page Source → Search for "genius{"
2. **F12** → Inspector → Search for "data-" attributes
3. **F12** → Console → Decode Base64
4. **F12** → Application → Check LocalStorage
5. **F12** → Network → Click buttons and check responses
6. **steghide** → Extract from PNG file

---

## 🧠 Total Estimated Flags

- **Main Challenges**: 6
- **Hidden in HTML**: 5+
- **Hidden in CSS**: 4+
- **Hidden in JavaScript**: 3+
- **Hidden in Network**: 3+
- **Bonus/Easter Eggs**: 5+

**Total: 25+ unique flags to find!**

---

## 💡 Tips

- Some flags appear in multiple places
- Check HTML comments, not just visible content
- Inspect CSS computed styles, not just stylesheets
- Look at both request AND response in Network tab
- Check response headers, not just body
- Don't forget about meta tags and data attributes
- Images can contain metadata beyond what's visible

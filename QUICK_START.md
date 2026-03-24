# 🚩 CTF Challenge Site - Quick Start

## Start Playing NOW

The development server is already running at:
### **http://localhost:5173/**

Just open that URL in your browser and start finding flags!

---

## 🎮 How to Play

### The Site Has 6 Main Challenges:

1. **Steganographic Image**
   - Find hidden data in the PNG image
   - Use steghide command or online tools
   - **Format:** `genius{...}`

2. **Inspect the Page**
   - Right-click → Inspect or Press F12
   - Look for hidden HTML attributes
   - Search for `data-secret`, `data-flag`, etc.

3. **Browser Storage**
   - Press F12 → Application Tab
   - Check LocalStorage for secrets
   - Click the "Check LocalStorage" button

4. **Network Requests**
   - Press F12 → Network Tab
   - Click "Test Endpoints" button
   - Inspect response headers and body

5. **Console Messages**
   - Press F12 → Console Tab
   - Look for Base64 strings
   - Decode: `atob('Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9')`

6. **CSS Secrets**
   - Press Ctrl+U (View Source)
   - Search for "genius{" in CSS files
   - Check `.invisible-section` class

---

## 🔍 Finding All Flags (Cheat Codes)

### Super Fast Method (30 seconds):
```
1. Press Ctrl+U → View Source
2. Press Ctrl+F → Search "genius{"
3. Found! 🎉
```

### Proper Method (5-10 minutes):
1. F12 → Inspector → Find HTML attributes
2. F12 → Console → Decode Base64
3. F12 → Application → Check LocalStorage
4. F12 → Network → Check headers
5. Ctrl+U → View CSS comments

### Challenge-by-Challenge:
- **Easiest First:** Challenges 2, 3, 5 (all < 2 min)
- **Medium:** Challenge 4 (5-10 min)
- **Hard:** Challenge 1, 6 (10-30 min)

---

## 📚 Documentation Files

In the project folder, you'll find:

- **CTF_GUIDE.md** - Full guide with explanations
- **CHEAT_SHEET.md** - Quick reference with all flag locations
- **IMPLEMENTATION.md** - Technical details about what's implemented

---

## 🛠 Tools You'll Need

### Browser DevTools (Built-in)
- Inspector / Elements
- Console
- Network tab
- Application / Storage tab

### For Steganography
```bash
# If you have steghide installed:
steghide extract -sf public/csk-encoded.png

# Or use online tools:
# https://www.steganografia.com/
```

### For Base64 Decoding
```javascript
// In browser console:
atob('Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9')
// Returns: genius{console_log_floating_from_where}
```

---

## 🎯 What You'll Learn

✅ Browser DevTools mastery  
✅ Network analysis  
✅ Source code inspection  
✅ Common security mistakes  
✅ Web vulnerabilities  
✅ Reconnaissance techniques  

---

## 📊 Stats

- **Total Challenges:** 6 main + many bonus
- **Total Flags:** 25+
- **Format:** All in `genius{...}` format
- **Difficulty Range:** Easy to Hard
- **Estimated Time:** 30 min - 2 hours

---

## 💡 First Flag Hint

**Challenge 1 is showing. The answer is your steganographic image!**

Look for: `/public/csk-encoded.png`

Extract with: `steghide extract -sf csk-encoded.png`

**Challenge 2 is easiest - just inspect the HTML!**

---

## 🚀 If Dev Server Crashed

To restart:
```bash
cd ctf-demo
pnpm dev
```

Server runs at: http://localhost:5173/

---

## ❓ Quick FAQ

**Q: Where do I start?**  
A: Just visit http://localhost:5173/ and read the challenges!

**Q: How do I decode the Base64?**  
A: Open console (F12) and type: `atob('Z2VuaXVze2NvbnNvbGVfbG9nX2Zsb2F0aW5nX2Zyb21fd2hlcmV9')`

**Q: How do I extract steganography?**  
A: Use steghide: `steghide extract -sf csk-encoded.png` (empty password)

**Q: I found a flag! What now?**  
A: Keep going! Each challenge has multiple secrets!

**Q: Are all flags in genius{} format?**  
A: Yes! Every flag follows this format.

---

## ✨ Pro Tips

- 🔍 Use Ctrl+F to search the source for "genius{"
- 📱 Every section has a button - try them all!
- 🎨 Check CSS comments in the Inspector
- 🔓 LocalStorage is very insecure - remember why!
- 📡 Network headers can leak secrets
- 📝 Source code comments are dangerous
- 🖼️ Images can hide data beyond what's visible

---

## 🎓 Learning Resources

While playing:
- https://owasp.org/www-project-top-ten/ - Security vulnerabilities
- https://developer.mozilla.org/en-US/docs/Tools - DevTools docs
- https://en.wikipedia.org/wiki/Steganography - Steganography basics

---

**Ready? Open http://localhost:5173/ and start hacking!** 🎯

Good luck! 🚩

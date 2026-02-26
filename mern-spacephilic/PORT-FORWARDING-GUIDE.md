# 🌐 Port Forwarding Guide - Space Philic Website

## ✅ Servers Currently Running

- **Backend API**: `http://localhost:5000` ✓
- **Frontend**: `http://localhost:5173` ✓

## 📡 How to Share Your Website Publicly

### Method 1: VS Code Port Forwarding (Recommended)

1. **In VS Code Terminal**:
   - Click on the **"PORTS"** tab (next to TERMINAL tab)
   - If you don't see it, press `Ctrl+Shift+P` and type "View: Toggle Ports"

2. **Forward Port 5173 (Frontend)**:
   - In the PORTS tab, click **"Forward a Port"**
   - Enter: `5173`
   - Press Enter

3. **Make it Public**:
   - Right-click on the forwarded port 5173
   - Select **"Port Visibility"** → **"Public"**

4. **Get Your Public URL**:
   - You'll see a URL like: `https://xxxx-xxxx.preview.app.github.dev`
   - Copy this URL and share it with anyone!

5. **Optional - Forward Backend (for API access)**:
   - Repeat steps 2-4 for port `5000`
   - This allows direct API access from anywhere

### Method 2: Using GitHub Codespaces

If you're in GitHub Codespaces:
- Ports are automatically forwarded
- Look in the "PORTS" panel
- Set visibility to "Public"
- Share the generated URL

### Method 3: Using ngrok (Alternative)

```bash
# Install ngrok: https://ngrok.com/download

# Forward frontend
ngrok http 5173

# This will give you a public URL like: https://abc123.ngrok.io
```

## 🔗 Current Setup

### What's Running:

1. **Backend Server (Port 5000)**
   - Express API with mock data
   - Endpoints:
     - `GET /api/health` - Health check
     - `GET /api/team` - All team members
     - `GET /api/platforms` - All platforms

2. **Frontend Server (Port 5173)**
   - React + Vite dev server
   - Full Space Philic RUPAK website
   - Fetches data from backend API

### Quick Test:

```bash
# Test if servers are working
curl http://localhost:5000/api/health
curl http://localhost:5173
```

## 🎯 Sharing Your Work

Once you forward port 5173 and make it public:

1. **Copy the generated URL**
2. **Share with your team/clients**
3. **They can view the live site instantly!**

The URL will look something like:
- `https://redesigned-space-engine-xxxx.preview.app.github.dev`
- `https://xxxx-5173.preview.githubusercontent.com`

## 📝 Important Notes

- ✅ Both servers MUST be running
- ✅ Port forwarding only works while VS Code is open
- ✅ The forwarded URL changes if you restart VS Code
- ✅ Free GitHub port forwarding may have rate limits
- ✅ For production, use proper hosting (Vercel, Netlify, etc.)

## 🛑 Stopping Servers

To stop the servers when done:
```bash
# List background processes
# Then close terminal or Ctrl+C in the terminal window
```

## 📧 Support

If you have issues:
- Check that both servers are running
- Verify port 5173 is forwarded
- Make sure visibility is set to "Public"
- Try refreshing the forwarded URL

---

**Servers are LIVE and ready to share! 🚀**

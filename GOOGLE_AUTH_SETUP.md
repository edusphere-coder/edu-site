# Google Sign-In Setup Guide

This guide will help you set up Google OAuth authentication for your signin page.

## Frontend Setup (Already Completed)

✅ The signin page has been updated with:
- Google Sign-In button integrated with Google's OAuth SDK
- Automatic token handling and storage
- Error handling for various authentication scenarios

## Required Configuration Steps

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "NEW PROJECT"
4. Enter project name (e.g., "EduSphere")
5. Click "CREATE"

### Step 2: Enable Google+ API

1. In the Cloud Console, search for "Google+ API"
2. Click on it
3. Click "ENABLE"

### Step 3: Create OAuth 2.0 Credentials

1. Go to "Credentials" in the left sidebar
2. Click "CREATE CREDENTIALS" → "OAuth client ID"
3. If prompted, set up the OAuth consent screen first:
   - Choose "External" user type
   - Fill in the required fields
   - Add test users (optional)
4. For Application Type, select "Web application"
5. Under "Authorized JavaScript origins", add:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
6. Under "Authorized redirect URIs", add:
   - `http://localhost:3000/signin` (for development)
   - `https://yourdomain.com/signin` (for production)
7. Click "CREATE"
8. Copy your Client ID

### Step 4: Add Google Client ID to Environment Variables

1. Open `.env.local` in the project root
2. Replace `your_google_client_id_here` with your actual Client ID:
   ```
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-actual-client-id-here.apps.googleusercontent.com
   ```
3. Save the file

### Step 5: Setup Backend API Endpoint

Your backend needs to handle Google authentication. Create an endpoint at `/auth/google` that:

1. **Receives**: Google JWT token from the frontend
2. **Verifies**: The token using Google's verification endpoint
3. **Creates/Updates**: User in your database
4. **Returns**: Your app's JWT token and user data

#### Backend Implementation Example (Python/Flask):

```python
from google.auth.transport import requests
from google.oauth2 import id_token
import json

@app.route('/api/auth/google', methods=['POST'])
def google_login():
    data = request.json
    google_token = data.get('token')
    
    try:
        # Verify the token with Google
        idinfo = id_token.verify_oauth2_token(
            google_token, 
            requests.Request(), 
            GOOGLE_CLIENT_ID
        )
        
        # Extract user info
        email = idinfo['email']
        name = idinfo['name']
        picture = idinfo['picture']
        
        # Find or create user in your database
        user = User.query.filter_by(email=email).first()
        if not user:
            user = User(
                email=email,
                first_name=name.split()[0],
                last_name=name.split()[1] if len(name.split()) > 1 else '',
                is_active=True  # Auto-approve Google users
            )
            db.session.add(user)
            db.session.commit()
        
        # Generate your app's JWT token
        token = create_access_token(user.id)
        
        return {
            'success': True,
            'message': 'Google login successful',
            'data': {
                'token': token,
                'user': user.to_dict()
            }
        }, 200
        
    except ValueError as e:
        return {
            'success': False,
            'message': 'Invalid Google token'
        }, 401
```

#### Backend Implementation Example (Node.js/Express):

```javascript
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.post('/api/auth/google', async (req, res) => {
    const { token } = req.body;
    
    try {
        // Verify the token with Google
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        
        const payload = ticket.getPayload();
        const { email, name } = payload;
        
        // Find or create user
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({
                email,
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1] || '',
                isActive: true
            });
            await user.save();
        }
        
        // Generate JWT token
        const appToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        res.json({
            success: true,
            message: 'Google login successful',
            data: {
                token: appToken,
                user: user
            }
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Invalid Google token'
        });
    }
});
```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/signin`
3. Click the Google Sign-In button
4. Log in with your Google account
5. You should be redirected to the home page on success

## Troubleshooting

### "Google is not defined" error
- Make sure the `.env.local` file has `NEXT_PUBLIC_GOOGLE_CLIENT_ID` set
- Clear browser cache and restart dev server

### "No account found with this Google email" error
- The user hasn't registered yet. They need to register first with their Google email
- OR update your backend to auto-create users on first Google login

### Button not appearing
- Check browser console for errors
- Verify Google SDK loaded: Look for `window.google` in console

### CORS errors
- Make sure your backend allows requests from `http://localhost:3000`
- Add proper CORS headers to your backend

## Production Deployment

1. In Google Cloud Console, add your production domain to:
   - Authorized JavaScript origins
   - Authorized redirect URIs
2. Update `.env.local` with production Google Client ID (or use different variable)
3. Deploy your application

## Security Notes

- Never expose your Google Client Secret in frontend code
- The Client ID is public and can be safely displayed
- Token verification must happen on the backend
- Always validate tokens on the server side
- Keep your JWT secret secure on the backend

# PlaySync

PlaySync is a gaming platform that focuses on providing a safer, more secure, and engaging experience for users. The app incorporates dark neon-themed UI and multiple features aimed at addressing common issues in online gaming, such as harassment, data privacy, and addiction. Designed for a seamless user experience, PlaySync bridges the gap between gaming and community building.

---

## Features

### 1. User Authentication
- **Login and Signup Flow**: A streamlined and user-friendly authentication process.
- **Secure Authentication**: Ensures secure handling of user credentials and privacy compliance.

### 2. Neon-Themed UI
- **Dark Neon Colors**: Vibrant neon colors on a dark-themed background to enhance the visual appeal.
- **Elegant Typography**: Professional fonts for a modern look.

### 3. Navigation
- **Tab Navigation**: Easy switching between different screens such as Home, Profile, and more.
- **Headerless Navigation**: Optimized layout to reduce distractions and focus on the core content.

### 4. User Screens
- **Home Screen**: Displays game highlights, user stats, and recommended games.
- **Profile Screen**: Showcases user details and preferences with easy editing capabilities.

### 5. Custom Components
- **Neon Button**: Interactive, visually appealing buttons designed to fit the dark neon theme.

### 6. Services
- **API Integration**: Handles user authentication and data fetching seamlessly.
- **Reusable AuthService**: Centralized logic for handling authentication requests.

### 7. Utilities
- **Validation Functions**: Ensures user input is clean and meets requirements.
- **Theming**: Centralized theme management to maintain a consistent design across the app.

---

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/JadhavSaee/PlaySync.git
   cd PlaySync
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run the app:
   - For iOS: `npx react-native run-ios`
   - For Android: `npx react-native run-android`

---

## Folder Structure

```
PlaySync
|──package.json
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   └── images
│   ├── components
│   │   └── NeonButton.js
│   ├── navigation
│   │   └── AppNavigator.js
│   ├── screens
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   └── ProfileScreen.js
│   ├── services
│   │   ├── apiService.js
│   │   └── authService.js
│   ├── utils
│   │   ├── theme.js
│   │   └── validators.js
├── theme.js
└── README.md
```

---

## Future Enhancements
- **In-Game Messaging**: Allow players to communicate in real-time.
- **Gamification Features**: Leaderboards, achievements, and rewards.
- **Advanced Security**: Two-factor authentication and enhanced data encryption.
- **Game Recommendations**: AI-based recommendations based on user preferences.

---

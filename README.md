🎬 Netflix Clone Web Application
A fully responsive Netflix clone built using React, HTML, CSS, and JavaScript, with Firebase handling authentication and backend services. This web application replicates key features of Netflix, including a Sign In, Sign Up, Home, and Video Player page.

🚀 Features
🔐 Authentication: Secure Sign In and Sign Up pages using Firebase Authentication.

🏠 Home Page: Clean, Netflix-style UI showing media tiles.

▶️ Player Page: Functional player screen to mimic Netflix’s streaming experience.

📱 Responsive Design: Seamless experience across mobile, tablet, and desktop devices.

🔥 Firebase Backend: Used for auth and data handling.

🛠️ Tech Stack
Frontend: React, HTML, CSS, JavaScript

Backend/Database: Firebase (Authentication, Firestore)

📁 Project Structure

Netflix-Clone/
│
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # SignIn, SignUp, Home, Player
│   ├── firebase.js       # Firebase configuration
│   └── App.js
│
├── .gitignore
├── package.json
├── README.md
└── ...

🧑‍💻 Getting Started
Prerequisites
Node.js and npm installed


Firebase project setup

Installation

git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
npm install

Firebase Setup

Go to Firebase Console

Create a new project.

Enable Email/Password Authentication in the Firebase Authentication section.

Copy your Firebase config and replace in firebase.js.

Run the App

npm start
The app will run at http://localhost/ .

🙌 Acknowledgements
Netflix for design inspiration

Firebase for backend services

React community for open-source support

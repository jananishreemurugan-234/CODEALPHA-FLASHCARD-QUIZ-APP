# CODEALPHA-FLASHCARD-QUIZ-APP

## Project Overview
The Flashcard Quiz App is a full-stack web application developed as part of the CodeAlpha Internship (App Development Domain). It is designed to help learners study and revise effectively using interactive digital flashcards.

This project demonstrates key skills in frontend (React.js) and backend (Node.js + Express.js) development. Flashcards are stored persistently in a JSON file on the backend, while the frontend provides a clean, responsive user interface for desktop and mobile users. The app also supports running on a local IP address, making it accessible across devices connected to the same network.

## Objective
The objective of this project is to create a practical study tool that combines flashcards and quizzes to improve memory retention. By implementing CRUD operations, responsive design, and API integration, this app serves as a complete learning management mini-system.

## Features
- Add Flashcards – Create custom questions and answers
- Edit/Delete Flashcards – Update or remove existing flashcards
- Quiz Mode – Answer questions and track your score in real time
- Progress Score – Displays user performance at the end of each quiz
- Responsive Layout – Works smoothly on desktop and mobile devices
- Persistent Storage – Flashcards saved in flashcards.json
- IP Address Access – Run the app on mobile devices via Wi-Fi

## User Interface
The UI is designed for simplicity and efficiency:

- Flashcards Section → View, add, edit, and delete flashcards
- Quiz Section → Answer questions interactively with instant feedback
- Navigation Controls → Previous/Next buttons for card navigation
- Animations → Smooth transitions for a better experience

## How It Works
1. The backend (server.js) runs a REST API and manages flashcard data stored in flashcards.json.
2. The frontend (React.js) communicates with the backend through api.js to fetch, add, and update flashcards.
3. Users can create flashcards, flip them to view answers, and take quizzes.
4. Quiz submissions are scored instantly, and results are shown at the bottom.
5. The app supports both localhost and IP address access for mobile use.
   
## How to Run

1. Clone the repository:

`git clone https://github.com/jananishreemurugan-234/CODEALPHA-FLASHCARD-QUIZ-APP.git`

`cd flashcard-quiz-app`

2. Install dependencies:
Backend:

`cd backend`

`npm install`

Frontend:

`cd frontend`

`npm install`

3. Start the backend server:

`node server.js`

4. Start the frontend app:

`npm run dev`

5. Access the app in browser:

- Desktop → http://localhost:5173
- Mobile → http://your-ip-address:5173

## Project Structure

`flashcard-quiz-app/`

`│`

`├── backend/`

`│   ├── data/`

`│   │   └── flashcards.json      # Stores flashcards`

`│   ├── server.js                # Express backend server`

`│   └── package.json             # Backend dependencies`

`│`

`├── frontend/`

`│   ├── src/`

`│   │   ├── components/`

`│   │   │   ├── Flashcards.jsx`

`│   │   │   ├── AddFlashcardForm.jsx`

`│   │   │   └── Quiz.jsx`

`│   │   ├── App.jsx`

`│   │   ├── main.jsx`

`│   │   └── styles.css`

`|   |   |__ api.js`

`|   |   |__ index.html`

`│   └── package.json             # Frontend dependencies`

## Conclusion
The Flashcard Quiz App is a complete frontend + backend project that highlights essential app development skills, including React UI design, Express.js API handling, CRUD operations, JSON data storage, and mobile responsiveness.

Developed under the CodeAlpha Internship, this project not only improves study efficiency but also serves as a professional portfolio project demonstrating real-world app development.

## Future Enhancements
- Detailed analytics for quiz performance
- Database integration (MongoDB / PostgreSQL)
- Authentication system with user accounts
- Native mobile app with React Native
- Multi-user flashcard sharing and collaboration

## Output
Desktop

<img width="1887" height="1179" alt="Screenshot 2025-09-21 193848" src="https://github.com/user-attachments/assets/7c81a1c8-e9ff-400c-a30f-d90e161877c7" />

Mobile

![Screenshot_2025_0921_194403](https://github.com/user-attachments/assets/a37b3f82-8e38-48aa-ad58-ebf24b9dfbf1)


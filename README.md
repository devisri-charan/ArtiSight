# ArtiSight

## Introduction
ArtiSight is an AI Photo Critique Assistant utilizing Large Language Models (LLMs) to analyze and critique photos. It offers objective and specific feedback on aspects like composition, lighting, color, and subject matter. ArtiSight stands out by providing actionable insights and personalized learning recommendations.

## Folder Structure
- `/artisight` - Contains the Vite + React.js frontend application.
- `/backend` - Contains the Python Flask backend application.
- `ArtiSight Presentation.pdf` - Presentation slides for the project.
- `ArtiSight Report.pdf` - Detailed project report.
- `ArtiSight Demo.mp4` - Video demonstration of the project.

## Installation Instructions

### Frontend
To set up the frontend:
1. Navigate to the `artisight` folder.
2. Install dependencies with npm:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Backend
To set up the backend:
1. Navigate to the `backend` folder.
2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```
3. Start the Flask application:
   ```
   python app.py
   ```

## Usage
Once both the frontend and backend servers are running, you can access the frontend via `http://localhost:5173` and interact with the backend through the API endpoints exposed at `http://127.0.0.1:5000`.

## Additional Resources
- [Presentation Slides](ArtiSight%20Presentation.pdf)
- [Project Report](ArtiSight%20Report.pdf)
- [Video Demo](ArtiSight%20Demo.mp4)

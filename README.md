# SLNSA Website

Is a professional frontend and a backend powered by **MongoDB Atlas**. It includes real-time shipment tracking, shipment history visualization, PDF and CSV export, and more.

## Features

- **Real-time Shipment Tracking**: Save and retrieve shipment data.  
- **Shipment History Timeline**: Dynamic visualization of shipment progress.  
- **Shipment History Table**: Tabular view for easy reference.  
- **Countdown Timer**: Shows estimated delivery in days, hours, and minutes.  
- **PDF Export**: Download shipment details with **logo, brand info, address, contact, and timestamp**.  
- **CSV Export**: Download shipment history in CSV format.  
- **MongoDB Atlas Backend**: Real data persistence for all shipments.  
- **Responsive Design**: Fully mobile-friendly layout.

## Backend Setup

1. Navigate to the `backend/` folder.  
2. Install dependencies:

```bash
npm install

3. Create a .env file based on .env.example with your MongoDB Atlas URI:



PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/slnsa_db?retryWrites=true&w=majority

4. Start the backend server:



npm start

Frontend Setup

1. Navigate to the frontend/ folder.


2. Open track.html in a browser or deploy the frontend to Vercel/Netlify.


3. Update the API_BASE variable in track.html to point to your deployed backend URL or http://localhost:5000 for local testing.



Deployment Instructions

Backend Deployment

Recommended platforms: Render, Heroku, Railway, or any Node.js hosting service.

Ensure .env contains a correct MongoDB Atlas URI.

Deploy the backend as a Node.js application.


Frontend Deployment

Recommended platforms: Vercel, Netlify.

Ensure API_BASE points to the deployed backend.

Upload the frontend/ folder or link your GitHub repository.


Notes

Replace the placeholder logo in assets/images/logo.png with your actual logo.

Ensure CORS is enabled in the backend for the frontend domain.

All shipment data is stored and retrieved from MongoDB Atlas.

PDF export includes brand name, logo, address, email, contact info, timestamp.

CSV export includes all shipment history.


Folder Structure

slnsa-website/
│
├─ backend/
│   ├─ server.js
│   ├─ package.json
│   └─ .env.example
│
├─ frontend/
│   ├─ track.html
│   ├─ index.html
│   └─ assets/
│       ├─ css/style.css
│       └─ images/logo.png
│
└─ README.md

Contact

For support or further customization, reach out to info@slnsa.com.sl or call +232 76 747 893.
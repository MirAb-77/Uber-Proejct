## **📌 Overview**
**Uber-Video** is a ride-hailing application that enables users to book rides, track drivers in real time, and manage trips efficiently. It consists of:  

✔ **Frontend (React.js/Next.js)** – Manages user interactions & UI.  
✔ **Backend (Node.js/Express/Python)** – Handles ride requests, authentication, trip matching, and real-time updates.  
✔ **Database (MongoDB/SQL)** – Stores user, driver, and ride data.  
✔ **Authentication (JWT & OAuth)** – Secure user login & session management.  
✔ **Real-Time Communication (Socket.io)** – Enables live tracking & notifications.  

---

## **📂 Project Structure**
```
uber-video/
│── Backend/          # Backend APIs & Database
│    ├── models/      # Database Models
│    ├── routes/      # API Endpoints
│    ├── controllers/ # Business Logic
│    ├── config/      # Database & Environment Config
│    ├── app.js       # Main Server File
│── Frontend/         # React.js-based Frontend
│    ├── components/  # Reusable UI Components
│    ├── pages/       # Main Pages (Login, Dashboard, etc.)
│    ├── services/    # API Call Handlers
│── README.md         # Project Documentation
│── package.json      # Project Dependencies
```

---

## **🛠️ Technologies Used**
### **🔹 Frontend (📂 /frontend)**
| Technology  | Purpose |
|-------------|---------|
| **React.js** | UI Development |
| **Redux** | State Management |
| **Axios** | API Requests |
| **React Router** | Navigation |
| **TailwindCSS** | Styling |
| **JWT** | Authentication |

### **🔹 Backend (📂 /backend)**
| Technology  | Purpose |
|-------------|---------|
| **Node.js & Express.js** | Server & API |
| **MongoDB & Mongoose** | Database |
| **JWT & Bcrypt.js** | Authentication |
| **Socket.io** | Real-Time Communication |
| **Redis** | Caching & Performance |
| **Python (Optional)** | AI-based fare prediction |

---

## **🚀 How to Clone & Setup the Project**
### **🔹 Step 1: Clone the Repository**
Open **VS Code Terminal** and run:
```sh
git clone https://github.com/Ankur77720/uber-video.git
cd uber-video
```

---

## **📦 Installing Dependencies**
### **🔹 Step 2: Install Backend Dependencies**
1. Navigate to the backend folder:
   ```sh
   cd Backend
   ```
2. Install the required packages:
   ```sh
   npm install  # If backend is Node.js
   ```
   OR (If backend uses Python)
   ```sh
   pip install -r requirements.txt
   ```

### **🔹 Step 3: Install Frontend Dependencies**
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

---

## **▶️ Running the Project**
### **🔹 Step 4: Start Backend Server**
1. Move to the backend directory:
   ```sh
   cd Backend
   ```
2. Start the server:
   ```sh
   npm start  # If using Node.js
   ```
   OR (If using Python)
   ```sh
   python app.py
   ```
3. The **backend API** will run at:
   ```
   http://localhost:5000
   ```

---

### **🔹 Step 5: Start Frontend**
1. Move to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Start the frontend:
   ```sh
   npm start
   ```
3. The **frontend will be available at**:
   ```
   http://localhost:3000
   ```

---

## **🔑 Environment Variables Setup**
For **Backend**, create a `.env` file inside the **Backend** folder:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/uber-db
JWT_SECRET=your_secret_key
```

For **Frontend**, create `.env.local` in the frontend folder:
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

## **📜 Features & API Endpoints**
### **🔹 Backend API**
| Endpoint  | Method | Description |
|-----------|--------|-------------|
| `/users/register` | `POST` | Register a new user |
| `/users/login` | `POST` | Authenticate a user |
| `/rides/create` | `POST` | Create a new ride request |
| `/rides/get-fare` | `GET` | Get ride fare estimate |
| `/drivers/register` | `POST` | Register a new driver |
| `/drivers/update-location` | `POST` | Update driver location |

### **🔹 Frontend Pages**
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Welcome screen |
| Login | `/login` | User login page |
| Dashboard | `/dashboard` | User dashboard |
| Ride Request | `/book-ride` | Request a ride |
| Driver Page | `/driver` | Driver management |

---

## **⚠️ Troubleshooting & Common Errors**
### **🔹 Port Already in Use**
```sh
Error: listen EADDRINUSE: address already in use
```
✔ Solution:
```sh
kill -9 $(lsof -t -i:5000)  # For backend port
kill -9 $(lsof -t -i:3000)  # For frontend port
```

### **🔹 npm install Errors**
✔ Solution:
```sh
npm cache clean --force
npm install
```

### **🔹 MongoDB Connection Issues**
✔ Solution:
```sh
sudo systemctl start mongod  # Start MongoDB service
```
OR Run MongoDB manually:
```sh
mongod --dbpath /path/to/data/db
```

### **🔹 Frontend Not Connecting to Backend**
✔ Solution:
1. **Check if the backend is running:**  
   ```sh
   curl http://localhost:5000/api/status
   ```
2. Ensure **CORS is enabled** in `server.js`:
   ```js
   app.use(cors());
   ```

---

## **📜 Deployment (Optional)**
### **🔹 Deploy Backend (Node.js)**
- **Using Heroku**:
  ```sh
  heroku create uber-backend
  git push heroku main
  ```

- **Using Docker**:
  ```sh
  docker build -t uber-backend .
  docker run -p 5000:5000 uber-backend
  ```

### **🔹 Deploy Frontend (React)**
- **Using Vercel**:
  ```sh
  vercel
  ```

- **Using Netlify**:
  ```sh
  netlify deploy
  ```

---

## **📜 Conclusion**
This guide provides a **step-by-step setup** for the Uber-like system.  
🚀 Now you can **clone, install, run, and develop** the project in **VS Code!**  

📌 **Next Steps**:  
✔ Add **unit tests** for APIs.  
✔ Implement **CI/CD pipelines**.  
✔ Enhance **security & performance**.  

**Need help?** **Ask me!** 

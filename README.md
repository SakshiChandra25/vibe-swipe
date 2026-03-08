# Vibe Swipe – Dopamine Dressing Inspiration App

Vibe Swipe is an interactive fashion inspiration platform where users swipe through aesthetic outfit “vibes” in a Tinder-style interface. Each vibe combines a fashion image and a color mood, allowing users to build their own personal **Vibe Vault** of saved looks.

The project focuses on creating an **emotional, playful experience** instead of a traditional grid-based shopping interface.

---

## Features

### Swipe-Based Interface

* Users swipe **left to skip** and **right to like** outfit vibes.
* Inspired by the Tinder interaction pattern.
* Built using **Framer Motion drag gestures**.

### Dynamic Background Mood

* The app background changes color to match the **accent color of each vibe**.
* Creates a visually immersive experience.

### Vibe Vault

* All liked outfits are saved in a personal **Vibe Vault page**.
* Displayed using a **Pinterest-style Masonry layout**.
* Cards appear slightly tilted to resemble a scrapbook aesthetic.

### Fast Single-Page Experience

* Built with **React** for seamless navigation without page reloads.

---

## Tech Stack

### Frontend

* **React.js**
* **Bootstrap 5**
* **Framer Motion**
* **Axios**
* **React Router**

### Backend

* **Node.js**
* **Express.js**
* **Sequelize ORM**

### Database

* **MySQL**

---

## 🗄 Database Design

The application uses a relational structure:

Users
│
└── Likes
│
└── Vibes

### Tables

**Users**

* id
* username
* email

**Vibes**

* id
* title
* image_url
* color

**Likes**

* id
* user_id
* vibe_id

---

## Project Structure

```
womens-day
│
├── backend
│   ├── config
│   │   └── database.js
│   ├── models
│   │   ├── User.js
│   │   ├── Vibe.js
│   │   └── Like.js
│   ├── routes
│   │   └── vibeRoutes.js
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── VibeCard.js
│   │   ├── pages
│   │   │   └── Vault.js
│   │   └── App.js
│
└── README.md
```

---

## How to Run the Project

### Clone the Repository

```
git clone https://github.com/sakshichandra/vibe-swipe.git
```

---

### Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
DB_NAME=vibe_swipe
DB_USER=root
DB_PASSWORD=yourpassword
```

Start backend server:

```
npm run dev
```

---

### Setup Frontend

```
cd frontend
npm install
```

Create `.env` file:

```
REACT_APP_API_URL=http://localhost:5000/api
```

Start React app:

```
npm start
```

---

##  Future Improvements

* User authentication
* Personalized vibe recommendations
* AI-powered outfit suggestions
* Mobile-first UI improvements

---

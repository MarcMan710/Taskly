
---

# Taskly

Taskly is a full-stack **Task Manager Web Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This app allows users to register, log in, and manage their tasks effectively with features like task creation, updates, and deletion.

---

## Features

- User Authentication (login/sign up)
- Task Creation (title, description)
- Task Listing (view all tasks)
- Task Status (not started, in progress, completed)
- Due Dates (setting and displaying due dates)
- Task Filters (filter by status)

---

## Project Structure

```plaintext
taskly/
├── backend/                    # Backend code (Node.js & Express)
│   ├── config/                 # Configuration files (e.g., database, environment)
│   ├── controllers/            # Controllers (business logic)
│   ├── middleware/             # Middleware (auth, error handling)
│   ├── models/                 # Mongoose models (User, Task)
│   ├── routes/                 # API routes (User, Task)
│   ├── utils/                  # Utility functions (e.g., JWT, helpers)
│   ├── server.js               # Entry point for backend server
│   └── .env                    # Environment variables (not tracked in Git)
├── frontend/                   # Frontend code (React.js)
│   ├── public/                 # Static files
│   ├── src/                    # React source code
│   │   ├── assets/             # Images, styles
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom hooks
│   │   ├── context/            # React Context for global state
│   │   ├── services/           # API service
│   │   ├── App.js              # Main app entry point
│   │   └── index.js            # React DOM renderer
├── .gitignore                  # Git ignore file
└── README.md                   # Project documentation
```

---

## Installation

### Prerequisites

- Node.js (>=14.x)
- MongoDB (local or cloud-based)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory and configure the following:

   ```plaintext
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend/` directory and configure the following:

   ```plaintext
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the React development server:

   ```bash
   npm start
   ```

---

## Usage

1. Visit the frontend application at `http://localhost:3000`.
2. Register a new user or log in with an existing account.
3. Add, update, or delete tasks from the task list.

---

## API Endpoints

### User Routes

| Method | Endpoint        | Description               | Access  |
|--------|-----------------|---------------------------|---------|
| POST   | `/api/users/register` | Register a new user       | Public  |
| POST   | `/api/users/login`    | Authenticate a user       | Public  |
| GET    | `/api/users/me`       | Get user profile          | Private |

### Task Routes

| Method | Endpoint        | Description               | Access  |
|--------|-----------------|---------------------------|---------|
| GET    | `/api/tasks`    | Get all tasks             | Private |
| POST   | `/api/tasks`    | Create a new task         | Private |
| PUT    | `/api/tasks/:id`| Update a specific task    | Private |
| DELETE | `/api/tasks/:id`| Delete a specific task    | Private |

---

## Technologies Used

### Backend

- **Node.js**: Runtime for server-side JavaScript.
- **Express.js**: Framework for building REST APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: MongoDB object modeling.
- **JWT**: Secure user authentication.

### Frontend

- **React.js**: Component-based library for building the UI.
- **Axios**: HTTP client for making API calls.
- **React Router**: For routing and navigation.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For issues, questions, or feedback, please create an issue in this repository.

---

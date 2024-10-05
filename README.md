# Doctor Appointment System
This repository contains a Doctor Appointment system built using React.js for the frontend and Laravel for the backend. It allows users to register, book appointments with doctors, and manage appointments via a user-friendly interface. Doctors can manage their appointments, view patient details, and confirm or cancel bookings. The admin dashboard provides an overview of the entire system, including users, doctors, and appointments.

## Project Structure

- **Frontend**: Built with React and Tailwind CSS.
- **Backend**: Built with Laravel.

## Features

- **React Frontend**:
  - User-friendly interface
  - Data display and interaction
  - Responsive design

- **Laravel Backend**:
  - RESTful API for data handling
  - Database management
 
## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (for React)
- [Composer](https://getcomposer.org/) (for Laravel)
- [PHP](https://www.php.net/) (for Laravel)
- [MySQL](https://www.mysql.com/) or another database (for Laravel)

### Setting Up the Backend (Laravel)

1. **Clone the Repository**:
    ```bash
    go to your directory after cloning
    cd your-directory
    ```

2. **Install PHP Dependencies**:
    ```bash
    cd backend
    composer install
    ```

3. **Set Up Environment Variables**:
    - Copy the example environment file:
        ```bash
        cp .env.example .env
        ```
    - Edit the `.env` file to configure your database and other settings.

4. **Generate Application Key**:
    ```bash
    php artisan key:generate
    ```

5. **Run Migrations**:
    ```bash
    php artisan migrate
    ```

6. **Start the Laravel Server**:
    ```bash
    php artisan serve --port=8001
    ```

   The backend should now be running at `http://127.0.0.1:8001`.

### Setting Up the Frontend (React)

1. **Navigate to the Frontend Directory**:
    ```bash
    cd frontend
    ```

2. **Install Node.js Dependencies**:
    ```bash
    npm install
    ```

3. **Start the React Development Server**:
    ```bash
    npm start
    ```

   The frontend should now be running at `http://localhost:5173`.

4. **Install the React Libraries**:
    ```bash
    npm install @mui/x-data-grid
    npm install @emotion/react @emotion/styled
    npm install @mui/material @mui/x-data-grid
    npm install axios
    npm install react-icons
    npm intsall react-toastify
    npm install react-router-dom
    ```

### Setting Up the Tailwind (React)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### in tailwind.config.js
```bash
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
### in index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Usage

- **Frontend**: Navigate to `http://localhost:5173` in your browser to access the admin dashboard.
- **Backend**: The API endpoints are available at `http://127.0.0.1:8001/api/`.

## Contributing

If you want to contribute to this project, please fork the repository and submit a pull request with your changes.

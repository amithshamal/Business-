# Business Form Project

This project consists of a frontend (React) and a backend (Laravel) application for handling business form data.

**Clone the repository:**

    ```shell
    git clone git@github.com:amithshamal/Business-.git
    ```


## Table of Contents

-   [Backend Setup (Laravel)](#backend-setup-laravel)
-   [Frontend Setup (React)](#frontend-setup-react)

## Backend Setup (Laravel)
1.  **Install Composer dependencies:**

    ```shell
    composer install
    ```

2.  **Configure the environment:**

    *   Copy the `.env.example` file to `.env`:

        ```shell
        cp .env.example .env
        ```

    *   Edit the `.env` file with your database credentials:

        ```
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=business
        DB_USERNAME=root
        DB_PASSWORD=
        ```

    *   Generate an application key:

        ```shell
        php artisan key:generate
        ```

3.  **Database Migration:**

    ```shell
    php artisan migrate
    ```

4.  **API Routes:**

    *   The API routes are defined in `routes/api.php`.

5.  **Run the development server:**

    ```shell
    php artisan serve
    ```

    The backend will be accessible at `http://127.0.0.1:8000`.

## Frontend Setup (React)
1.  **Install Node.js dependencies:**

    ```shell
    npm install
    ```

2.  **Run the development server:**

    ```shell
    npm start
    ```

    The frontend will be accessible at `http://localhost:5173`.

**Note:** This guide assumes you have Composer, Node.js, and npm installed on your system.
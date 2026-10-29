# Fullstack Music Player

A full-stack music player built with React, Vite, Express, MongoDB, Redux Toolkit, ImageKit, and the Jamendo API.

## Features

- Browse and search music from Jamendo
- Create an account and sign in
- Save favourite songs
- Edit a profile, including avatar upload
- Reset a forgotten password

## Project structure

```text
frontend/  React + Vite client
backend/   Express API and MongoDB integration
```

## Run locally

1. Copy each `.env.example` file to `.env` in the same directory and fill in its values.
2. Start the API:

   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. In another terminal, start the client:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

The frontend expects `VITE_BASE_URL` to point to the API, normally `http://localhost:5000`.

## Environment variables

See `frontend/.env.example` and `backend/.env.example` for the required variable names. Never commit real `.env` files or credentials.

## Production

The frontend is deployed as a static Vite site and the backend as a Node.js web service. Configure all backend credentials in the hosting provider's environment-variable settings.

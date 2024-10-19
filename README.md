# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## About

- Records management at /manage
- ID and access token required to display a record (available in management)
- Every record can be submitted only once

## Setup

Make sure to install the dependencies:

```bash

npm install

```

Requests need to be sent via HTTPS in order for HttpOnly cookies to work. Use mkcert for local development.

## env variables

The following environment variables must be set:
- MONGODB_URI (database access)
- MANAGE_TOKEN (secure, serves as password for backend access)
- AUTH_SECRET (secure, jwt secret)
- BASE_URL
- NODE_TLS_REJECT_UNAUTHORIZED=0 (in case of local development)

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:

```bash
# npm
npm run build

```
# Firebase Auth Boilerplate

Boilerplate for Firebase Auth to work with PERN Stack

## Setup

Populate `web/.env` with the following:

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_SECRET={should be same on server and web}
REACT_APP_API_URL=
```

Populate `server/.env` with the following:

```env
API_FIREBASE_API_KEY=
API_FIREBASE_AUTH_DOMAIN=
API_FIREBASE_PROJECT_ID=
API_FIREBASE_STORAGE_BUCKET=
API_FIREBASE_MESSAGING_SENDER_ID=
API_FIREBASE_APP_ID=
API_SECRET={should be same on server and web}
```

### Using Access Token

Navigate to [/web/src/components/App.js](/web/src/components/App.js) to see how Access Token is generated within `useEffect`.

Save the token to localStorage or global state and use it for all requests by passing it in Authorization header.

```js
    const response = await fetch(`yourapi.com/api/`, {
        headers: {
            Authorization: `Bearer ${token}`,
    },
```

### Using Middleware

Navigate to [/server/index.js](/server/index.js), `tokenVerifyMiddleware` function can be injected as middleware in all requests to verify the passed Access Token in Authorization header.

## Running the Code

Ensure you have installed dependencies in both `/web` and `/server` folders with `npm install` and have set up `.env` files with the correct values as mentioned above.

```bash
cd server/
node index.js
```

```bash
cd web/
npm start
```

## Recommended Libraries

- Redux for State management. Store Access Tokens and User info in Redux store for easy access to all components.

- Seqeulize as ORM for Postgres. Easy Raw Queries and well defined ORM API.

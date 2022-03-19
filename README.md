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

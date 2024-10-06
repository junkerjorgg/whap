import GUN from 'https://cdn.skypack.dev/gun';

// eslint-disable-next-line no-unused-vars, import/no-unresolved
import SEA from 'https://cdn.skypack.dev/gun/sea';

export const gun = GUN(
  [
    'http://localhost:8765/gun',
    // Commented out for now to prevent filling our local database with too much data for the storage backend's capacity
    // 'https://gun-manhattan.herokuapp.com/gun'
  ],
  { localStorage: false },
);

export const user = gun.user().recall({ sessionStorage: true });

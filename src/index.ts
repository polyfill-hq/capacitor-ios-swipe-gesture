import { registerPlugin } from '@capacitor/core';

import type { iOSSwipeGesturePlugin } from './definitions';

const iOSSwipeGesture = registerPlugin<iOSSwipeGesturePlugin>(
  'iOSSwipeGesture',
  {
    web: () => import('./web').then(m => new m.iOSSwipeGestureWeb()),
  },
);

export * from './definitions';
export { iOSSwipeGesture };

import { WebPlugin } from '@capacitor/core';

import type { iOSSwipeGesturePlugin } from './definitions';

export class iOSSwipeGestureWeb
  extends WebPlugin
  implements iOSSwipeGesturePlugin {
  async enable(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async disable(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}

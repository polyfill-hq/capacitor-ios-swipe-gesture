import { WebPlugin } from '@capacitor/core';

import type { iOSSwipeGesturePlugin } from './definitions';

export class iOSSwipeGestureWeb
  extends WebPlugin
  implements iOSSwipeGesturePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

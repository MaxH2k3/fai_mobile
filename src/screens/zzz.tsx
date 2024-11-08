import { NativeModules } from 'react-native';

const { BadgeModule } = NativeModules

export const setBadgeCount = (count: number): void => {
  if (BadgeModule) {
    BadgeModule.setBadgeCount(count);
  } else {
    console.warn('BadgeModule is not available');
  }
};

export const clearBadgeCount = (): void => {
  if (BadgeModule) {
    BadgeModule.clearBadgeCount();
  } else {
    console.warn('BadgeModule is not available');
  }
};

/**
 * Platform detection utilities
 */

export type Platform = 'android' | 'ios' | 'desktop';

/**
 * Detects the user's platform based on user agent
 * This runs on the client side only
 */
export function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'desktop';

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'ios';
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  // Default to desktop
  return 'desktop';
}

/**
 * Check if user is on mobile device (iOS or Android)
 */
export function isMobile(): boolean {
  const platform = detectPlatform();
  return platform === 'android' || platform === 'ios';
}

/**
 * Get platform-specific download URL
 */
export function getPlatformDownloadUrl(platform: Platform, apkVersion?: string): string {
  switch (platform) {
    case 'android':
      return apkVersion ? `/apk/${apkVersion}.apk` : '/apk/latest.json';
    case 'ios':
      // Replace with your actual TestFlight public link
      return 'https://testflight.apple.com/join/YOUR_TESTFLIGHT_CODE';
    default:
      return '#';
  }
}

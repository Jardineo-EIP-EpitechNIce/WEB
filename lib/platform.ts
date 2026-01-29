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

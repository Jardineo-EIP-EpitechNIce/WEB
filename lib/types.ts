/**
 * Type definitions for the application
 */

export interface ApkVersion {
  version: string;
  file: string;
  releaseDate: string;
  changelog: string[];
}

export interface DownloadButtonProps {
  platform: 'android' | 'ios';
  version?: string;
  file?: string;
  isPrimary?: boolean;
}

export interface ApkVersion {
  version: string;
  file: string;
  releaseDate: string;
  downloadUrl: string;
  changelog: string[];
}

export interface DownloadButtonProps {
  platform: 'android' | 'ios';
  version?: string;
  downloadUrl?: string;
  isPrimary?: boolean;
}

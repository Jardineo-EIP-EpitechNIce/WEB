# APK Storage

This directory contains Android APK files for distribution.

## File Naming Convention

APK files must follow semantic versioning:
- `1.0.0.apk`
- `1.1.0.apk`
- `1.2.3.apk`

## How to Add a New Version

1. Place the APK file in this directory with the version number as filename
2. Update `latest.json` to point to the new version:

```json
{
  "version": "1.2.3",
  "file": "1.2.3.apk",
  "releaseDate": "YYYY-MM-DD",
  "changelog": [
    "Feature or fix description",
    "Another change"
  ]
}
```

3. Commit and push
4. The website will automatically serve the latest version

## Current Structure

```
/public/apk/
  ├── latest.json       # Single source of truth for current version
  ├── 1.0.0.apk        # Example APK file
  ├── 1.1.0.apk        # Example APK file
  └── README.md        # This file
```

## Important Notes

- Keep only the last 2-3 versions to save space
- APK files are served directly from this path
- `latest.json` is the only file that needs updating for version changes

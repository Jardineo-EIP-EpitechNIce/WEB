'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { detectPlatform, Platform } from '@/lib/platform';
import { ApkVersion } from '@/lib/types';
import DownloadButton from './DownloadButton';

export default function Hero() {
  const [platform, setPlatform] = useState<Platform>('desktop');
  const [apkData, setApkData] = useState<ApkVersion | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Detect platform
    setPlatform(detectPlatform());

    // Fetch latest APK version
    fetch('/apk/latest.json')
      .then((res) => res.json())
      .then((data: ApkVersion) => {
        setApkData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch APK version:', error);
        setLoading(false);
      });
  }, []);

  const primaryPlatform = platform === 'ios' ? 'ios' : 'android';
  const secondaryPlatform = platform === 'ios' ? 'android' : 'ios';

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-jardineo-surface">
      <div className="max-w-4xl w-full text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Jardineo Logo"
              width={280}
              height={280}
              priority
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-jardineo-green-dark mb-6 leading-tight">
          Bienvenue sur <span className="text-jardineo-primary">Jardineo</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-jardineo-gray mb-16 max-w-3xl mx-auto font-normal">
          Votre compagnon de jardinage intelligent. Gérez vos plantes, visualisez en AR et développez votre main verte.
        </p>

        {/* Download Buttons */}
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-jardineo-primary"></div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <DownloadButton
              platform={primaryPlatform}
              version={primaryPlatform === 'android' ? apkData?.version : undefined}
              isPrimary
            />
            <DownloadButton
              platform={secondaryPlatform}
              version={secondaryPlatform === 'android' ? apkData?.version : undefined}
            />
          </div>
        )}

        {/* Version Info */}
        {apkData && (
          <div className="mt-12 bg-jardineo-primary-soft rounded-jardineo p-6 max-w-2xl mx-auto border border-jardineo-border">
            <h3 className="text-lg font-jardineo-medium text-jardineo-green-dark mb-3">
              Dernière version: v{apkData.version}
            </h3>
            <p className="text-sm text-jardineo-gray mb-4">
              Publié le {new Date(apkData.releaseDate).toLocaleDateString('fr-FR')}
            </p>
            {apkData.changelog && apkData.changelog.length > 0 && (
              <div className="text-left">
                <h4 className="text-sm font-jardineo-medium text-jardineo-gray mb-2">Nouveautés :</h4>
                <ul className="text-sm text-jardineo-gray space-y-1">
                  {apkData.changelog.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-jardineo-primary mt-0.5 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-jardineo-surface rounded-jardineo p-6 border border-jardineo-border hover:border-jardineo-primary transition-all duration-300">
            <div className="w-12 h-12 bg-jardineo-green-soft rounded-jardineo flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-jardineo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-jardineo-medium text-jardineo-green-dark mb-2">Gestion du jardin</h3>
            <p className="text-jardineo-gray text-sm">Suivez vos plantes, planifiez votre jardin et recevez des conseils personnalisés.</p>
          </div>

          <div className="bg-jardineo-surface rounded-jardineo p-6 border border-jardineo-border hover:border-jardineo-primary transition-all duration-300">
            <div className="w-12 h-12 bg-jardineo-sky rounded-jardineo flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-jardineo-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-jardineo-medium text-jardineo-green-dark mb-2">Visualisation AR</h3>
            <p className="text-jardineo-gray text-sm">Prévisualisez vos plantes dans votre jardin grâce à la réalité augmentée.</p>
          </div>

          <div className="bg-jardineo-surface rounded-jardineo p-6 border border-jardineo-border hover:border-jardineo-primary transition-all duration-300">
            <div className="w-12 h-12 bg-jardineo-green-soft rounded-jardineo flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-jardineo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-jardineo-medium text-jardineo-green-dark mb-2">Communauté</h3>
            <p className="text-jardineo-gray text-sm">Partagez vos progrès et apprenez des autres jardiniers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

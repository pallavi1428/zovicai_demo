'use client';
import { useVideoHover } from '@/shared/hooks/useVideoHover';
import { EffectBadge } from './EffectBadge';
import type { Effect } from '../types';

interface EffectCardProps {
  id: number;
  title: string;
  posterImage: string;
  videoSrc: string;
  badges?: Effect['badges'];
  mixedWith?: string;
  aspectRatio?: string;
}

export default function EffectCard({
  title,
  posterImage,
  videoSrc,
  badges = [],
  mixedWith,
  aspectRatio = '3/4',
}: EffectCardProps) {
  const { videoRef, isHovered, isVideoLoaded, isImageLoaded, handlers } = useVideoHover();

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/10 hover:scale-[1.02]"
      onMouseEnter={handlers.onMouseEnter}
      onMouseLeave={handlers.onMouseLeave}
    >
      {/* Badges stay visible in corner – no change */}
      <div className="absolute top-4 right-4 z-20">
        <EffectBadge badges={badges} mixedWith={mixedWith} />
      </div>

      {/* Media container */}
      <figure
        className="relative overflow-hidden"
        style={{ aspectRatio }}
      >
        {/* Poster – always base layer, fades out slightly only if you want (optional) */}
        <img
          src={posterImage}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handlers.onImageLoad}
          loading="lazy"
        />

        {/* Video – fades in on top when hovered & loaded */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={handlers.onVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Optional ultra-subtle loading placeholder */}
        {!isImageLoaded && !isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 animate-pulse" />
        )}
      </figure>

      {/* Optional: very subtle title fade-in at bottom – comment out if you want ZERO text */}
      {/* <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h4 className="text-white text-sm font-medium drop-shadow-md">
          {title}
          {badges.includes('mixed') && mixedWith && (
            <span className="opacity-70"> × {mixedWith}</span>
          )}
        </h4>
      </div> */}
    </div>
  );
}
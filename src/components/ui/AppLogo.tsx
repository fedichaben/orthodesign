 'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string;
  iconName?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/orthodesign-logo.png',
  iconName = 'SparklesIcon',
  size = 48,
  className = '',
  onClick,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div
      className={containerClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {src ? (
        <AppImage
          src={src}
          alt="OrthoDesign — Le confort prend votre forme"
          width={200}
          height={150}
          className="h-12 w-60 flex-shrink-0 object-contain"
          priority
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;
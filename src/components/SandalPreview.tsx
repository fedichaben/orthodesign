import React from 'react';
import { Config, getHex } from '@/data/catalog';

type View = 'main' | 'front' | 'side';

interface Props {
  config: Config;
  view?: View;
  className?: string;
}

const heelLift: Record<string, number> = { flat: 0, low: 10, wedge: 22 };
const soleThickness: Record<string, number> = { flat: 14, contoured: 18, rocker: 20, platform: 34 };
const outlineWidth: Record<string, number> = { slim: 0.88, regular: 1, wide: 1.14 };

export default function SandalPreview({ config, view = 'main', className = '' }: Props) {
  const primary = getHex(config.primaryColor);
  const secondary = getHex(config.secondaryColor);
  const detail = getHex(config.colorDetail || 'taupe');
  const thick = soleThickness[config.soleProfile] ?? 18;
  const lift = heelLift[config.heelProfile] ?? 0;
  const wScale = outlineWidth[config.outline] ?? 1;
  const toeRound = config.toeShape === 'round' ? 70 : config.toeShape === 'almond' ? 90 : 30;
  const opacity = config.finish === 'gloss' ? 1 : config.finish === 'satin' ? 0.94 : 0.88;
  const rockerLift = config.soleProfile === 'rocker' ? 16 : 0;

  const patternId = `pat-${config.pattern}-${view}`;

  const renderStrap = () => {
    const common = { fill: primary, opacity, stroke: detail, strokeWidth: 2 };
    switch (config.strapType) {
      case 'double':
        return (
          <>
            <path d="M150 128 Q215 78 285 128 L285 150 Q215 104 150 150 Z" {...common} />
            <path d="M300 136 Q355 100 410 140 L410 160 Q355 124 300 160 Z" {...common} />
          </>
        );
      case 'cross':
        return (
          <>
            <path d="M150 150 L290 100 L310 120 L170 172 Z" {...common} />
            <path d="M150 100 L170 82 L310 150 L290 172 Z" {...common} />
          </>
        );
      case 'backstrap':
        return (
          <>
            <path d="M170 128 Q235 82 305 128 L305 152 Q235 106 170 152 Z" {...common} />
            <path d="M80 160 Q60 120 100 100 L116 112 Q88 132 100 160 Z" {...common} />
          </>
        );
      default:
        return <path d="M150 128 Q235 70 330 128 L330 156 Q235 100 150 156 Z" {...common} />;
    }
  };

  return (
    <svg
      viewBox="0 0 500 300"
      role="img"
      aria-label="Aperçu schématique de la claquette configurée"
      className={className}
    >
      <defs>
        <pattern id={patternId} width="14" height="14" patternUnits="userSpaceOnUse">
          {config.pattern === 'lines' && <path d="M0 14 L14 0" stroke={detail} strokeWidth="1.5" />}
          {config.pattern === 'dots' && <circle cx="7" cy="7" r="2" fill={detail} />}
          {config.pattern === 'waves' && <path d="M0 7 Q3.5 2 7 7 T14 7" fill="none" stroke={detail} strokeWidth="1.5" />}
        </pattern>
        <linearGradient id={`sole-${view}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={getHex('taupe')} stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <ellipse cx="250" cy="268" rx="190" ry="14" fill="#282828" opacity="0.1" />

      <g transform={`translate(250 150) scale(${view === 'front' ? 0.82 : 1} ${wScale}) translate(-250 -150)`}>
        {/* outer sole */}
        <path
          d={`M60 ${200 - rockerLift} Q60 ${200 + thick} 100 ${200 + thick} L${400 - toeRound / 4} ${200 + thick} Q450 ${200 + thick} 450 ${186 - rockerLift} L450 ${180 - rockerLift} L60 ${180 - rockerLift} Z`}
          fill={`url(#sole-${view})`}
          stroke={detail}
          strokeWidth="2"
        />
        {/* heel lift */}
        {lift > 0 && (
          <path
            d={`M60 ${200} L170 ${200} L170 ${200 + thick + lift} Q60 ${200 + thick + lift} 60 ${200 + thick} Z`}
            fill={detail}
            opacity="0.35"
          />
        )}
        {/* insole */}
        <path
          d={`M72 ${182 - rockerLift} Q72 166 110 166 L${410 - toeRound / 5} 166 Q440 166 440 ${180 - rockerLift} L440 ${182 - rockerLift} Z`}
          fill={primary}
          opacity="0.55"
        />
        {renderStrap()}
        {config.pattern !== 'none' && (
          <rect x="140" y="80" width="200" height="90" fill={`url(#${patternId})`} opacity="0.6" />
        )}
        {config.initials && (
          <text x="250" y="150" textAnchor="middle" fontSize="16" fill={detail} fontFamily="serif" letterSpacing="3">
            {config.initials.toUpperCase().slice(0, 3)}
          </text>
        )}
      </g>
    </svg>
  );
}
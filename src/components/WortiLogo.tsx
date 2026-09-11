import React from 'react';

interface WortiLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'symbol' | 'badge';
  theme?: 'light' | 'dark' | 'white-box';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const WortiLogo: React.FC<WortiLogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'light',
  size = 'md'
}) => {
  // Size presets
  const sizeConfig = {
    sm: { symbolSize: 34, titleSize: 'text-lg', subSize: 'text-[9px]' },
    md: { symbolSize: 44, titleSize: 'text-2xl', subSize: 'text-[11px]' },
    lg: { symbolSize: 56, titleSize: 'text-3xl', subSize: 'text-xs' },
    xl: { symbolSize: 72, titleSize: 'text-4xl', subSize: 'text-sm' },
  }[size];

  const greenColor = '#009639';
  const forestColor = '#064E3B';
  const whiteColor = '#FFFFFF';

  // The official emblem: Protective hand cradling tree roots and topped with safety hardhat
  const Symbol = () => (
    <svg
      width={sizeConfig.symbolSize}
      height={sizeConfig.symbolSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Outer Protective Arc in Safety Green */}
      <path
        d="M 28 82 C 14 74 6 58 8 42 C 10 24 24 10 44 8 C 50 7 56 8 62 10"
        stroke={theme === 'dark' ? '#34d399' : greenColor}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Top Safety Hardhat (Capacete de Proteção) */}
      <g id="hardhat">
        {/* Hardhat Dome */}
        <path
          d="M 36 28 C 36 16 64 16 64 28 Z"
          fill={theme === 'dark' ? '#22c55e' : greenColor}
        />
        {/* Helmet Crown Ridge */}
        <path
          d="M 47 18 C 47 14 53 14 53 18 L 52 28 L 48 28 Z"
          fill={theme === 'dark' ? '#16a34a' : '#007a2e'}
        />
        {/* Helmet Brim */}
        <rect
          x="32"
          y="28"
          width="36"
          height="4.5"
          rx="2.2"
          fill={theme === 'dark' ? '#22c55e' : greenColor}
        />
      </g>

      {/* Tree Trunk and Spreading Roots (representing Health & Environment) */}
      <g id="roots">
        {/* Central stem */}
        <path
          d="M 48 33 L 48 48 C 48 52 46 56 42 62"
          stroke={theme === 'dark' ? '#22c55e' : greenColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 52 33 L 52 48 C 52 52 54 56 58 62"
          stroke={theme === 'dark' ? '#22c55e' : greenColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Radiating roots */}
        <path
          d="M 50 44 C 44 48 38 52 34 60"
          stroke={theme === 'dark' ? '#22c55e' : greenColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 50 44 C 56 48 62 52 66 60"
          stroke={theme === 'dark' ? '#22c55e' : greenColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 50 48 C 48 56 44 64 38 70"
          stroke={theme === 'dark' ? '#22c55e' : greenColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 50 48 C 52 56 56 64 62 70"
          stroke={theme === 'dark' ? '#22c55e' : greenColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Horizontal cross base */}
        <path
          d="M 38 46 Q 50 44 62 46"
          stroke={theme === 'dark' ? '#22c55e' : greenColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Protecting Hand at Bottom (Verde Floresta Sustentando a Vida e a Saúde) */}
      <g id="protecting-hand">
        {/* Palm and Forearm */}
        <path
          d="M 24 74 C 32 74 38 78 48 83 C 58 87 70 87 78 81 C 82 78 84 74 83 70 C 82 66 76 68 70 71 C 62 75 52 74 44 70 C 38 67 32 67 24 71 Z"
          fill={theme === 'dark' ? '#10b981' : forestColor}
        />
        {/* Thumb & fingers gentle curve */}
        <path
          d="M 68 71 C 74 67 80 66 84 70"
          stroke={theme === 'dark' ? '#34d399' : greenColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Symbol />
      </div>
    );
  }

  // White Box variant as in the PGRO poster bottom right
  if (theme === 'white-box') {
    return (
      <div className={`inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 ${className}`}>
        <Symbol />
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tight leading-none text-[#009639] lowercase font-sans">
            worti
          </span>
          <span className="text-[9px] font-bold tracking-wider text-[#064E3B] uppercase mt-0.5 whitespace-nowrap">
            Safety, Health & Environment
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Symbol />
      <div className="flex flex-col text-left">
        <span 
          className={`${sizeConfig.titleSize} font-black tracking-tight leading-none lowercase ${
            theme === 'dark' ? 'text-white' : 'text-[#009639]'
          }`}
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {/* Logo brand wordmark "worti" */}
          worti
        </span>
        <span 
          className={`${sizeConfig.subSize} font-bold tracking-wider uppercase mt-0.5 whitespace-nowrap ${
            theme === 'dark' ? 'text-emerald-400' : 'text-[#064E3B]'
          }`}
        >
          Safety, Health & Environment
        </span>
      </div>
    </div>
  );
};

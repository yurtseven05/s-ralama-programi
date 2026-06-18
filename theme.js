export const COLORS = {
  bgPrimary: '#1a1410',
  bgSecondary: '#231e18',
  bgTertiary: '#2e2820',
  bgCard: '#2a2318',
  bgCardHover: '#342c20',
  bgElevated: '#3a3228',

  textPrimary: '#e8d5b8',
  textSecondary: '#b8a080',
  textMuted: '#8a7560',
  textGold: '#d4a853',
  textCream: '#f0e4d0',

  accentPrimary: '#c49a3c',
  accentSecondary: '#a07830',
  accentWarm: '#d4a853',
  accentDeep: '#8b6914',
  accentGlow: 'rgba(196, 154, 60, 0.3)',
  accentGlowStrong: 'rgba(196, 154, 60, 0.5)',

  borderSubtle: 'rgba(196, 154, 60, 0.12)',
  borderActive: 'rgba(196, 154, 60, 0.35)',
  borderOrnament: 'rgba(196, 154, 60, 0.25)',

  danger: '#a93226',
  dangerBg: 'rgba(169, 50, 38, 0.2)',
  dangerText: '#e6b0aa',
};

export const SIZES = {
  radiusSm: 6,
  radiusMd: 10,
  radiusLg: 14,
  radiusXl: 20,
};

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 3,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  glow: {
    shadowColor: COLORS.accentPrimary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 6,
  },
};

export const FONTS = {
  serif: 'Georgia', // Can be loaded as a custom font later, e.g., 'Amiri' or 'Playfair'
  arabic: 'Georgia',
};

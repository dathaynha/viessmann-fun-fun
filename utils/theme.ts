export type ThemeType = 'christmas' | 'newYear';

export const getTheme = (): ThemeType => {
  const currentYear = new Date().getFullYear();
  return currentYear >= 2025 ? 'newYear' : 'christmas';
};

export const themeConfig = {
  christmas: {
    music: '/music/christmas-song.mp3',
    gradient: 'from-red-500 via-green-500 to-red-500',
    primaryColor: 'text-red-500',
    secondaryColor: 'text-green-400',
    emoji: '🎄',
    title: 'Merry Christmas from Our Team!',
  },
  newYear: {
    music: '/music/new-year-song.mp3',
    gradient: 'from-purple-500 via-gold-500 to-purple-500',
    primaryColor: 'text-purple-500',
    secondaryColor: 'text-gold-400',
    emoji: '🎉',
    title: 'Happy New Year from Our Team!',
  },
}; 
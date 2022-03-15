export const refactorDateString = (str) => {
  return str.replace('about ', '').concat(' ', 'ago');
};

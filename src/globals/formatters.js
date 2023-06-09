export const formatTitle = (title) =>
title.length > 30 ? title.slice(0, 30) + '...': title;

export const formatRating = (rating) => (rating * 10).toFixed(0) + '%';

export function formatOverview(overview, maxLength) {
  // check if 'overview' is falsy (empty/undefined) -> will cause error on splice
  if(!overview){
    return '';
  }
  else {
    return overview.slice(0, maxLength) + '...';;
  }
}

export function formatDate(date){
  if(!date){
    return 'No Date Available';
  }
  else {
    const dateParts = new Date(date);
    const month = dateParts.toLocaleString('default', {month: 'long'});
    const day = dateParts.toLocaleString('default', {day: 'numeric'});
    const year = dateParts.toLocaleString('default', {year: 'numeric'});
    return `${month} ${day}, ${year}`;
  }
};

export const formatTitle = (title) =>
title.length > 30 ? title.slice(0, 30) + '...': title;

export const formatRating = (rating) => (rating * 10) + '%';

export function formatOverview(overview) {
  // check if 'overview' is falsy (empty/undefined) -> will cause error on splice
  if(!overview){
    return '';
  }

  if (window.innerWidth < 768){
    return overview.slice(0, 150) + '...';
  }
  else {
    return overview;
  }
}

export function formatDate(date){
    const dateParts = new Date(date);
    const month = dateParts.toLocaleString('default', {month: 'long'});
    const day = dateParts.toLocaleString('default', {day: 'numeric'});
    const year = dateParts.toLocaleString('default', {year: 'numeric'});
    return `${month} ${day}, ${year}`;
  };

export const formatTitle = (title) =>
title.length > 30 ? title.slice(0, 30) + '...': title;

export const formatRating = (rating) => (rating * 10).toFixed(1) + '%';

export const formatOverview = (overview) =>
overview.length > 80 ? overview.slice(0, 80) + '...': overview;

export function formatDate(date){
    const dateParts = new Date(date);
    const month = dateParts.toLocaleString('default', {month: 'long'});
    const day = dateParts.toLocaleString('default', {day: 'numeric'});
    const year = dateParts.toLocaleString('default', {year: 'numeric'});
    return `${month} ${day}, ${year}`;
  };

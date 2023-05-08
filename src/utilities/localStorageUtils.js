export function setStorage (favMovie, addedMovies){

    if(Array.isArray(favMovie)){
        favMovie = JSON.stringify(favMovie);
    }
    localStorage.setItem(addedMovies, favMovie);
}

export function getStorage(addedMovies){
    let items = localStorage.getItem(addedMovies);

    if(items){
        items = JSON.parse(items);
        return items;
    }else {
        items = JSON.stringify([]);
        localStorage.setItem(addedMovies, items);
        return [];
    }
}

export function removeMovieFromStorage (index, addedMovies){
    let moviesToRemove = getStorage(addedMovies);
    moviesToRemove.splice(index, 1);
    moviesToRemove = JSON.stringify(moviesToRemove);
    setStorage(moviesToRemove,addedMovies);
    return -1;
}


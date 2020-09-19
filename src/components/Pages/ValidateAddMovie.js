export function shouldAddMovie({ Title, Year, Runtime, Genre, Language, Country, Poster, imdbRating, imdbVotes, imdbID, Type }) {
  if (Title && Year && Runtime && Genre && Language && Country && Poster && imdbRating && Number(imdbRating) > 0 && Number(imdbRating) <= 10 && imdbVotes && imdbID && Type) return true;
  else {
    alert("Please check all highlighted fields!")
    return false;
  }
}
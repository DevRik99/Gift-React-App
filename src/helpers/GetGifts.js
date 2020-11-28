export const getGifts = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ZsKy0kYfYxbDYmydyMg9dp33R2iO69wQ&q=${categoria}&limit=9&offset=0&rating=g`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};

export const mapper = data => {
  return data.map(({ backdrop_path: img, id, title }) => ({
    img,
    id,
    title,
    watched: false,
  }));
};

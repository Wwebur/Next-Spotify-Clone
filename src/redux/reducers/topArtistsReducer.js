const topArtistsReducer = (list = [], action) => {
  if (action.type === "GET_TOP_LIKED_ARTISTS") {
    return [...action.payload];
  }
  return list;
};
export default topArtistsReducer;

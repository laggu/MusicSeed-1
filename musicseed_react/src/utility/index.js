export const commentsSort = comments => {
  const newComments = comments;
  newComments.sort((a, b) => {
    if (a.time > b.time) {
      return -1;
    }
    if (a.time < b.time) {
      return 1;
    }
    return 0;
  });
  return newComments;
};
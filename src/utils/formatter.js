export const getDate = (timestamp) =>
  new Date(timestamp).toLocaleString().replace(",", "");
export const getTime = () => new Date().getTime();

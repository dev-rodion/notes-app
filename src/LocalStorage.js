export const setLocalNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const getLocalNotes = () => {
  const result = JSON.parse(localStorage.getItem("notes"));
  const defaultResult = [];

  // if (result === "undefined" || result === "null") return defaultResult;
  if (Array.isArray(result)) return result;

  return defaultResult;
};

export const deleteLocalNotes = () => {
  localStorage.setItem("notes", undefined);
};

export const checkLocalNotes = () => {
  return Boolean(localStorage.getItem("notes"));
};

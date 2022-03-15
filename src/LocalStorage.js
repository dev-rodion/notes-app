export const setLocalNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const getLocalNotes = () => {
  const result = localStorage.getItem("notes");
  const defaultResult = [];

  if (result === "undefined") return defaultResult;

  return JSON.parse(result);
};

export const deleteLocalNotes = () => {
  localStorage.setItem("notes", undefined);
};

export const checkLocalNotes = () => {
  return Boolean(localStorage.getItem("notes"));
};

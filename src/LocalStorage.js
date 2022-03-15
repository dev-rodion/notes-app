export const setLocalNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// useState([
//   {
//     id: "2fadb-23de-772b-bf68-06d11ed8368",
//     title: "Example Note",
//     body: "\n# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n\n*italic text* || **strong text** || ***strong italic text*** || ****black text**** || *****black italic text*****\n\n### List\n* list item 1\n* list item 2\n* list item 3\n\n> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n",
//     lastModified: 1647341886788,
//   },
// ]);

export const getLocalNotes = () => {
  const result = localStorage.getItem("notes");
  const defaultResult = [
    {
      id: "2fadb-23de-772b-bf68-06d11ed8368",
      title: "Example Note",
      body: "\n# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n\n*italic text* || **strong text** || ***strong italic text*** || ****black text**** || *****black italic text*****\n\n### List\n* list item 1\n* list item 2\n* list item 3\n\n> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n",
      lastModified: 1647341886788,
    },
  ];
  if (result === "undefined") return defaultResult;
  
  return JSON.parse(result);
};

export const deleteLocalNotes = () => {
  localStorage.setItem("notes", undefined);
};

export const checkLocalNotes = () => {
  return Boolean(localStorage.getItem("notes"));
};

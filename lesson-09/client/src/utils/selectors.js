/* eslint-disable-next-line */
export const getVisibleNotes = (notes, filter) =>
  notes.filter(note => note.text.includes(filter));


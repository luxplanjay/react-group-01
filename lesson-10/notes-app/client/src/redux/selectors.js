// import { createSelector } from 'reselect';

export const getContentFilter = state => state.filter.content;

export const getPriorityFilter = state => state.filter.priority;

export const getAllNotes = state => state.notes.data;

// export const getMemoizedVisibleNotes = createSelector(
//   [getAllNotes, getContentFilter, getPriorityFilter],
//   (notes, contentFilter, proprityFilter) =>
//     notes.filter(note => {
//       const contentMatch = note.text.toLowerCase().includes(contentFilter);

//       if (proprityFilter === 'all') return contentMatch;

//       const priorityMatch = note.priority === proprityFilter;
//       const match = priorityMatch && contentMatch;

//       return match;
//     }),
// );

export const getVisibleNotes = state => {
  const notes = getAllNotes(state);
  const contentFilter = getContentFilter(state);
  const proprityFilter = getPriorityFilter(state);

  return notes.filter(note => {
    const contentMatch = note.text.toLowerCase().includes(contentFilter);

    if (proprityFilter === 'all') return contentMatch;

    const priorityMatch = note.priority === proprityFilter;
    const match = priorityMatch && contentMatch;

    return match;
  });
};

export const isModalOpen = state => state.isModalOpen;

export const isLoading = state => state.notes.loading;

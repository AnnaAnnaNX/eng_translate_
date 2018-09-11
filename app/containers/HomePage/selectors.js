/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectUserText = () => createSelector(
  selectHome,
  (homeState) => homeState.get('text')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectUserText,
};

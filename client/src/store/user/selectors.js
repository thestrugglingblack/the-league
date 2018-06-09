import { createSelector } from 'reselect'

const userSelector = state => state.user;

const UserSelectors = {
  getIsLoading: createSelector(userSelector, state => state.loading),
  getIsAuthorized: createSelector(
    userSelector,
    state => state.isAuthorized
  )
};

export default UserSelectors;

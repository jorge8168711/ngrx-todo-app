import * as fromFilterActions from '../actions';

export type ValidFilters = 'all' | 'pending' | 'completed';

const initialState: ValidFilters = 'all';

export function filterReducer(
  state: ValidFilters = initialState,
  action: fromFilterActions.FilterActions): ValidFilters {
    switch (action.type) {
      case fromFilterActions.SET_FILTER:
        return action.filter;

      default:
        return state;
    }
}

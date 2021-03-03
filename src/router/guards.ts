import { Route } from 'vue-router';
import store from '../store';

async function userHasPermission(to: Route) {
  if (to.name === 'NotFound') {
    store.commit('updateError', 'Page not found.');
  }

  return true;
}

export async function beforeGuard(to: Route, _from: Route, next: Function) {
  // Set page as currently loading
  store.commit('updateLoading', true);

  // Check if the user has permission to view their intended route
  const hasPermission = await userHasPermission(to);

  if (!hasPermission) {
    store.commit(
      'updateError',
      'You do not have permission to view this page!',
    );
    next({ name: 'Error' });
  } else {
    next();
  }
}

export async function afterGuard() {
  // Set page as no long loading
  store.commit('updateLoading', false);
}

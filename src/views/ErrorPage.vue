<template>
  <div id="error-page">
    <h1>Sorry, something went wrong.</h1>
    <p>{{ errorMessage }}</p>
    <router-link to="Home">
      Go Home
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { State } from '../store/types';

export default Vue.extend({
  name: 'ErrorPage',
  computed: {
    ...mapState<State>({
      errorMessage: (state: State) => state.errorMessage,
    }),
  },
});
</script>

<style scoped>
#error-page {
  margin: 20px;
}
</style>

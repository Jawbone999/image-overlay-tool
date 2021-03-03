<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { State } from '@/store/types';

export default Vue.extend({
  name: 'App',
  components: {
  },
  computed: {
    ...mapState<State>({
      errorMessage: (state: State) => state.errorMessage,
      isLoading: (state: State) => state.isLoading,
    }),
  },
});
</script>

<style>
html, body {
  background-color: #F4F6F9;
}
</style>

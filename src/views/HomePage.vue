<template>
  <div id="home-page">
    <button @click="addImage()">
      Add Image
    </button>

    <input
      v-for="index in numImages"
      :key="index"
      type="file"
      @change="uploadImage($event, index)"
    >

    <img
      v-for="index in numImages"
      :key="index"
      :ref="`img-${index}`"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomePage',
  data() {
    return {
      images: [] as Array<string>,
      numImages: 1,
    };
  },
  methods: {
    uploadImage(event: string, index: number) {
      this.images[index] = event;
      // this.$refs[`img-${index}`].src = event;
    },
    addImage() {
      this.numImages++;
    },
  },
});
</script>

<style scoped>

</style>

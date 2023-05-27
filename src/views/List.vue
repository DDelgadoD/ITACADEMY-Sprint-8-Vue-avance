<template>
  <div class="list">
    <ListElement :title=ship.name :description=ship.model :url="ship.url.split('/')[5]" v-for="ship in ships"
      v-bind:key="ship.name" />
  </div>
</template>

<script setup>
import ListElement from "../components/ListElement.vue";
import {onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const ships = computed(() => {
  return store.state.ships;
});

window.onscroll = () => {
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
  if (bottomOfWindow) {
    store.dispatch("fetchShips");
  }
};

onMounted(() => {
  store.dispatch("fetchShips");
});


</script>

<style scoped>
.list {
  align-content: center;
}

a{
    color: rgba(109, 106, 106, 0.87);
    text-decoration: none;
}
</style>

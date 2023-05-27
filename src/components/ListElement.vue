<template>
    <router-link :to="{name:'Details', params:{id:url}}">
        <div class="boxlist">
            <p class="bold_upper">{{ title }}</p>
            <p>{{ description }}</p>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps(['title', 'description', 'url'])

</script>

<style scoped>
.boxlist {
    background-color: rgb(14, 13, 13);
    margin: 2% auto;
    padding: 0.5% 1%;
    text-align: start;
    width: 80%;
    max-width: calc(1280px*0.8);
}
</style>
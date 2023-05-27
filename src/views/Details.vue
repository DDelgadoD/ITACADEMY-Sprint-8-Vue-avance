<template>
    <h2 class="bold_upper wh"> {{ ship.name }}</h2>
    <img :src="img" />
    <div>
        <p><span class="bold_upper wh"> MODEL: </span> <span class="upper">{{ ship.model }}</span></p>
        <p><span class="bold_upper wh"> STARSHIP CLASS: </span> <span class="upper">{{ ship.starship_class }}</span></p>
        <p><span class="bold_upper wh"> manufacturer: </span> <span class="upper">{{ ship.manufacturer }}</span></p>
        <p><span class="bold_upper wh"> cost: </span> <span class="upper">{{ ship.cost_in_credits }} credits</span> </p>
    </div>
    <div class="dfx">
        <div class="mig">
            <p><span class="bold_upper wh"> crew: </span> <span class="upper">{{ ship.crew }}</span></p>
            <p><span class="bold_upper wh"> passenger capacity: </span> <span class="upper">{{ ship.passengers }}</span></p>
            <p><span class="bold_upper wh"> cargo capacity: </span> <span class="upper">{{ ship.cargo_capacity }}</span></p>
            <p><span class="bold_upper wh"> consumables: </span> <span class="upper">{{ ship.consumables }}</span> </p>
        </div>
        <div class="mig">
            <p><span class="bold_upper wh"> length: </span> <span class="upper">{{ ship.length }} meters</span></p>
            <p><span class="bold_upper wh"> maximun atmosphering speed: </span> <span class="upper">{{
                ship.max_atmosphering_speed }} km/h</span></p>
            <p><span class="bold_upper wh"> hyperdrive rating: </span> <span class="upper">{{ ship.hyperdrive_rating
            }}</span></p>
            <p><span class="bold_upper wh"> maximum speed in realspace: </span> <span class="upper">{{ ship.MGLT }}
                    MGLT</span> </p>
        </div>
    </div>
    <div>
        <p><span class="bold_upper wh"> PILOTS: </span> {{ ship.pilots }}</p>
    </div>
</template>
<script setup>
import { getJSON, base, baseIMG, endShips, format, formatIMG } from '../API';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const ship = ref({})
const img = ref(null)


onMounted(async () => {
    const id = route.params.id;
    var call = base + endShips + id + "/" + format
    ship.value = await getJSON(call)
    img.value = UrlExists(baseIMG + endShips + id + formatIMG)

})

const UrlExists = (url) => {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return url;
    else
        return "../src/assets/img/big-placeholder.jpg";
}

</script>
<style scoped>
.wh {
    color: white;
}

.upper {
    text-transform: uppercase;
    margin-left: 0.5%;
}

.dfx {
    display: flex;
    justify-content: space-around;
}

.mig {
    width: 30%;
    text-align: start;
}

img {
    border-bottom: solid 2px cyan;
}

@media only screen and (max-width: 800px) {
    img {
        width: 80%;
    }
}
</style>
<template>
    <div class="box">
        <div class="background">
            <div class="shape"> <img src="../assets/img/deathStar.png"></div>
        </div>
        <form @submit.prevent="onSubmit()">
            <h3>Benvingut</h3>
            <label for="email">Email</label>
            <input v-model="form.email.content" type="email" id="email" name="email" placeholder="Correu electrònic" />
            <label for="password">Contrasenya</label>
            <input v-model="form.password.content" type="password" id="password" name="password" placeholder="Contrasenya" />

            <button class="btn" id="submit" name="submit" type="submit">
                Iniciar sessió
            </button>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

const form = ref({
    email: {
        content: "",
        error: false,
    },
    password: {
        content: "",
        error: false,
    },
});

const onSubmit = async () => {
    console.log({"user": form.value.email.content, "password": form.value.password.content})
    const ret = await store.dispatch("checkUser", {"user": form.value.email.content, "password": form.value.password.content})
    console.log(ret)
    if (ret) {
        console.log("Endavant i qué la força t'acompanyi")
        router.push("/");
    }else{
        alert("Credencials incorrectes, Estàs fent un atac amb la Força (bruta)?")
        console.log("Credencials incorrectes, Estàs fent un atac amb la Força (bruta)?") 
    }
    
    
};

</script>
<style scoped>
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}

.background .shape {
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}

.shape {
    background: linear-gradient(rgb(3, 0, 0),
            #770303);
    left: -80px;
    top: 10%;
}

.shape img {
    width: 100%;
    margin: 0% 0%;
}

form {
    height: 520px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 65%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

form * {
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}

input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}

::placeholder {
    color: #e5e5e5;
}

button {
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

@media only screen and (max-width: 800px) {
    .background {
        width: 250px;
    }

    form {
        width: 300px;
    }

}
</style>
import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'
import { base, endShips, getJSON } from "../API";

const store = createStore({
    plugins: [new VuexPersistence().plugin],
    state: {
        next: "",
        ships: [],
        isAuth: false,
        user: "",
        users: {},
        userNumber: 0,
    },
    mutations: {
        SET_SHIPS(state, ships) {
            state.ships = ships;
        },
        SET_NEXT(state, next) {
            state.next = next;
        },
        SET_AUTH(state, auth) {
            state.auth = auth;
        },
        SET_USER(state, email) {
            state.user = email;
        },
        ADD_USER(state, user) {
            state.users[state.userNumber] = user
            state.userNumber += 1; 
        },
    },
    actions: {
        async fetchShips(state) {
            if (this.state.next != null) {
                const ships = await getJSON(base + endShips + this.state.next);
                state.commit(
                    "SET_SHIPS",
                    this.state.ships.concat(ships.results)
                );
                if (ships.next != null) {
                    state.commit("SET_NEXT", "/" + ships.next.split("/")[5]);
                } else {
                    state.commit("SET_NEXT", ships.next);
                }
            }
        },
        login(state, email) {
            state.commit("SET_AUTH", true);
            state.commit("SET_USER", email);
            console.log("Dia bon tu tinguis " + email);
        },
        logout(state) {
            state.commit("SET_AUTH", false);
            state.commit("SET_USER", "");
            console.log("Que la força sigui amb tu!");
        },
        signup(state, newUser) {
            let leDejamosRegistrarse = true;
            Object.values(this.state.users).map((el) => {
                if (el.user == newUser.user){
                    leDejamosRegistrarse = false;
                }
            })
            if ( leDejamosRegistrarse ){ 
            state.commit("ADD_USER", newUser);
            console.log(`Usuari amb codi galáctic ${newUser.user} ara ets part de la Rebelió!`);
            }
            return leDejamosRegistrarse;
        },
        checkUser(state, newUser) {
            console.log(this.state.users)
            let leDejamosPasar = false;
            Object.values(this.state.users).map((el) => {
                if (el.user == newUser.user && el.password == newUser.password) {
                    leDejamosPasar = true;
                    state.commit("SET_AUTH", true);
                    state.commit("SET_USER", email);
                    console.log("Dia bon tu tinguis " + newUser.user);
                }
            });
            
            return leDejamosPasar;
        },
    },
});

export default store;

<template>
    <div>
        <Navbar />
        <div class="container mt-3" id='home'>
            <h2 class="home__title">Home Page</h2>
            <p>
                Application created for peoples who want to keep a dictionary.
            </p>
            <h4>You can:</h4>
            <ul>
                <li><h5>add English words and translations</h5></li>
                <li><h5>mark words as known</h5></li>
            </ul>
            <div class="buttons" id="home__buttons">
                <button id="home__buttons-login" v-if="!authorizedUser.login">
                    <router-link to="/login">Login</router-link>
                </button>
                <button id="home__buttons-register" v-if="!authorizedUser.login">
                    <router-link to="/register">Register</router-link>
                </button>
                <button id="home__buttons-dictionary" v-if="authorizedUser.login">
                    <router-link to="/words">Go to Dictionary</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        Navbar,
    },
    computed: mapGetters(["authorizedUser"]),
};
</script>

<style scoped>
li {
    list-style: none;
}
.buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.buttons > button {
    margin: 5px;
}
</style>

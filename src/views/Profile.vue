<template>
    <div>
        <Navbar />
        <div class="container mt-3">
            <h3>Profile of</h3>
            <h1>
                {{authorizedUser.login}}
            </h1>
            <div class='buttons'>
                <button v-if="!authorizedUser.login">
                    <router-link to="/login">Login</router-link>
                </button>
                <button v-if="!authorizedUser.login">
                    <router-link to="/register">Register</router-link>
                </button>
            </div>
            <button v-if="authorizedUser.login">
                <router-link to="/words">Go to Dictionary</router-link>
            </button>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters, mapActions } from "vuex";
import router from "@/router"

export default {
    components: {
        Navbar,
    },
    computed: mapGetters(["authorizedUser"]),
    mounted: function() {
        if (!this.authorizedUser.login) {
            router.push("/login")
        }
    }
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
    margin: 5px
}
</style>

<template>
    <div>
        <Navbar />
        <div class="container mt-3" id="profile">
            <h3>Profile of</h3>
            <h1 id="profile__login">
                {{ authorizedUser.login }}
            </h1>
            <div class="buttons" id="profile__buttons">
                <button id="profile__buttons-dictionary" v-if="authorizedUser.login">
                    <router-link to="/words">Go to Dictionary</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters, mapActions } from "vuex";
import router from "@/router";

export default {
    components: {
        Navbar,
    },
    computed: mapGetters(["authorizedUser"]),
    mounted: function() {
        if (!this.authorizedUser.login) {
            router.push("/login");
        }
    },
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

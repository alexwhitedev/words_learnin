<template>
    <div>
        <Navbar />
        <div class="container mt-3">
            <h3>Sign in</h3>
            <Form
                v-if="!authorizedUser.login"
                @form-data="loginUser"
                v-bind:btn="'Login'"
            />
            <router-link v-if="authorizedUser.login" to="/Words"
                >Learn Words</router-link
            >
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import { mapGetters, mapActions } from "vuex";
import router from "@/router"

export default {
    components: {
        Navbar,
        Form,
    },
    computed: mapGetters(["authorizedUser"]),
    methods: mapActions(["loginUser"]),
    mounted: function() {
        if (this.authorizedUser.login) {
            router.push("/words")
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>

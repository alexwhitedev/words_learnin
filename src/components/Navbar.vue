<template>
    <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand href="#" class='custom'>Dictionary</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-link v-if="authorizedUser.login" to="/" class="nav-link">Home</b-link>
                <b-link v-if="authorizedUser.login" to="/words" class="nav-link">Words</b-link>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em v-if="authorizedUser.login">{{ authorizedUser.login }}</em>
                        <em v-if="!authorizedUser.login">Sign In/Up</em>
                    </template>
                    <b-link v-if="authorizedUser.login" class="dropdown-item" to="/profile">Profile</b-link>
                    <b-link v-if="authorizedUser.login" class="dropdown-item" to="/login" v-on:click="unloginUser">Sign Out</b-link>
                    <b-link v-if="!authorizedUser.login" class="dropdown-item" to="/login">Sign In</b-link>
                    <b-link v-if="!authorizedUser.login" class="dropdown-item" to="/register">Sign Up</b-link>
                    
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: mapGetters(["authorizedUser"]),
    methods: mapActions([
        "unloginUser",
    ]),
}
</script>

<style scoped>
.dropdown-item {
    text-align: center;
}
.custom {
    padding-left: 3%;
}
</style>

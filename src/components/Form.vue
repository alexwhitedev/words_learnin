<template>
    <div class="container mt-3">
        <form @submit.prevent="onSubmit">
            <input
                type="text"
                name="login"
                placeholder="login"
                v-model="login"
            />
            <input
                type="text"
                name="password"
                placeholder="password"
                v-model="password"
            />
            <button type="submit">{{btn}}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        btn: {
            type: String
        }
    },
    methods: {
        onSubmit() {
            if (this.login.trim() && this.password.trim()) {
                const login_data = {
                    login: this.login,
                    password: this.password,
                };

                this.$emit("form-data", login_data);
            }
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
</style>

<template>
    <div class="container mt-3" id="form">
        <form @submit.prevent="onSubmit" id='form__form'>
            <input id="form__login"
                type="text"
                name="login"
                placeholder="login"
                v-model="login"
            />
            <input id="form__password"
                type="text"
                name="password"
                placeholder="password"
                v-model="password"
            />
            <button id="form__button" type="submit">{{btn}}</button>
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

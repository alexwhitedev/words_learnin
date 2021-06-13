<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <input
                type="text"
                name="eng"
                id=""
                placeholder="eng"
                v-model="eng"
            />
            <input
                type="text"
                name="ukr"
                id=""
                placeholder="ukr"
                v-model="ukr"
            />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eng: "",
            ukr: "",
        };
    },
    methods: {
        onSubmit() {
            if (this.eng.trim() && this.ukr.trim()) {
                const newWord = {
                    id: Date.now(),
                    title: this.eng,
                    eng: this.eng,
                    ukr: this.ukr,
                    completed: false,
                };

                this.$emit("add-word", newWord);
                this.eng = "";
                this.ukr = "";
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
}
</style>

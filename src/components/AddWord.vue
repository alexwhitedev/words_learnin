<template>
    <div class="container" id="addword">
        <form @submit.prevent="onSubmit" id='addword__form'>
            <input id='addword__eng'
                type="text"
                name="eng"
                placeholder="eng"
                v-model="eng"
            />
            <input id='addword__ukr'
                type="text"
                name="ukr"
                placeholder="ukr"
                v-model="ukr"
            />
            <button id='addword__button' type="submit">Add</button>
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

<template>
    <li class="p-2 mb-2" v-bind:class="{ done: word.completed }">
        <div v-on:click="word.completed = !word.completed">
            {{ word.title | uppercase }}
        </div>
        <div>
            <button v-on:click="translateWord">translate</button>
            <button
                class="button_remove"
                v-on:click="$emit('removeWord', word.id)"
            >
                &times;
            </button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        word: {
            type: Object,
            requiered: true,
        },
    },
    filters: {
        uppercase(value) {
            return value.toUpperCase();
        },
    },
    methods: {
        translateWord() {
            if (this.word.title == this.word.eng) {
                this.word.title = this.word.ukr;
            } else {
                this.word.title = this.word.eng;
            }
        },
    },
};
</script>

<style scoped>
li {
    border: 1px solid rgb(92, 74, 74);
    display: flex;
    justify-content: space-between;
    min-width: 50%;
    align-items: center;
    background-color: rgb(228, 225, 217);
}

.done {
    text-decoration: line-through;
    background-color: rgb(215, 236, 220);
}

.button_remove {
    background-color: rgb(158, 37, 37);
}
</style>

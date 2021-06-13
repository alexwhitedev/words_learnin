<template>
    <div class="word">
        <ul class='mt-2'>
            <WordsItem 
            v-for="word of words" 
            v-bind:word="word" 
            @removeWord="removeWord" />
        </ul>
    </div>
</template>

<script>
import WordsItem from "@/components/WordsItem";
export default {
    props: ["words"],
    name: "wordsList",
    components: {
        WordsItem,
    },
    methods: {
        removeWord(id) {
            this.$emit('remove-word', id)
        }
    }
};
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-block: 0;
        margin-inline: 0;
        padding-inline: 0;
    }

    .word {
        width: 100%;
    }
</style>

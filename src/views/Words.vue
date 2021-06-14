<template>
    <div>
        <Navbar />
        <div class="container mt-3" id='words'>
            <div id="info__dash" class="info_dash d-flex flex-row justify-content-between">
                <div id="info__dash-total" class="words_stat d-flex flex-row">
                    <h3 class="words_stat-item m-3">Words total:</h3>
                    <h3 class="words_stat-item m-3">{{ wordsCount }}</h3>
                </div>
                <div id="info__dash-learned" class="words_stat d-flex flex-row">
                    <h3 class="words_stat-item m-3">Words learned:</h3>
                    <h3 class="words_stat-item m-3">{{ wordsCountLearned }}</h3>
                </div>
            </div>
            <div><AddWord @add-word="addWord" /></div>
            <WordsList
                v-if="userWords.length"
                v-bind:words="userWords"
                @remove-word="removeWord"
            />

            <p v-else>No words!</p>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import WordsList from "@/components/WordsList";
import AddWord from "@/components/AddWord";
import { mapGetters, mapActions } from "vuex";
import router from "@/router"

export default {
    components: {
        Navbar,
        WordsList,
        AddWord,
    },
    methods: mapActions([
        "addWord", 
        "removeWord"]),
    computed: mapGetters([
        "userWords",
        "wordsCount",
        "wordsCountLearned",
        "authorizedUser",
    ]),
    mounted: function() {
        if (!this.authorizedUser.login) {
            router.push("/login")
        }
    }
};
</script>

<style scoped>
/* div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: auto;
} */
/* .words_stat {
    display: flex;
    justify-content: space-around;
    align-items: center;
} */
</style>

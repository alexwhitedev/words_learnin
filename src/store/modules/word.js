import router from '../../router';

export default {
    state: {
        words: [
            {
                id: 1,
                user: "admin",
                title: "morning",
                eng: "morning",
                ukr: "ранок",
                completed: false,
            },
            {
                id: 2,
                user: "admin",
                title: "evening",
                eng: "evening",
                ukr: "вечір",
                completed: false,
            },
            {
                id: 3,
                user: "someuser",
                title: "afternoon",
                eng: "afternoon",
                ukr: "обід",
                completed: false,
            },
        ],
        users: [
            {
                id: 1,
                // Login and pass have to be checked by server, but plugged now
                login: "admin",
                password: "admin",
                //
                authorized: true,
            },
            {
                id: 1,
                // Login and pass have to be checked by server, but plugged now
                login: "someuser",
                password: "someuser",
                //
                authorized: false,
            },
        ],
    },
    getters: {
        userWords(state, getters) {
            let user = getters.authorizedUser;
            if (user) {
                return state.words.filter((word) => word.user == user.login);
            }
            return {};
            // return state.words
        },
        wordsCount(state, getters) {
            let words = getters.userWords;
            return words.length;
        },
        wordsCountLearned(state, getters) {
            let words = getters.userWords;
            return words.filter((word) => word.completed).length;
        },
        authorizedUser(state) {
            for (let user of state.users) {
                if (user.authorized) {
                    return user;
                }
            }
            return {};
        },
    },
    mutations: {
        addWord(state, new_word) {
            let user_login = "";
            for (let user of state.users) {
                if (user.authorized) {
                    user_login = user.login;
                }
            }
            if (user_login) {
                new_word["user"] = user_login;
                state.words.push(new_word);
            }
        },
        removeWord(state, word_id) {
            state.words = state.words.filter((word) => word.id != word_id);
            // state.words = state.words.filter(word => word.id != to_remove_word.id)
        },
        addUser(state, new_user) {
            console.log(new_user)

            if (new_user.login.length && new_user.password.length) {
                for (let user of state.users) {
                    user.authorized = false;
                }
                new_user.authorized = true;
                new_user.id = Date.now()
                state.users.push(new_user);
                router.push("/words")
            }
            
        },
        loginUser(state, login_data) {
            for (let user of state.users) {
                if (
                    (user.login == login_data.login) &
                    (user.password == login_data.password)
                ) {
                    user.authorized = true;
                    router.push("/words")
                }
            }
        },
        unloginUser(state, user) {
            for (let user of state.users) {
                user.authorized = false;
                router.push("/login")
            }
        },
    },
    actions: {
        registerUser(context, new_user) {
            context.commit("addUser", new_user);
        },
        loginUser(context, login_data) {
            context.commit("loginUser", login_data);
        },
        addWord(context, new_word) {
            context.commit("addWord", new_word);
        },
        removeWord(context, word_id) {
            context.commit("removeWord", word_id);
        },
        unloginUser(context, user) {
            context.commit("unloginUser", user);
        },
    },
};

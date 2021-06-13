export default {
    state: {
        users: [
            {
                id: 1,
                name: "Alex",
                // Login and pass have to be checked by server, but plugged now
                login: "admin",
                password: "admin",
                // 
                authorized: true
            },
            {
                id: 1,
                name: "Some-user",
                // Login and pass have to be checked by server, but plugged now
                login: "someuser",
                password: "someuser",
                // 
                authorized: true
            },
        ],
    },
    getters: {
        authorizedUser(state) {
            for (user of state.users) {
                if (user.authorized) {
                    return state.user
                }
            }
            return {}
        },
    },
    mutations: {
        addUsers(state, new_user) {
            for (user of state.users) {
                user.authorized = false
            }
            new_user.authorized = true
            state.users.push(new_user)
        },
        loginUser(state, login_data){
            for (user of state.users) {
                if (user.login == login_data.login & user.password == login_data.password) {
                    user.authorized = true
                }
            }
        }
    },
    actions: {
        add(context, new_user) {
            context.commit('addUser', new_user)
        },
        login(context, login_data) {
            context.commit('loginUser', login_data)
        }
    }, 
};

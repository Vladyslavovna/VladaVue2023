<template>
    <div>
        <div class="container">
            <button @click="showBlock">Додати користувача</button>

            <form v-show="show" class="form">
                <h1>Новий користувач</h1>

                <div class="filter-inputs">
                    <label>
                        Ім'я
                        <input v-model="userName" type="text"  required="required">
                    </label>
                    <label>
                        Поштова скринька
                        <input v-model="userMail" type="email"  required="required">
                    </label>
                </div>
                <button class="add" type="submit" @click="addUserToList">Додати</button>
                <button class="cancel" @click="hideBlock">Скасувати</button>


            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "UsersForm",
    data() {
        return {
            show: false,
            userName: null,
            userMail: null
        }
    },

    methods: {
        ...mapActions(['addUser']),
        showBlock() {
            this.show = true
        },
        hideBlock() {
            this.show = false
        },
        addUserToList() {
            if (!this.userName || !this.userMail) return {}
            this.addUser({
                name: this.userName,
                email: this.userMail,
            })
            this.userName = null
            this.userMail = null
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    background-color: darksalmon;
    color: white;
    font-weight: bold;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.cancel {
    background-color: red;
}

.add {
    background-color: darkcyan;
}

.filter-inputs {
    display: flex;
    justify-content: space-between;
}

.form {
    display: flex;
    flex-direction: column;
    width: 350px;
}
</style>
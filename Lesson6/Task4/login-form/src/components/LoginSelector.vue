<template>
    <div>
        <label>
            User Name
            <input type="text" v-model="userValue" ref="userLogin" style="background-color: red;">
        </label>
        <label>
            User Age
            <input type="text" v-model="userNamber" ref="userNamber" :key="updateKey">
        </label>
    </div>
</template>

<script>
export default {

    name: 'LoginSelector',
    props: {
        login: { type: String },
        loginModifiers: { default: () => ({}) },
        userAge: { type: String },
        userAgeModifiers: { default: () => ({}) }
    },

    data() {
        return {
            updateKey: 0
        }
    },

    computed: {
        userValue: {
            get() {
                return this.login
            },
            set(val) {
                if (this.loginModifiers.uppercase) {
                    val = this.loginNormilize(val)
                    if (val.length > 0) this.$refs.userLogin.style.backgroundColor = 'green'
                    else this.$refs.userLogin.style.backgroundColor = 'red'
                }
                this.$emit('update:login', val)
            }
        },
        userNamber: {
            get() {
                return this.userAge
            },
            set(val) {


                if (this.userAgeModifiers.numbersOnly) {
                    val = val.replace(/\D/g, '')
                    this.$nextTick(() => {
                        this.updateKey++
                        this.$nextTick(() => {
                            this.$refs.userNamber.focus()
                        })
                    })
                }
                if (this.userAgeModifiers.twoNumbers) {
                    if (val.length > 2) {
                        val = val.slice(0, 2)
                    }
                }
                //не можу зрозумiти чому не оновлюється колiр :(
                if (this.userAgeModifiers.setColor) {
                    if (parseInt(val) > 18) this.$refs.userNamber.style.backgroundColor = 'green'
                    else this.$refs.userNamber.style.backgroundColor = 'red'
                }
                this.$emit('update:userAge', val)
            },
        },
    },

    methods: {
        loginNormilize(login) {
            if (!login) return ''
            else return login[0].toUpperCase() + (login.slice(1)).toLowerCase()
        },
    },
}


</script>

<style lang="scss" scoped></style>
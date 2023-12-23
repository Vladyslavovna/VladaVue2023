<template>
    <div>
        <label>
            {{ title }}
            <input type="text" v-model="userEmail" ref="emailInput">
        </label>
    </div>
</template>

<script>
export default {
    name: "EmailInput",
    props: {
        email: { type: String },
        emailModifiers: { default: () => ({}) }
    },
    computed: {
        userEmail: {
            get() {
                return this.email
            },
            set(val) {
                if (val && this.emailModifiers.check) {
                    val = this.addDomain(val)
                    if (val.includes('@inv.mn.edu')) {
                        this.$refs.emailInput.style.backgroundColor = 'green'
                    } else {
                        this.$refs.emailInput.style.backgroundColor = 'red'
                    }
                }
                this.$emit('update:email', val)
            },
        }
    },

    methods: {
        addDomain(email) {
            return email.replace(/(.*)@/, '$1@' + 'inv.mn.edu')
        }
    }
}
</script>

<style lang="scss" scoped></style>
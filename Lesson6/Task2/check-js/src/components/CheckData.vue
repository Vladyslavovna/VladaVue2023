<template>
    <div>
        <label>
            {{ title }}
            <input type="text" v-model="userData" ref="iputStyle">
        </label>
    </div>
</template>

<script>
export default {
    name: 'CheckData',
    props: {
        title: {
            type: String,
            default: '',
        },
        link: {
            type: String,
        },
        linkModifiers: { default: () => ({}) },
    },
    computed: {
        userData: {
            get() {
                return this.link
            },
            set(val) {
                if (this.linkModifiers.checkPath) {
                    if (!this.checkLink(val)) {
                        this.$refs.iputStyle.style.backgroundColor = 'red'
                    } else {
                        this.$refs.iputStyle.style.backgroundColor = 'green'
                    }
                }
                this.$emit('update:userData', val)
            }
        }
    },

    methods: {
        checkLink(val) {
            return /^([a-z0-9_-]+\.js)$/.test(val)
        }
    },

}
</script>

<style lang="scss" scoped></style>
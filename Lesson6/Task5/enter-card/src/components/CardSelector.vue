<template>
    <div>
        <label>
            Card number
            <input type="text" v-model="cardData" ref="cardData" :key="updateKey">
        </label>

        <label>
            Expire date
            <input type="text" v-model="expireData" ref="expireData" :key="updateData">
        </label>
        <label>
            Secure code
            <input type="text" v-model="codeData" ref="codeData" :key="updateCode">
        </label>
    </div>
</template>

<script>
export default {
    name: "CardSelector",

    props: {
        card: { type: String },
        cardModifiers: { default: () => ({}) },
        cardDate: { type: String },
        cardDateModifiers: { default: () => ({}) },
        cardCode: { type: String },
        cardCodeModifiers: { default: () => ({}) },
    },
    data() {
        return {
            updateKey: 0,
            updateData: 0,
            updateCode: 0
        }
    },
    computed: {
        cardData: {
            get() {
                return this.card
            },
            set(val) {
                if (this.cardModifiers.onlyNumbers) {
                    val = val.replace(/\D/g, '')
                    this.$nextTick(() => {
                        this.updateKey++
                        this.$nextTick(() => {
                            this.$refs.cardData.focus()
                        })
                    })
                }
                if (this.cardModifiers.seperateNumbers) {
                    val = val.replace(/(\d{3}(?=.+))/g, '$1 ')
                }
                if (this.cardModifiers.only16Numbers) {
                    val = val.slice(0, 16)
                }
                this.$emit("update:card", val)
            }
        },
        expireData: {
            get() {
                return this.cardDate
            },
            set(val) {
                if (this.cardDateModifiers.digitsOnly) {
                    val = val.replace(/\D/g, '')
                    this.$nextTick(() => {
                        this.updateData++
                        this.$nextTick(() => {
                            this.$refs.expireData.focus()
                        })
                    })
                }
                if (this.cardDateModifiers.seperateSymbols) {
                    val = val.replace(/(\d{2})(\d{2})/g, '$1/$2')
                }

                if (this.cardDateModifiers.only4Numbers) {
                    val = val.slice(0, 5)
                }

                this.$emit("update:cardDate", val)
            }
        },
        codeData: {
            get() {
                return this.cardCode
            },
            set(val) {
                if (this.cardCodeModifiers.noSymbols) {
                    val = val.replace(/\D/g, '')
                    this.$nextTick(() => {
                        this.updateData++
                        this.$nextTick(() => {
                            this.$refs.codeData.focus()
                        })
                    })
                }

                if (this.cardCodeModifiers.only3Numbers) {
                    val = val.slice(0, 3)
                }
                this.$emit("update:cardCode", val)
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>
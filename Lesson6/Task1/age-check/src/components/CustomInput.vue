<template>
    <div>
        <label>
            {{ title }}
            <input type="number" v-model="ageValue" :disabled="isDisabled" ref="ageInput">
        </label>
        <div v-if="isDisabled">
            Вiк не може бути {{ this.age }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        title: {
            type: String,
            default: '',
        },
        age: { type: Number, default: 0 },
        ageModifiers: { default: () => ({}) },
    },
    data() {
        return {
            isDisabled: false
        }
    },
    computed: {
        ageValue: {
            get() {
                return this.age
            },
            set(value) {
                if (value <= 10 && this.ageModifiers.setColor) this.$refs.ageInput.style.backgroundColor = 'green'
                else if (value <= 21 && this.ageModifiers.setColor) this.$refs.ageInput.style.backgroundColor = 'yellow'
                else this.$refs.ageInput.style.backgroundColor = 'orange'


                this.$emit('update:age', value)

                console.log(this.age);
            }
        }
    },
    watch: {
        age() {
            this.isDisabled = this.age > 150
        }
    },
}
</script>

<style lang="scss" scoped></style>
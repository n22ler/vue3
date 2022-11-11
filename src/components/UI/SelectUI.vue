<template>
    <div class="">
        <select v-model="localModelValue" @change="$emit('update:modelValue', handleInputChange)">
            <option
            v-for="option in options"
            :key="option.id"
            :value="option.id"
            >
                {{option.name}}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import SelectUI from "@/types/SelectUI"
import { defineComponent } from "@vue/runtime-core"
import { PropType } from "vue"

export default defineComponent({
        name: 'SelectUI',
        props:{
            modelValue:[String,Number],
            options:{
                type: Array as PropType<SelectUI[]>
            },
        },
        setup:()=>{
        const handleInputChange = (event: Event) => 
            (event.target as HTMLInputElement).value

        return { handleInputChange }
        },
        computed: {
            localModelValue: {
                get() {
                    return this.modelValue
                },
                set(newValue:string|number) {
                    this.$emit('update:modelValue', newValue)
                },
            },
        }, 
})
</script>

<style scoped>
select {
    width: 100%;
    border: 1px solid #ECECEC;
    border-radius: 50px;
    padding: 16px 32px;
    margin-bottom: 15px;
    background: white;
}
select::-ms-expand{
    margin-right: 10px;
}

</style>
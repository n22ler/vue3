<template>
    <input :value='modelValue' @input="$emit('update:modelValue', handleInputChange)" class="input" type="text">
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name:'InputUI',
    props:{
           modelValue: [String,Number]
    },
    setup:()=>{
        const handleInputChange = (event: Event) => 
            (event.target as HTMLInputElement).value

        return { handleInputChange }
    }, 
})
</script>

<style scoped>
.input{
    width: 100%;
    border: 1px solid #ECECEC;
    border-radius: 50px;
    padding: 16px 32px;
    margin-bottom: 15px;
  }
</style>
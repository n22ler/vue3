<template>
    <button class="btn" >
        <slot></slot>
    </button>
</template>
    
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name:'ButtonUI',
    data(){
        return{
            isClicked:false
        }
                
    },
})
</script>
    
<style scoped>
.btn{
    background-color: #0079C2;
    color: white;
    padding: 16px 32px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    width: fit-content;
    height: 52px;
    font-size: 16px;
    
}
</style>
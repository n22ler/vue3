<template>
    <div class="wrapper">
        <div class="card__container" :style="{'min-width':(430*carousel_data.length)+'px'}">
            <CarouselItem
                v-for="card in slideArray"
                :key="card.id"
                :card_fields="card"
                :isCurrent = currentSlideIndex
            />
        </div>
    </div>
    <div class="btn__group">
        <ButtonUI @click="prevSlide">Назад</ButtonUI>
        <ButtonUI @click="nextSlide">Вперед</ButtonUI>
    </div>
</template>

<script lang="ts">
import Card from '@/types/Card';
import CarouselItem from './CarouselItem.vue';
import { defineComponent, PropType } from 'vue'
import ButtonUI from '@/components/UI/ButtonUI.vue';

export default defineComponent({
    setup () {

        return {}
    },
    data(){
        return{
            currentSlideIndex: 2,
            slideArray:this.carousel_data,
        }
    },
    components:{
        CarouselItem,
        ButtonUI
    },
    props:{
        carousel_data:{
            type: Array as PropType<Card[]>,
            required: true
        },
        interval:{
            type: Number,
            default: 0
        }
    },
    methods:{
        prevSlide():void{ //сабж
            const firstItem = this.slideArray.pop()
                this.slideArray.unshift(firstItem as Card)
            if(this.currentSlideIndex==1){
                this.currentSlideIndex=8
            } else{
                this.currentSlideIndex--
            }
        },
        nextSlide():void{ //сабж
            const firstItem = this.slideArray.shift()
            this.slideArray.push(firstItem as Card)
            if(this.currentSlideIndex==8){
                this.currentSlideIndex=1
            } else{
                this.currentSlideIndex++
            }

        },
    },
    mounted() {
        if(this.interval>0){
            setInterval(()=>{this.nextSlide()}, this.interval ) //устанавливаем интервал автопрокрутки, если прокинем пропс
        }
    }
})
</script>

<style scoped>
.wrapper{
    max-width: 1280px;
    overflow: hidden;
    margin: auto;
}
.card__container{
    display: flex;
    flex-shrink: 0;
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    margin: auto;
    align-items: stretch;
    position: relative;
    padding-bottom: 50px;
    transition: ease 0.5s;
}
.btn__group{
    margin: auto;
    max-width: fit-content;
}
.btn__group>button:nth-child(1){
    margin-right: 15px;
}
</style>
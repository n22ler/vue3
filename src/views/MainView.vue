<template >
    <div class="main">
        <div class="panel">
        </div>
        <div class="panel__fake"></div>
        <CarouselElem
            :carousel_data="carouselItems"
        />
    </div>
</template>
<script lang="ts">
import Card from '@/types/Card';
import CarouselElem from '@/components/Elements/Carousel/CarouselElem.vue'
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const carouselItems = ref<Card[]>([
                {id:1, title:'Заголовок 1', field1:'Поле 1.1', field2:'Поле 1.2', field3:'Поле 1.3', text_btn:'Нажми 1'},
                {id:2, title:'Заголовок 2', field1:'Поле 2.1', field2:'Поле 2.2', field3:'Поле 2.3', text_btn:'Нажми 2'},
                {id:3, title:'Заголовок 3', field1:'Поле 3.1', field2:'Поле 3.2', field3:'Поле 3.3', text_btn:'Нажми 3'},
                {id:4, title:'Заголовок 4', field1:'Поле 4.1', field2:'Поле 4.2', field3:'Поле 4.3', text_btn:'Нажми 4'},
                {id:5, title:'Заголовок 5', field1:'Поле 5.1', field2:'Поле 5.2', field3:'Поле 5.3', text_btn:'Нажми 5'},
                {id:6, title:'Заголовок 6', field1:'Поле 6.1', field2:'Поле 6.2', field3:'Поле 6.3', text_btn:'Нажми 6'},
                {id:7, title:'Заголовок 7', field1:'Поле 7.1', field2:'Поле 7.2', field3:'Поле 7.3', text_btn:'Нажми 7'},
                {id:8, title:'Заголовок 8', field1:'Поле 8.1', field2:'Поле 8.2', field3:'Поле 8.3', text_btn:'Нажми 8'}
        ])

        return {carouselItems}
    },
    name: 'MainView',
    components: { CarouselElem },
    data(){
        return{

        }
    }
})

</script>
<style scoped>
.panel{
    max-width: 1920px;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.138) -14.07%, rgba(0, 0, 0, 0) 41.75%), url('@/static/images/background-panel.png');
    min-height: 360px;
    position: absolute;
    left: 50%;
    right: 50%;
    transform:translate(-50%); 
}
.panel__fake{
    min-height: 180px;
}

.main{
    position: relative;
}
@media (max-width: 1200px) { 
.card__container{
    flex-direction: column;
    justify-content: space-between;
}
.card__card{
    margin: auto;
    margin-bottom: 20px;
}

}

</style>
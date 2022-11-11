<template>
        <CarouselCard :card_fields="card_fields" v-if="isCurrent==card_fields.id">
            <template v-slot:btn>
                <ButtonUI @click="$router.push('/deals')" >
                        {{card_fields.text_btn}}
                        <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H33M33 7L26.5128 1M33 7L26.5128 13" stroke="white" stroke-linecap="round"/>
                        </svg>
                </ButtonUI>
            </template>
        </CarouselCard>
        <CarouselCard :card_fields="card_fields" v-else :style="{'transform':'scale(0.9)'}">
            <template v-slot:btn>
                <ButtonUI @click="$router.push('/deals')" >
                        {{card_fields.text_btn}}
                        <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H33M33 7L26.5128 1M33 7L26.5128 13" stroke="white" stroke-linecap="round"/>
                        </svg>
                </ButtonUI>
            </template>
        </CarouselCard>
</template>

<script lang="ts">
import Card from '@/types/Card';
import { defineComponent, PropType } from 'vue'
import CarouselCard from '../Cards/CarouselCard.vue';

export default defineComponent({
    setup() {
        return {};
    },
    props: {
        card_fields: {
            type: Object as PropType<Card>,
            default: () => ({})
        },
        isCurrent: {
            type: Number,
            default: 2
        }
    },
    components: { CarouselCard }
})
</script>

<style scoped>
</style>
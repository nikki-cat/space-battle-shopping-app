<template>
    <ul class="search-results no-list-style">
        <li v-for="(starship, index) in props.starships" :key="index">
            <StarshipCard :name="starship.name" :model="starship.model" :crew-size="starship.crew"
                :starship-data="starship" />
        </li>
    </ul>
</template>

<script setup lang="ts" scoped>
import type { SwapiStarShip } from '@/services/starwarsResources/types';
import type { PropType } from 'vue';
import StarshipCard from './StarshipCard.vue';

const props = defineProps({
    starships: Array as PropType<SwapiStarShip[]>
})


</script>
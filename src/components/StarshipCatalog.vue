<template>
    <ul class="search-results no-list-style ">
        <TransitionGroup>
            <li v-for="starship in starships" :key="starship.name">
                <StarshipCardProduct :name="starship.name" :model="starship.model" :crew-size="starship.crew"
                    :starship-data="starship" />
            </li>
        </TransitionGroup>
    </ul>
</template>

<script setup lang="ts" scoped>
import type { PropType } from 'vue';
import type { SwapiStarShip } from '@/services/starwarsResources/types';
import StarshipCardProduct from './StarshipCardProduct.vue';

defineProps({
    starships: Array as PropType<SwapiStarShip[]>
})
</script>
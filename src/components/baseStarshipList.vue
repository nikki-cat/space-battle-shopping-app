<template>
    <article class="starships-list">
        <ul>
            <li v-for="starship in starships" :key="starship.name">
                <StarshipCard :name="starship.name" :model="starship.model" :crew-size="starship.crew"
                    :starship-data="starship" />
            </li>
        </ul>
    </article>
</template>

<script setup lang="ts" scoped>
import type { PropType } from 'vue';
import type { SwapiStarShip } from '@/services/starwarsResources/types';

defineProps({
    starships: Array as PropType<SwapiStarShip[]>
})
</script>
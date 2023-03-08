<template>
    <StarshipCard :crew-size="props.crewSize" :model="props.model" :name="props.name">
        <template #extras>
            <ButtonPrimary @click="saveStarship">add</ButtonPrimary>
        </template>
    </StarshipCard>
</template>

<script setup lang="ts" scoped>
import type { PropType } from 'vue';
import type { SwapiStarShip } from '@/services/starwarsResources/types';
import { useMyStarshipsStore } from '@/stores/my-starships';
import StarshipCard from './StarshipCard.vue';
import ButtonPrimary from './ButtonPrimary.vue';

const props = defineProps({
    name: String,
    model: String,
    crewSize: String,
    starshipData: Object as PropType<SwapiStarShip>
})

const starshipStore = useMyStarshipsStore();
const saveStarship = () => {
    if (props.starshipData) {
        starshipStore.addStarship(props.starshipData);
    }
}
</script>
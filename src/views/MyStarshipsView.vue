<template>
  <StandardLayout>

    <template #header>
      <h2>SavedStarships</h2>
    </template>

    <template #default>

      <div>
        <p>total crew: {{ totalCrew }}</p>
        <ButtonPrimary @click="toggleSort">Sort By Crew</ButtonPrimary>
      </div>

      <TextCrawl>
        <StarshipPersonalList :starships="savedStarships" />
      </TextCrawl>
    </template>
  </StandardLayout>
</template>

<script setup lang="ts" scoped>
import { computed, ref } from 'vue';
import StandardLayout from '@/layouts/StandardLayout.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import StarshipPersonalList from '@/components/StarshipPersonalList.vue';
import TextCrawl from '@/components/TextCrawl.vue';
import type { SwapiStarShip } from '@/services/starwarsResources/types';
import { useMyStarshipsStore } from '@/stores/my-starships';

const starshipStore = useMyStarshipsStore()
const viewSortedByCrew = ref(false);
const savedStarships = computed(() => {
  const starships = starshipStore.savedStarships
  if (viewSortedByCrew.value) {
    return [...starships].sort((a: SwapiStarShip, b: SwapiStarShip) => parseInt(b.crew, 10) - parseInt(a.crew, 10))
  }
  return starships
})

const totalCrew = computed(() => {
  if (!Array.isArray(starshipStore.savedStarships)) {
    return 0;
  }

  return starshipStore.savedStarships.reduce((crewSize, starship) => {
    return crewSize + parseInt(starship.crew, 10);
  }, 0);
})

const toggleSort = () => {
  viewSortedByCrew.value = !viewSortedByCrew.value
}
</script>

<style lang="scss" scoped>
.content-frame {
  >article {
    height: 100%;
  }
}
</style>
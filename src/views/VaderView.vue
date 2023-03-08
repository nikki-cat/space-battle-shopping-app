<template>
    <StandardLayout>
        <template #header>
            <h2>The Starship Catalog</h2>
            <p>showing all starships: {{ totalStarships }}</p>
        </template>
        <template #default>
            <StarshipSearchForm @search-result="searchPerformed" @search-reset="onResetSearch" />
            <p>
                <button @click="goToNextPage">next page</button>
                <span>{{ currentPage }}</span>
            </p>

            <LoadSpinner v-if="!computedStarships" />
            <Transition>
                <TextCrawl v-show="computedStarships">
                    <StarshipCatalog :starships="computedStarships" />
                </TextCrawl>
            </Transition>
        </template>
    </StandardLayout>
</template>

<script setup lang="ts" scoped>
import { computed, onMounted, ref, type Ref } from 'vue';
import { fetchData } from '@/services/fetch';
import { fetchAllStarships } from '@/services/starwarsResources/fetch-starwars';
import type { SwapiStarShip } from '@/services/starwarsResources/types';

import StarshipSearchForm from '@/components/StarshipSearchForm.vue';
import LoadSpinner from '@/components/LoadSpinner.vue';
import TextCrawl from '@/components/TextCrawl.vue';
import StarshipCatalog from '@/components/StarshipCatalog.vue';
import StandardLayout from '@/layouts/StandardLayout.vue';

const starships = ref();
const starshipsBySearchFilter: Ref<SwapiStarShip[] | null> = ref(null);
const totalStarships = ref(0)
const currentPage = ref(1)
const nextPageEndpoint = ref()
const previousPageEndpoint = ref();
const firstPage = ref()


const computedStarships = computed(() => {
    return starshipsBySearchFilter.value || starships.value
});

const searchPerformed = (starships: SwapiStarShip[]) => {
    starshipsBySearchFilter.value = starships;
}

const onResetSearch = () => {
    starshipsBySearchFilter.value = null;

}

const goToNextPage = () => {
    fetchData(nextPageEndpoint.value,).then((response) => {
        starships.value = response.results
        previousPageEndpoint.value = response.previous

        if (!firstPage.value) {
            firstPage.value = response.previous
        }

        if (nextPageEndpoint.value === firstPage.value) {
            currentPage.value = 1

        } else {
            currentPage.value++
        }

        if (response.next === null) {
            nextPageEndpoint.value = firstPage.value
        } else {
            nextPageEndpoint.value = response.next
        }
    })
}

onMounted(() => {
    fetchAllStarships().then((starshipsData) => {
        if (!starshipsData) {
            return;
        }

        totalStarships.value = starshipsData.count
        starships.value = starshipsData.results
        nextPageEndpoint.value = starshipsData.next
    })
})
</script>
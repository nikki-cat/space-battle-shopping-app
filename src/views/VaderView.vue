<template>
    <StandardLayout>
        <template #header>
            <h2>The Starship Catalog</h2>
            <p>showing all starships: {{ totalStarshipsInBackend }}</p>
        </template>

        <template #default>
            <StarshipSearchForm @search-submitted="handleSearch" @search-reset="handleReset" />
            <p>
                <ButtonPrimary :disabled="loading" @click="nextPage">next page</ButtonPrimary>
                <span>{{ page }}</span>
            </p>

            <TransitionGroup>
                <LoadSpinner v-if="!starships || loading" :key="1" />
                <TextCrawl v-show="starships" :key="2">
                    {{ starships?.length }}
                    <StarshipCatalog v-if="starships" :starships="starships" />
                </TextCrawl>
            </TransitionGroup>
        </template>
    </StandardLayout>
</template>

<script setup lang="ts" scoped>
import { computed } from 'vue';

import StarshipSearchForm from '@/components/StarshipSearchForm.vue';
import LoadSpinner from '@/components/LoadSpinner.vue';
import TextCrawl from '@/components/TextCrawl.vue';
import StarshipCatalog from '@/components/StarshipCatalog.vue';
import StandardLayout from '@/layouts/StandardLayout.vue';
import { useSwapiStarships } from '@/composables/swapi-starships';
import ButtonPrimary from '@/components/ButtonPrimary.vue';

const {
    starshipsResults,
    starshipsLinkResults,
    starshipSearchResults,
    totalStarshipsInBackend,
    page,
    loading,
    nextPage,
    searchStarships,
    resetSearch,
} = useSwapiStarships();

const starships = computed(() => {
    return starshipsLinkResults.value || starshipSearchResults.value || starshipsResults.value
})

const handleSearch = (query: string) => {
    searchStarships(query)
}
const handleReset = () => {
    resetSearch()
}
</script>
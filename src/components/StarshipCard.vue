<template>
    <article>
        <h3>{{ name }}</h3>

        <section title="starship-info">
            <h4>model: {{ model }}</h4>
            <p>crew: {{ crewSize }}</p>
            <slot name="extras"></slot>
        </section>
    </article>
</template>

<script setup lang="ts" scoped>
import type { SwapiStarShip } from '@/services/starwarsResources/types';
import type { PropType } from 'vue';

defineProps({
    name: String,
    model: String,
    crewSize: String,
    starshipData: Object as PropType<SwapiStarShip>
})
</script>
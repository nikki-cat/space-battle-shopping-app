<template>
    <BaseButton class="primary">
        <slot></slot>
    </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';


</script>

<style scoped>
.primary {
    background-color: var(--color-starwars-yellow-soft);
}
</style>
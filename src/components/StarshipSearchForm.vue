<template>
    <form id="starship-form" class="search-form" name="starships" @submit.prevent="handleSubmitSearch">
        <label for="starship-search">Search Starships:</label>
        <input id="starship-search" name="starship-search" type="text" pattern="^[A-Za-z0-9-]*$" />

        <ButtonPrimary type="submit">
            Search your feelings, Lord Vader
        </ButtonPrimary>
        <ButtonSecondary type="button" @click="handleResetSearch">reset</ButtonSecondary>
    </form>
</template>

<script setup lang="ts">
import ButtonPrimary from './ButtonPrimary.vue';
import ButtonSecondary from './ButtonSecondary.vue';

const emit = defineEmits(["search-submitted", "search-reset"])
const handleSubmitSearch = (event: Event) => {
    const form = event.target as HTMLFormElement
    const input = form.elements["starship-search"] as HTMLInputElement
    emit("search-submitted", input.value)
}

const handleResetSearch = () => {
    const form = document.getElementById("starship-form") as HTMLFormElement
    form?.reset()
    emit("search-reset")
}
</script>

<style lang="scss" scoped>
.search-form {
    padding: 0.3rem;
    border: 1px solid black;
    border-right: none;
    border-left: none;

    label,
    button,
    input {
        margin-right: 1rem;
    }
}
</style>
<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.button {
    min-width: 5rem;
    min-height: var(--item-min-height);
    padding: 0.3rem 0.5rem;
    border-radius: 0.3em;
    font-size: 1.1em;
    color: var(--color-text-button);
    background-color: var(--color-background-soft);
    transition: background-color 0.2s ease-in;
    cursor: pointer;

    &:hover {
        background-color: var(--color-background-mute);
    }
}
</style>
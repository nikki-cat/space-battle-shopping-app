<template>
    <div class="loading-spinner">
        <div class="spinner"></div>
        <p class="text">Fetching</p>
    </div>
</template>

<style scoped>
.spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: var(--color-starwars-yellow-soft);
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto;
}

.text {
    text-align: center;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
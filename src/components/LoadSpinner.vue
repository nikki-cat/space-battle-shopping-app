<template>
    <div class="loading-spinner">
        <div>
            <div class="spinner"></div>
            <p class="text">Fetching</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loading-spinner {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
}

.spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid rgba(0, 0, 0, 0.4);
    border-top-color: var(--color-starwars-yellow-soft);
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto;
}

.text {
    $strokeColor: #000000;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    text-shadow: 2px 2px 0px $strokeColor, -2px -2px 0px $strokeColor, 2px -2px 0px $strokeColor, -2px 2px 0px $strokeColor;
    color: var(--color-starwars-yellow);
}

.spinner,
.text {
    position: relative;
    z-index: 5;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
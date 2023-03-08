<template>
    <main class="content-frame">
        <header>
            <slot name="header"></slot>
        </header>
        <section title="main-body">
            <slot></slot>
        </section>
    </main>
</template>


<style lang="scss" scoped>
.content-frame,
section {
    height: 100%;
}
</style>
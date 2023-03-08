<template>
    <!-- <div> -->
    <article class="star-wars">
        <div class="crawl">
            <div class="top-fade-effect"></div>
            <div class="inner-text">
                <slot>
                    <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first
                        victory
                        against the evil Galactic Empire.</p>

                    <p>During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the
                        DEATH
                        STAR, an armored space station with enough power to destroy an entire planet.</p>

                    <p>Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian
                        of
                        the
                        stolen plans that can save her people and restore freedom to the galaxy….</p>
                </slot>
            </div>
        </div>
    </article>

    <!-- </div> -->
</template>

<style lang="scss">
.star-wars {
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    color: #FFE81F;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 150%;
    perspective: 535px;
    text-align: justify;
}

.top-fade-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    background-image: linear-gradient(to bottom, var(--color-background-content-frame), rgba(0, 0, 0, 0));
    z-index: 1;
}

.inner-text {
    height: 100%;
    width: 100%;
    padding: 0 2rem 3rem 2rem;
    overflow: auto;
}

.crawl {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 2rem;
    top: -5rem;
    transform-style: preserve-3d;
    transform: rotateX(26deg);
}
</style>
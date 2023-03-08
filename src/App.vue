<template>
  <header>
    <div class="site-title">
      <div style="font-size: 3em;">🛸</div>
      <div>
        <h1>The Starship Emprium</h1>
        <p class="sub-title">- The Empire's finest selection of starships.</p>
      </div>
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">My Starships</RouterLink>
        <RouterLink to="/vader">Buy Starships</RouterLink>
      </nav>
    </div>

  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;

  h1 {
    margin-bottom: 0;
  }

  .site-title {
    display: flex;
    flex-direction: row;
  }
}


.sub-title {
  color: var(--color-text-secondary);
  margin: 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  & a.router-link-exact-active {
    text-decoration: underline;
    font-weight: bold;
  }

  & a.router-link-exact-active:hover {
    background-color: transparent;
  }

  & a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  & a:first-of-type {
    border: 0;
  }
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    flex-direction: column;
    padding-right: 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

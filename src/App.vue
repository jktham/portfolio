<script setup lang="ts">
  import { ref } from 'vue';
  import Icon from './components/Icon.vue';
  import Project from './components/Project.vue';
  import { projects, moreProjects } from './lib/projects';

  const showMore = ref(false);
  const toggleMore = () => {
    showMore.value = !showMore.value;
  };

</script>

<template>
  <header>
    <h1 class="title">{{"stuff :)"}}</h1>
  </header>
  <main>
    <Project v-for="(project, index) in projects" :project :index></Project>
    <Project v-if="showMore" v-for="(project, index) in moreProjects" :project :index="projects.length + index"></Project>

    <button v-if="!showMore" class="more" @click="toggleMore">
      <span class="label">More</span><Icon>keyboard_arrow_down</Icon>
    </button>
    <button v-else class="more" @click="toggleMore">
      <span class="label">Less</span><Icon>keyboard_arrow_up</Icon>
    </button>
  </main>
  <footer>
    <p class="heart">{{"<3"}}</p>
  </footer>
</template>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    min-width: 20rem;
  }
</style>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 13rem;
    width: 100%;
    padding-top: 1rem;
    background-color: var(--bg1);

    .title {
	    font-size: 4rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 82.5rem;
    margin: auto;
    gap: 1rem;
    padding: 1rem;

    .more {
      all: unset;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      padding-left: 1.25rem;
      font-size: 1rem;
      cursor: pointer;
      background-color: var(--bg2);
    }

    .more > .label {
      width: 2.4rem;
    }

    .more > .icon {
      margin-left: 0.5rem;
      line-height: 3rem;
      font-size: 1.5rem;
      max-width: 1.5rem;
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 2rem;
    background-color: var(--bg2);

    .heart {
	    font-size: 1rem;
    }
  }
</style>
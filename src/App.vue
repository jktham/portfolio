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
      More<Icon>keyboard_arrow_down</Icon>
    </button>
    <button v-else class="more" @click="toggleMore">
      Less<Icon>keyboard_arrow_up</Icon>
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
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      gap: 0.5rem;
      padding: 0 1rem;
      padding-right: 0.7rem;
      cursor: pointer;
      background-color: var(--bg2);

      .icon {
        font-size: 1.5rem;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    background-color: var(--bg2);

    .heart {
	    font-size: 1rem;
    }
  }
</style>
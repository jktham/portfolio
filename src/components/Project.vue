<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay, Mousewheel, Zoom, Manipulation } from 'swiper/modules';
  import { type Swiper as SwiperT } from "swiper/types";
  import "swiper/css";
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/zoom';
  import Icon from './Icon.vue';
  import type { Project } from '@/lib/projects';

  const { project, index } = defineProps<{project: Project, index: number}>();

  const swiperOnAfterInit = (swiper: SwiperT) => { // breaks state on rerender :/
    if (swiper.slides.length > project.images.length) {
      swiper?.removeSlide(0);
    }
    swiper?.update();
    swiper?.slideTo(0, 0, false);
    swiper?.autoplay?.stop();
    setTimeout(() => swiper?.autoplay?.start(), index * 100 + 1000);
  };
  const swiperOnZoomChange=(swiper: SwiperT, scale: number) => {
    scale == 1 ? swiper?.autoplay?.start() : swiper?.autoplay?.stop()
  };
  const swiperOnSlideChange=(swiper: SwiperT) => {
    swiper?.slides?.[0] && swiper?.zoom?.out()
  };
</script>

<template>
  <div :class="(index % 2 == 0) ? 'project reverse' : 'project'">
    <div class="info">
      <div class="name">{{project.name}}</div>
      <div class="subtitle">
        <div class="year">{{project.year}}</div>
        <div class="status"><Icon>{{project.statusIcon}}</Icon>{{project.status}}</div>
      </div>
      <div class="tools">
        <div v-for="tool in project.tools" class="tool">{{tool}}</div>
      </div>
      <div class="description">{{project.description}}</div>
      <div class="links">
        <a class="repo" :href="project.repo"><Icon>Code</Icon>GitHub</a>
        <a v-if="project.live" class="live" :href="project.live"><Icon>Public</Icon>{{project.live.split("https://")[1]}}</a>
      </div>
      <div class="contributors">
        <template v-for="contributor in project.contributors">
          <a class="contributor" :href="contributor.link"><Icon>person</Icon>{{contributor.name}}</a>
        </template>
      </div>
    </div>
    <div class="images">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay, Mousewheel, Zoom, Manipulation]"
        :navigation="false"
        :pagination="{clickable: true}"
        :loop="project.images.length > 1 && true"
        :autoplay="{delay: 4000, disableOnInteraction: false}"
        :spaceBetween="20"
        :mousewheel="true"
        :zoom="true"
        :lazy-preload-prev-next="1"
        :onAfterInit="swiperOnAfterInit"
        :onZoomChange="swiperOnZoomChange"
        :onSlideChange="swiperOnSlideChange"
      >
        <SwiperSlide>
          <div class="image swiper-zoom-container">
            <img src="/blank.jpg" alt="" loading="eager"></img>
          </div>
          <div class="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide v-for="image in project.images">
          <div class="image swiper-zoom-container">
            <img :src="image" alt="" loading="lazy"></img>
          </div>
          <div class="swiper-lazy-preloader"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
  .project {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: var(--bg2);
    padding: 1rem;
    height: 19rem;
    max-width: 75rem;
    gap: 1rem;
    flex-direction: row;
    align-self: flex-start;
  }

  .reverse {
    flex-direction: row-reverse;
    align-self: flex-end;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1.25 1 0;
    width: 0;
    align-items: flex-end;
    text-align: end;
    gap: 0.5rem;
    overflow: scroll;
    scrollbar-width: none;
  }

  .reverse > .info {
    align-items: start;
    text-align: start;
  }

  .images {
    height: 100%;
    flex: 1 1 0;
    width: 0;
    background-color: var(--bg1);
  }

  .swiper {
    height: 100%;
    width: 100%;
  }

  .image {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
  }

  .image > img {
    display: block;
    margin: auto;
    user-select: none;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .name {
    font-size: 3rem;
    line-height: 3rem;
  }

  .subtitle {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .status {
    display: flex;
    line-height: 1rem;
  }

  .status > span {
    margin-right: 0.5rem;
    line-height: 1rem;
    font-size: 1.25rem;
    max-width: 1.25rem;
  }

  .tools {
    height: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    height: auto;
    justify-content: flex-end;
  }

  .reverse > .info > .tools {
    justify-content: flex-start;
  }

  .tool {
    padding: 0 0.5rem;
    background-color: var(--tool);
  }

  .description {
    height: 100%;
    padding: 0;
    overflow: scroll;
    scrollbar-width: none;
    width: 100%;
    max-width: 100%;
    overflow-wrap: break-word;
  }

  .contributors {
    height: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    height: auto;
    justify-content: flex-end;
  }

  .reverse > .info > .contributors {
    justify-content: flex-start;
  }

  .contributor {
    padding: 0 0.5rem;
    background-color: var(--contributor);
    display: flex;
    white-space: nowrap;
    overflow: hidden;
  }

  .contributor > span {
    margin-right: 0.3rem;
    line-height: 1.4rem;
    font-size: 1.25rem;
    max-width: 1.25rem;
  }

  .links {
    height: 2rem;
    line-height: 2rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    height: auto;
    justify-content: flex-end;
  }

  .reverse > .info > .links {
    justify-content: flex-start;
  }

  .links > a {
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
  }

  .links > a > span {
    margin-right: 0.5rem;
    line-height: 2rem;
    font-size: 1.5rem;
    max-width: 1.5rem;
  }

  .repo {
    background-color: var(--repo);
  }

  .live {
    background-color: var(--live);
  }

  @media only screen and (max-width: 768px) {
    .project {
      flex-direction: column-reverse;
      height: 35rem;
    }
    .info {
      width: 100%;
      height: 0;
      flex: 1.2 1 0;
    }
    .images {
      width: 100%;
      height: 0;
      flex: 1 1 0;
    }
  }
</style>
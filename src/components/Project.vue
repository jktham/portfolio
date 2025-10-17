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
        <Icon>{{project.statusIcon}}</Icon>
        <div class="status">{{project.status}}</div>
      </div>
      <div class="tools">
        <div v-for="tool in project.tools" class="tool">{{tool}}</div>
      </div>
      <div class="description">{{project.description}}</div>
      <div class="links">
        <a class="link repo" :href="project.repo"><Icon>Code</Icon>GitHub</a>
        <a v-if="project.live" class="link live" :href="project.live"><Icon>Public</Icon>{{project.live.split("https://")[1]}}</a>
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
          <div class="swiper-zoom-container">
            <img class="image" src="/blank.jpg" alt="" loading="eager"></img>
          </div>
          <div class="swiper-lazy-preloader"></div>
        </SwiperSlide>
        <SwiperSlide v-for="image in project.images">
          <div class="swiper-zoom-container">
            <img class="image" :src="image" alt="" loading="lazy"></img>
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
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    height: 19rem;
    width: 100%;
    max-width: 75rem;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--bg2);

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 100%;
      width: 0;
      flex: 1.25 1 0;
      gap: 0.5rem;
      text-align: end;
      overflow: scroll;
      scrollbar-width: none;

      .name {
        font-size: 3rem;
      }

      .subtitle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .year {
          
        }

        .icon {
          font-size: 1.25rem;
        }
        
        .status {
          
        }
      }

      .tools {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        gap: 0.5rem;

        .tool {
          padding: 0.1rem 0.5rem;
          background-color: var(--tool);
        }
      }

      .description {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        scrollbar-width: none;
        overflow-wrap: break-word;
      }

      .links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 0.5rem;

        .link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3rem 0.5rem;
          gap: 0.5rem;

          .icon {
            font-size: 1.4rem;
          }
        }

        .repo {
          background-color: var(--repo);
        }

        .live {
          background-color: var(--live);
        }
      }

      .contributors {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 0.5rem;

        .contributor {
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          overflow: hidden;
          gap: 0.3rem;
          padding: 0.1rem 0.5rem;
          padding-left: 0.3rem;
          background-color: var(--contributor);

          .icon {
            font-size: 1.25rem;
          }
        }
      }
    }

    .images {
      height: 100%;
      width: 0; /* ? */
      flex: 1 1 0;
      background-color: var(--bg1);

      .swiper {
        height: 100%;

        .image {
          user-select: none;
        }
      }
    }
  }

  .project.reverse {
    flex-direction: row-reverse;
    align-self: flex-end;

    .info {
      align-items: start;
      text-align: start;

      .tools {
        justify-content: flex-start;
      }
      
      .links {
        justify-content: flex-start;
      }
      
      .contributors {
        justify-content: flex-start;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .project.project.project {
      flex-direction: column-reverse;
      height: 35rem;

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
  }
</style>
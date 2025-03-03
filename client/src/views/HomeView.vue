<template>
  <main id="home-view-container">
    <div id="primary-component-container">
      <SiteHeader />
      <ProjectCategories id="project-categories" />
      <div id="experience-link" @click="scrollToResume()">
        <p>EXPERIENCE</p>
        <p>&#9660;</p>
      </div>
    </div>
    <img ref="resume" id="resume" src="@/assets/resume.png" />
  </main>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import ProjectCategories from '@/components/ProjectCategories.vue'
import SiteHeader from '@/components/SiteHeader.vue'

const resume = useTemplateRef('resume')

function scrollToResume() {
  window.scrollTo(0, resume.value.offsetTop)
}
</script>

<style lang="scss" scoped>
#home-view-container {
  #primary-component-container {
    height: 100vh;

    #project-categories {
      margin-top: 150px;
    }

    #experience-link {
      cursor: pointer;
      text-align: center;
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      color: grey;

      p {
        margin: 0;

        & + p {
          margin-top: 10px;
        }
      }
    }
  }

  #resume {
    display: block;
    margin: auto;
    width: 1000px;
  }
}
</style>

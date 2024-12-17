<template>
  <article class="entry">
    <p class="title">
      {{ t('about.title') }}

    </p>
    <div class="block-img-left">
        <figure>
          <nuxt-img
            src="/andre.jpg"
            class="pb"
          />
        </figure>
      </div>
    <blockquote>
      <p>
        {{ t('about.text') }}
      </p>
    </blockquote>

    <h2>
      Carreira
    </h2>

    <ol class="job">
      <li v-for="(experience, index) in experiences" :key="index" class="job-item">
        <h4 class="job-title">{{ experience.title }}</h4>
        <p class="job-enterprise">{{ experience.enterprise }}</p>
        <p class="job-time">{{ experience.time }}</p>
        <p class="job-local">{{ experience.location }}</p>
        <h5 class="job-skills">Skills: {{ experience.skills }}</h5>
      </li>
    </ol>

    
  </article>
</template>

<script setup>
const { t, locale } = useI18n()

const experiences = [
  {
    title: 'Front-end Developer',
    enterprise: 'Freelancer',
    time: 'fev de 2015 - Atual',
    location: 'Homeoffice',
    skills: 'Wordpress, VueJs, NuxtJs, ReactJs, AngularJs.',
  },
  {
    title: 'Front-end Developer',
    enterprise: 'Evavip.com',
    time: 'dez de 2023 - mai de 2024 · 5 meses',
    location: 'Homeoffice',
    skills: 'Vuejs, TypeScript, Jira.',
  },
  {
    title: 'Front-end Developer',
    enterprise: 'Plural Systems',
    time: 'mai de 2022 - mar de 2023 · 10 meses',
    location: 'Homeoffice',
    skills: 'Sustentação em projetos AngularJs, ReactJs e ReactNative, Azure, Scrum.',
  },
  {
    title: 'Front-end developer Pleno',
    enterprise: '3bits Estúdio Criativo',
    time: 'ago de 2012 - fev de 2015 · 2 anos e 6 meses',
    location: 'Belo Horizonte/Mg',
    skills: 'Desenvolvimento de sites com jQuery, Wordpress, SASS, GIT.'
  },
  {
    title: 'Front-end developer',
    enterprise: 'Lápis Raro',
    time: 'abr de 2011 - fev de 2012 · 10 meses',
    location: 'Belo Horizonte/Mg',
    skills: 'Desenvolvimento de interface web com HTML5, CSS, JavasScript, jQuery, Wordpress.'
  },
  {
    title: 'Programador de Interface',
    enterprise: 'Commquest Comunicação',
    time: 'set de 2010 - abr de 2011 · 7 meses',
    location: 'Belo Horizonte/Mg',
    skills: 'Desenvolvimento de interface web com HTML5, CSS, JavasScript, jQuery.'
  },
  {
    title: 'Programador de Interface',
    enterprise: 'Webroom',
    time: 'jun de 2009 - set de 2010 · 1 ano e 3 meses',
    location: 'Uberlândia/Mg',
    skills: 'Corte de layouts em psd e desenvolvimento em html e css.'
  },

]
</script>

<style>
.pb {
  filter: grayscale(.5);
}
</style>

<template>
  <layout-home>
    <!-- Header -->
    <template #header>
      <header-home />
    </template>

    <!-- Main -->
    <template #resume>
      <resume-home />
    </template>

    <!-- Movements -->
    <template #movements>
      <movements-home />
    </template>

  </layout-home>
</template>

<script>
  /* Optional API */
  import LayoutHome from '@/components/LayoutHome.vue';
  import HeaderHome from '@/components/HeaderHome.vue';
  import ResumeHome from '@/components/ResumeHome.vue';
  import MovementsHome from '@/components/MovementsHome.vue';

  export default {
    name: 'HomePage',
    components: {
      LayoutHome,
      HeaderHome,
      ResumeHome,
      MovementsHome,
    },
  };

</script>
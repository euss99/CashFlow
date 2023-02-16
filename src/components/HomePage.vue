<template>
  <layout-home>
    <template #header>
      <header-home />
    </template>
  </layout-home>
</template>

<script>
  import LayoutHome from '@/components/LayoutHome.vue';
  import HeaderHome from '@/components/HeaderHome.vue';

  export default {
    name: 'HomePage',
    components: {
      LayoutHome,
      HeaderHome,
    },
  };

</script>
<template>
  <layout-home>
    <!-- Header -->
    <template #header>
      <header-home />
    </template>

    <!-- Main -->
    <template #resume>
      <resume-home 
        :label="'Ahorro total'"
        :totalAmount="1000"
        :amount="amount"
        :date="date"
      >
        <!-- Graphic -->
        <template #graphic>
          Graphic
        </template>
        <!-- Action -->
        <template #action>
          Acción
        </template>
      </resume-home>
    </template>

    <!-- Movements -->
    <template #movements>
      <movements-home
        :movements="movements"
      />
    </template>

  </layout-home>
</template>

<script>
  /* Optional API */
  import LayoutHome from '@/components/LayoutHome.vue';
  import HeaderHome from '@/components/Header/Header.vue';
  import ResumeHome from '@/components/Resume/Resume.vue';
  import MovementsHome from '@/components/Movements/Movements.vue';

  export default {
    name: 'HomePage',
    components: {
      LayoutHome,
      HeaderHome,
      ResumeHome,
      MovementsHome,
    },
    data() {
      return {
        amount: null,
        date: null,
        movements: [
          {
            id: 1,
            title: "Movimiento",
            description: "Deposito de salario",
            amount: "1000",
          },
          {
            id: 2,
            title: "Movimiento 1",
            description: "Deposito de honorarios",
            amount: "500",
          },
          {
            id: 3,
            title: "Movimiento 3",
            description: "Comida",
            amount: "-100",
          },
          {
            id: 4,
            title: "Movimiento 4",
            description: "Colegiatura",
            amount: "1000",
          },
          {
            id: 5,
            title: "Movimiento 5",
            description: "Reparación equipo",
            amount: "1000",
          },
        ],
      }
    }
  };

</script>
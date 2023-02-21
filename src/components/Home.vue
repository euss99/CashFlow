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
          <graphic 
            :amounts="amounts"
          />
        </template>
        <!-- Action -->
        <template #action>
          <action />
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
  import Graphic from './Resume/Graphic.vue';
  import Action from '@/components/Resume/Action.vue';
  import MovementsHome from '@/components/Movements/Movements.vue';

  export default {
    name: 'HomePage',
    components: {
      LayoutHome,
      HeaderHome,
      ResumeHome,
      Graphic,
      Action,
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
            amount: 100,
            time: new Date("02-21-2023"),
          },
          {
            id: 2,
            title: "Movimiento 1",
            description: "Deposito de honorarios",
            amount: 200,
            time: new Date("02-18-2023"),
          },
          {
            id: 3,
            title: "Movimiento 3",
            description: "Comida",
            amount: 500,
            time: new Date("02-15-2023"),
          },
          {
            id: 4,
            title: "Movimiento 4",
            description: "Colegiatura",
            amount: 200,
            time: new Date("02-14-2023"),
          },
          {
            id: 5,
            title: "Movimiento 5",
            description: "Reparación equipo",
            amount: -400,
            time: new Date("02-06-2023"),
          },
          {
            id: 6,
            title: "Movimiento 6",
            description: "Reparación equipo",
            amount: -600,
            time: new Date("02-02-2023"),
          },
          {
            id: 7,
            title: "Movimiento 7",
            description: "Reparación equipo",
            amount: -300,
            time: new Date("01-25-2023"),
          },
          {
            id: 8,
            title: "Movimiento 8",
            description: "Reparación equipo",
            amount: 500,
            time: new Date("01-24-2023"),
          },
        ],
      }
    },
    computed: {
      amounts() {
        const last30days = this.movements
          .filter(movement => {
            const today = new Date(); // Today
            const oldDate = today.setDate(today.getDate() - 30); // 30 days ago

            return movement.time > oldDate; // Solo regresa los movimientos de los últimos 30 días (incluyendo hoy).
          })
          .map(movement => movement.amount); // Solo regresa los montos de los movimientos.

        return last30days.map((movement, i) => {
          const lastMovements = last30days.slice(0, i); // Obtiene los movimientos anteriores al movimiento actual.

          return lastMovements.reduce((acc, movement) => acc + movement, 0); // Suma los movimientos anteriores al movimiento actual.
        })
      },
    },
  };

</script>
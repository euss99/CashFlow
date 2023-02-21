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
        :totalAmount="totalAmount"
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
          <action @create="create" />
        </template>
      </resume-home>
    </template>

    <!-- Movements -->
    <template #movements>
      <movements-home
        :movements="movements"
        @remove="remove"
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
        movements: [],
      }
    },
    // computed es un objeto que contiene funciones que se ejecutan cada vez que se actualiza el DOM.
    computed: {
      // amounts es un arreglo que contiene los montos de los movimientos de los últimos 30 días.
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
      // totalAmount es el total de los movimientos.
      totalAmount() {
        return this.movements.reduce((acc, movement) => acc + movement.amount, 0);
      },
    },
    // mounted es una función que se ejecuta cuando se carga el componente.
    mounted() {
      const movements = JSON.parse(localStorage.getItem("movements")); // Obtiene los movimientos del localStorage en formato JSON.

      // Verifica que los movimientos sean un arreglo.
      if (Array.isArray(movements)) { 
        this.movements = movements?.map(
        movement => {
          return {
            ...movement,
            time: new Date(movement.time).getTime(), // Convierte la fecha en formato string a formato timestamp.
          }
        }
      ); // Asigna los movimientos al arreglo de movimientos.
      }
    },
    // methods es un objeto que contiene funciones que se ejecutan cuando se llama a la función.
    methods: {
      // create es una función que crea un nuevo movimiento.
      create(movement) {
        this.movements.push(movement); // Agrega el movimiento al arreglo de movimientos.
        this.save();
      },
      // remove es una función que elimina un movimiento.
      remove(id) {
        const index = this.movements.findIndex(movement => movement.id === id); // Obtiene el índice del movimiento a eliminar.
        this.movements.splice(index, 1); // Elimina el movimiento.
      },
      save() {
        localStorage.setItem("movements", JSON.stringify(this.movements)); // Guarda los movimientos en el localStorage en formato JSON.
      }
    },
  };

</script>
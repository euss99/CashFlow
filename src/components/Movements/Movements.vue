<template>
    <div class="movements">
        <h2 class="title">Historial</h2>
        <div class="content">
            <Movement 
                v-for="movement in movements" 
                :key="movement.id"
                :title="movement.title"
            />
        </div>
    </div>
</template>

<script setup>

    import { toRefs, defineProps } from 'vue';
    // toRefs es una función que nos permite convertir un objeto en un objeto de refs.
    // defineProps es una función que nos permite definir las propiedades que va a recibir el componente.
    import Movement from './Movement.vue';

    const props = defineProps({
        // Aquí definimos las propiedades que va a recibir el componente.
        // En este caso, el componente va a recibir un array de objetos con la información de los movimientos.
        movements: {
            type: Array,
            // Se usa una función flecha para que se pueda ejecutar en el momento de la creación del componente.
            default: () => [],
        },
    });

    // Aquí se desestructura el objeto que devuelve la función toRefs, esto nos permite acceder a las propiedades del objeto como si fueran refs.
    const { movements } = toRefs(props);
</script>


<style scoped>
    .movements {
        max-height: 100%;
        padding: 0 8px;
        margin-bottom: 14px;
    }
    .title {
        margin: 8px 16px 24px 16px;
        color: var(--brand-blue);
    }
    .content {
        max-height: 68vh;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: scroll;
    }
</style>
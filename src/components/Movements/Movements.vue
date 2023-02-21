<template>
    <div class="movements">
        <h2 class="title">Historial</h2>
        <div class="content">
            <Movement 
                v-for="{id, title, description, amount} in movements" 
                :key="id"
                :id="id"
                :title="title"
                :description="description"
                :amount="amount"
                @remove="remove"
            />
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';
    // defineProps es una función que nos permite definir las propiedades que va a recibir el componente.

    import Movement from './Movement.vue';
    
    defineProps({
        // Aquí definimos las propiedades que va a recibir el componente.
        // En este caso, el componente va a recibir un array de objetos con la información de los movimientos.
        movements: {
            type: Array,
            // Se usa una función flecha para que se pueda ejecutar en el momento de la creación del componente.
            default: () => [],
        },
    });

    const emit = defineEmits(["remove"]); // Se usa defineEmits para poder emitir un evento llamado "remove" que se va a usar en el componente padre.

    // Función de remove
    const remove = (id) => {
        emit("remove", id);
    }
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
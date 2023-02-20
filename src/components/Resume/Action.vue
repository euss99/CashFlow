<template>
    <button @click="showModal = true">Agregar movimiento</button>
    <teleport to="#app">
        <!-- Se usa el teleport para poder agregar el modal al momento del click -->
        <modal v-show="showModal" @close="showModal = false">
            Aquí va el formulario dentro del modal slot
        </modal>
    </teleport>
</template>

<script setup>
    import Modal from "./Modal.vue";

    import { ref } from "vue";
    const showModal = ref(false); // Se usa ref para poder cambiar el valor de la variable showModal, que por defecto es false ya que no se ha hecho click en el botón.
</script>

<style scoped>
    button {
        color: white;
        font-size: 1.25rem;
        background-color: var(--brand-blue);
        border: none;
        width: 100%;
        padding: 24px 60px;
        border-radius: 60px;
        box-sizing: border-box;
        cursor: pointer;
    }

    form {
        font-size: 1.24rem;
        width: 100%;
    }

    form .action {
        padding: 0 24px;
    }

    .field {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 16px 24px;
    }

    label {
        margin-bottom: 8px;
    }

    input,
    textarea {
        font-size: 1.24rem;
        border: 2px solid var(--brand-blue);
        border-radius: 8px;
        padding: 8px;
    }

    input[type="number"] {
        text-align: right;
    }

    .radio-label {
        display: flex;
        align-items: center;
        margin-top: 8px;
    }

    .radio-label span {
        margin-top: 4px;
        margin-left: 8px;
    }

    input[type="radio"] {
        appearance: none;
        width: 1.24rem;
        height: 1.24rem;
        color: var(--brand-blue);
        border: 2px solid var(--brand-blue);
        border-radius: 50%;
    }

    input[type="radio"]:checked {
        background-color: var(--brand-blue);
    }
</style>
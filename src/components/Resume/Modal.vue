<template>
    <div class="modal">
        <div class="head">
            <p>Nuevo movimiento</p>
            <img @click="close" src="@/assets/close-icon.svg" alt="Trash Icon">
        </div>
        <div class="body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import { defineEmits } from "vue";
    // Se usa defineEmits para poder emitir un evento al padre, en este caso el evento es "close" y se emite cuando se hace click en la imagen de la equis.
    // Un emit es como un trigger, que se ejecuta cuando se hace click en la imagen de la papelera. 
    // Un trigger es una función que se ejecuta cuando se hace click en la imagen de la equis.
    const emit = defineEmits(["close"]);

    const close = () => {
        // Se emite el evento "close" cuando se hace click en la imagen de la equis.
        emit("close")
    };
</script>

<style scoped>
    .modal {
        z-index: 2;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: white;
    }

    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 24px 24px;
        box-sizing: border-box;
    }

    p {
        margin: 0;
        font-size: 1.5rem;
        color: var(--brand-blue);
    }
</style>
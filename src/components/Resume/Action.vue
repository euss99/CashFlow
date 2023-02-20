<template>
    <button @click="showModal = true">Agregar movimiento</button>
    <teleport to="#app">
        <!-- Se usa el teleport para poder agregar el modal al momento del click -->
        <modal v-show="showModal" @close="showModal = false">
            <form @submit.prevent="submit">
                <div class="field">
                    <label>Título</label>
                    <input type="text" v-model="title" />
                </div>
                <div class="field">
                    <label>Monto</label>
                    <input type="number" v-model="amount" />
                </div>
                <div class="field">
                    <label>Descripción</label>
                    <textarea rows="4" v-model="description"></textarea>
                </div>
                <div class="field">
                    <label class="radio-label">
                        <input type="radio" v-model="movementType" value="Ingreso">
                        <span>Ingreso</span>
                    </label>
                    <label class="radio-label">
                        <input type="radio" v-model="movementType" value="Gasto">
                        <span>Gasto</span>
                    </label>
                </div>
                <div class="action">
                    <button>Agregar movimiento</button>
                </div>
            </form>
        </modal>
    </teleport>
</template>

<script setup>
    import Modal from "./Modal.vue";
    import currencyFormatter from "@/javascript/currencyFormater";

    import { ref } from "vue";
    const showModal = ref(false); // Se usa ref para poder cambiar el valor de la variable showModal, que por defecto es false ya que no se ha hecho click en el botón.
    const title = ref(""); // Se usa ref para poder cambiar el valor de la variable title, que por defecto es "" ya que no se ha escrito nada en el input.
    const amount = ref(0); // Se usa ref para poder cambiar el valor de la variable amount, que por defecto es 0 ya que no se ha escrito nada en el input.
    const description = ref(""); // Se usa ref para poder cambiar el valor de la variable description, que por defecto es "" ya que no se ha escrito nada en el input.
    const movementType = ref("Ingreso"); // Se usa ref para poder cambiar el valor de la variable movementType, que por defecto es "Ingreso" ya que es el valor que se le asigna al input.

    const submit = () => {
        showModal.value = false; // Se cambia el valor de la variable showModal a false para que se cierre el modal.
    }
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
        background: #fff;
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
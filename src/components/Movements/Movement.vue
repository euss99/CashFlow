<template>
    <div class="movement">
        <div class="content">
            <h4>{{title}}</h4>
            <p>{{description}}</p>
        </div>
        <div class="action">
            <img src="../../assets/trash-icon.svg" alt="Trash Icon" @click="remove">
            <p :class="{ 
                'red': isNegative, 
                'green': !isNegative 
            }">{{ amountCurrency }}</p>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits, toRefs, computed } from 'vue';
    import currencyFormatter from "@/javascript/currencyFormater";
    
    // Aquí definimos las propiedades que va a recibir el componente. 
    // En este caso, el componente Movement recibe tres propiedades: title, description y amount.
    const props = defineProps({
        id: {
            type: Number,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        amount: {
            type: Number,
        },
        
    });

    // toRefs es una función que nos permite convertir un objeto en un objeto de refs, en este caso se declaro el id para poder usarlo en la función remove y el amount para poder usarlo en la propiedad computada amountCurrency.
    const {id,amount} = toRefs(props);

    // computed es una función que nos permite crear una propiedad computada, en este caso se declaro la propiedad amountCurrency para poder usarla en el template.
    const amountCurrency = computed(
        () => currencyFormatter.format(props.amount)
    );

    // isNegative es una propiedad computada que nos permite saber si el monto es negativo o no.
    const isNegative = computed(
        () => amount.value < 0
    );

    // defineEmits es una función que nos permite definir los eventos que va a emitir el componente.
    const emit = defineEmits(['remove']);

    // Función de remove
    const remove = () => {
        emit("remove", id.value);
    };

   
</script>

<style scoped>
    .movement {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 16px;
        background-color: #e6f9ff;
        border-radius: 8px;
        box-sizing: border-box;
    }
    .movement .content {
        width: 100%;    
    }
    .movement .action {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: column;
    }
    h4,
    p {
        margin: 0;
        padding: 0;
    }
    h4 {
        margin-bottom: 8px;
    }
    .movement .action img {
        margin-bottom: 16px;
    }
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>
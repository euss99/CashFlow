<template>
    <div>
        <svg viewBox="0 0 300 200" >
            <!-- Línea central -->
            <line 
                stroke="#c4c4c4"
                stroke-width="2"
                x1="0" :y1="zero" x2="300" :y2="zero"
            />
            <!-- Línea costos -->
            <polyline 
                fill="none"
                stroke="#0689B0"
                stroke-width="2"
                :points="points"
            />
            <!-- Línea cursor -->
            <line 
                stroke="#04b500"
                stroke-width="2"
                x1="200" y1="0" x2="200" y2="200"
            />
        </svg>
        <p>Últimos 30 días.</p>
    </div>
</template>

<script setup>
    import { defineProps, toRefs, computed } from 'vue';

    const props = defineProps({
        amounts: {
            type: Array,
            default: () => [], // Función que retorna un array vacío por defecto.
        },
    });

    // Haciendo que la propiedad amounts sea reactiva.
    const { amounts } = toRefs(props);

    /* ==== Función amountToPixels convierte el monto en pixele ==== */
    const amountToPixels = (amount) => {
        const minX = Math.min(...amounts.value); // Valor mínimo del array.
        const maxX = Math.max(...amounts.value); // Valor máximo del array.
        const amountAbs = amount + Math.abs(minX); // Valor absoluto de la cantidad.
        const minmax = Math.abs(minX) + Math.abs(maxX); // Valor absoluto de la diferencia entre el mínimo y el máximo.        

        return 200 - ((amountAbs * 100) / minmax * 2); // Retornando la cantidad de puntos en el eje y para la línea de costos.
    }

    const zero = computed(() => {
        return amountToPixels(0);
    }); // Función que retorna la cantidad del eje y donde se encuentra la línea central en cero.

    /* ==== Función de unión de puntos ==== */
    const points = computed(() => {
        const total = amounts.value.length; // Cantidad de elementos en el array.

        // Retornando los puntos para la línea.
        return amounts.value.reduce((points, amount, index)=> {
            // points = puntos anteriores.
            // amount = cantidad de puntos en el eje y.
            // index = índice del elemento en el array.
            const x = (300 / total) * (index + 1); // Cantidad de puntos en el eje x.
            const y = amountToPixels(amount); // Cantidad de puntos en el eje y.
            return `${points} ${x} ${y}`; // Concatenando los puntos.
        }, "0,100");
    });
</script>

<style scoped>
    svg {
        width: 100%;
    }

    p {
        text-align: center;
    }
</style>
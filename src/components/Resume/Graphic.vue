<template>
    <div>
        <svg viewBox="0 0 300 200" >
            <!-- Línea central -->
            <line 
                stroke="#c4c4c4"
                stroke-width="2"
                x1="0" y1="100" x2="300" y2="100"
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

    const amountToPixels = (amount) => {
        const minX = Math.min(...amounts.value); // Valor mínimo del array.
        const maxX = Math.max(...amounts.value); // Valor máximo del array.

        return `${minX} ${maxX}`;
    }

    const points = computed(() => {
        const total = amounts.value.length; // Cantidad de elementos en el array.

        // Retornando los puntos para la línea.
        return Array(total).fill(100).reduce((points, amount, index)=> {
            // points = puntos anteriores.
            // amount = cantidad de puntos en el eje y.
            // index = índice del elemento en el array.
            const x = (300 / total) * (index + 1); // Cantidad de puntos en el eje x.
            const y = amountToPixels(amount); // Cantidad de puntos en el eje y.
            console.log(y);
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
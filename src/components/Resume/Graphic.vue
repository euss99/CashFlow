<template>
    <div>
        <!-- Los eventos: touchstart, touchmove y touchend se utilizan para detectar el desplazamiento del dedo sobre la pantalla. -->
        <svg 
            @touchstart="tap"
            @touchmove="tap"
            @touchend="untap"
            viewBox="0 0 300 200" 
        >
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
                v-show="showPointer"
                stroke="#04b500"
                stroke-width="2"
                :x1="pointer" y1="0" :x2="pointer" :y2="200"
            />
        </svg>
        <p>Últimos 30 días.</p>
    </div>
</template>

<script setup>
    import { defineProps, toRefs, computed, ref, defineEmits } from 'vue';

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

    const showPointer = ref(false); // Variable que indica si se muestra el puntero.
    const pointer = ref(0); // Variable que indica la posición del puntero.

    const emit = defineEmits(['select']); // Función que permite emitir eventos.

    /* ==== Función que se ejecuta cuando se toca la pantalla ==== */
    const tap = ({target, touches}) => {
        // target = elemento que se está tocando.
        // touches = array con los puntos de toque.
        showPointer.value = true; // Mostrando el puntero.
        const elementWidth = target.getBoundingClientRect().width; // Ancho del elemento.
        const elementX = target.getBoundingClientRect().x; // Posición en el eje x del elemento.
        const touchX = touches[0].clientX; // Posición en el eje x del toque.
        
        pointer.value = ((touchX - elementX) * 300)/ elementWidth; // Posición en el eje x del puntero.

        emit('select', pointer.value); // Emitiendo el evento select.
    }

    /* ==== Función que se ejecuta cuando se deja de tocar la pantalla ==== */
    const untap = ({target, touches}) => {
        showPointer.value = false; // Ocultando el puntero.
    }
</script>

<style scoped>
    svg {
        width: 100%;
    }

    p {
        text-align: center;
    }
</style>
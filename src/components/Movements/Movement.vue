<template>
    <div class="movement">
        {{title}}
        {{description}}
        {{amount}}
    </div>
</template>

<script setup>
    import { toRefs, defineProps } from 'vue';

    const props = defineProps({
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        amount: {
            type: String,
        },
        
    });

    const { title, description, amount } = toRefs(props);
</script>
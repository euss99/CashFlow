<template>
    <!-- Suspense es un componente que recibe dos slots: default y fallback -->
    <Suspense>
        <template #default>
            <!-- Componente que queremos mostrar cuando async termine de cargar -->
            <HomePage />
        </template>
        <template #fallback>
            <SplashScreen /> <!-- Componente que queremos mostrar mientras async carga -->
        </template>
    </Suspense>
</template>

<script>
    import SplashScreen from "./components/SplashScreen.vue";
    import { defineAsyncComponent } from "vue"; // defineAsyncComponent es una función que nos permite cargar componentes de forma asíncrona.

    export default {
        name: "App",
        components: {
            SplashScreen,
            HomePage: defineAsyncComponent(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(import("./components/HomePage.vue"));
                    }, 3000);
                });
            }), // defineAsyncComponent recibe una función que retorna una promesa que resuelve el componente que queremos cargar.
        },
    };
</script>

<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

const message = ref(""); // Stocke la réponse de l'API

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:9090/hello"); // Appel API
    if (!response.ok) throw new Error("Erreur lors de la requête");
    
    message.value = await response.text(); // Récupérer la réponse
  } catch (error) {
    console.error("Erreur :", error);
    message.value = "Erreur de connexion à l'API";
  }
});
</script>

<template>
  <div class="p-4 text-center">
    <h1 class="text-2xl font-bold">Test Vue.js & Spring Boot</h1>
    <p class="mt-4 text-lg">{{ message }}</p>
  </div>
</template>

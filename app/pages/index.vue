<template>
  <div>
    <h1>Home</h1>
    <Button class="w-fit px-2" icon="pi pi-check" @click="increment"
      >Increment me: {{ count }}</Button
    >
  </div>
</template>

<script setup lang="ts">
const { count } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();
</script>

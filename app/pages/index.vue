<template>
  <div>
    <h1>Home</h1>
    <div class="flex flex-col gap-2">
      <Button class="w-fit px-2" icon="pi pi-check" @click="increment"
        >Increment me: {{ count }}</Button
      >
      <Button class="w-fit px-2" icon="pi pi-check" @click="testFetch"
        >Test Fetch</Button
      >
      <p v-for="item in testResponse" :key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { count } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();

const testResponse = ref<undefined | string[]>(undefined);

async function testFetch() {
  const response = await $fetch('/api/test-db');
  testResponse.value = response.map((item) => item.name);
}
</script>

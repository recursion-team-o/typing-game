<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderAll from "@/components/HeaderAll.vue";
import { ref, onMounted } from "vue";

const headerRef = ref<InstanceType<typeof HeaderAll>>();
const screenHeight = ref<number>(window.innerHeight);
let headerHeightStyle = ref<string>();
let pageHeightStyle = ref<string>();
onMounted(() => {
  const headerHeight = ref<number>(headerRef.value.$el.clientHeight);
  const headerHeightVh = ref<number>(
    (headerHeight.value / screenHeight.value) * 100
  );
  headerHeightStyle.value = headerHeightVh.value + "vh";
  const pageHeightVh = ref<number>(100 - headerHeightVh.value);
  pageHeightStyle.value = pageHeightVh.value + "vh";
});
</script>

<template>
  <div>
    <HeaderAll ref="headerRef" :style="{ height: headerHeightStyle }" />
    <RouterView :style="{ height: pageHeightStyle }" />
  </div>
</template>

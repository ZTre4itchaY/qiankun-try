<template>
    <div id="sub-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import microAppRoutesConfig from '@/config/config'
import { registerMicroApps, start } from "qiankun"

onMounted(() => {
     registerMicroApps(microAppRoutesConfig)
    start({
        sandbox: {
            experimentalStyleIsolation: true // 样式隔离
        }
    })
})

</script>

<style scoped></style>
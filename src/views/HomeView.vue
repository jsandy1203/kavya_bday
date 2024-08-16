<template>
  <div>
   <Typewriter @changeComp="changeRoute"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import Typewriter from '@/components/Typewriter.vue';
function changeRoute() {
  router.push({
    name: "fireworks"
  })
}
</script>

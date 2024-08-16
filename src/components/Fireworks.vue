<template>
  <div id="fireworks">
    <div class="textbirthday" v-if="showText">
      <img class="imgg" :src="phoebeSinging" alt="" style="border-radius: 48%; width: 240px; height: 240px; text-align: center;">
      <span class="rainbow-text">Hey Kavyaaaaa</span>
      <span class="rainbow-text" style="margin-top: 0.5rem;">Happy Bdayy!</span>
      <div class="finaltext" v-if="showButton">
        <span style="padding: 0 0.25rem;">Hope you liked it!...
          <span>party isthav ga?
          </span>
        </span>
      </div>
      <button v-if="showButton" style="text-align: center; margin-top: 1rem;border: 1px solid; padding: 0.5rem; border-radius: 10px; color: aliceblue"
					@click="changeComp">Ok</button>
    </div>
    <vue-damp-fireworks :boxHeight="740"></vue-damp-fireworks>
  </div>
</template>

<script setup>
import phoebeSinging from "../assets/phoebe_sing.jpg";
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const showText = ref(false);
const showButton = ref(false);
const  router = useRouter();
onMounted(() => {
  setTimeout(() => {
    showText.value = true;
  }, 5000); // Show text after 5 seconds
  setTimeout(() => {
    showButton.value = true;
  }, 10000)
});
function changeComp() {
  router.push({
    name: "notes"
  })
}
</script>

<style scoped>
#fireworks {
  background-color: #000004;
  height: 100vh; /* Ensure the container takes full height */
  display: flex;
  justify-content: center;
  align-items: center;
}

.textbirthday {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999999999 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Agbalumo', sans-serif;
  color: linear-gradient(90deg,
      red, orange, yellow, green, blue, indigo, violet);
}

.rainbow-text {
  margin-top: 1rem;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(90deg,
      red, orange, yellow, green, blue, indigo, violet);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: bounce 2s infinite; /* Apply bounce animation */
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0); /* Start and end at initial position */
  }
  40% {
    transform: translateY(-20px); /* Move up */
  }
  60% {
    transform: translateY(-15px); /* Move down slightly */
  }
}
.finaltext{
  color: aliceblue;
  font-weight: 400;
  font-size: 18px;
  padding-left: 1rem;
}
@media (max-width: 650px) {
  .rainbow-text {
    font-size: 2rem;
  }
  .imgg {
    width: 150px !important;
    height: 150px !important;
    opacity: 1.5;
    border: 1px solid white;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
  .finaltext { 
    width: 350px;
  }
}
</style>

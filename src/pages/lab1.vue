<template>
  <div class="main_div">
      ЛАБА 1
      
    <TextBox/>
  </div>
</template>

<script>
import TextBox from '../components/textbox.vue'

export default {
  name: 'lab1',
  components: {
    TextBox
  }
}
</script>

<style>
.main_div {
    height: 80%;
    width: 75%;
    border: 2px solid;
    display: flex;
    flex-direction: column;
}
</style>
<template>
   <div class="group_row">
      <label class="switch">
         <input :value="value" @input="$emit('update:value', $event.target.checked)" type="checkbox" @change="func">
         <span class="slider round"></span>
      </label>
      <label class="labelText">{{ labelText }}</label>
   </div>
</template>

<script>
export default {
   name: "formSwitch",
   props: ['labelText','value'],
   emits: ['update:value'],
}
</script>

<style scoped>

.group_row {
   height: 57px;
   display: flex;
   align-items: center;
   margin: 1vh;
}

.switch {
  
  position: relative;
  width: 60px;
  height: 34px;
}

.switch input { display:none; }

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2e38ef;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2e38ef;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.labelText {
   margin-left: 15px;
   font-size: 18px;
}

</style>
<template>
   <div class="btn_div">
      <button type="button">{{ buttonText }}</button>
   </div>
</template>

<script>

export default {
   name: "formButton",
   props: {
      buttonText: { type: String }
   }
}
</script>

<style scoped>
.btn_div{
   display: flex;
   flex-direction: row-reverse;
   height: 41px;
   margin: 1vh;
}
button {
   padding: 10px 20px;
   border-radius: 4px;
   border: none;
   cursor: pointer;

   background: #2e38ef;
   color: #fff;
   box-shadow: 0 0 5px rgba(0,0,0,0.5);
   font-size: 18px;
   font-weight: bold;
}

button:hover {
   box-shadow: 0 0 5px rgba(0,0,0,0.8);
}

button:active {
   box-shadow: 0 0 5px rgba(0,0,0,1);
   background: #2e38ef;
}

</style>
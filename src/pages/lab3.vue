<template>
  <div class="main_div">
    <div class="group_row_">
            <img src="../assets/logo.svg">
            <p class="title_name">Ассиметричное шифрование</p>
    </div>
    <div class="inp">
      <div class="input_div">
        <textInput labelText='Шифруемое сообщениe' v-model:value="inputs.message" :Width="70" :countWidthLine="100" :countWidth="100"/>
        <div class = "r_inp">
        <formInput v-model:value="inputs.N" :Width="100" labelText="N" :reference="true" textTooltip="Натуральное число больше 1." :countWidthLine="100" :countWidth="100"/>
        
        <formButton @click="clickButton" buttonText="Зашифровать"/>
        </div>
        </div>
    </div>
    <ans4div :lw="45" :rt="2" v-if="ans" :text="sometext"/>
  </div>
</template>

<script>
import textInput from '../components/textbox.vue'
import formInput from '../components/formInput.vue'
import formButton from '../components/formButton.vue'
import ans4div from '../components/ans4div.vue'
import methods3 from '../functions/RSA.js'
export default {
  name: 'lab3',
  components: {
    textInput,
    formInput,
    formButton,
    ans4div,
  },
  data(){
    return {
      sometext:{},
      ans: false,
      inputs:{
        message:'Пример текста.',
        N:'5'
      },
    }
  },
  methods:{
    clickButton(){
        let params = {
          message: this.inputs.message, N:this.inputs.N
        };
        let ans = methods3(params);
        this.sometext = {
          message: ans.message,
          binary_message: ans.message_num,
          encode: ans.encode,
          binary_encode: ans.decode,
        }
        this.ans = true;
    }
  }
}
</script>

<style>




.inp_var{
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1vh;
}
.r_inp{
  width:30%;
  height: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.inp{
  display: flex;
    flex-direction: column;
}
.main_div {
    height: 80%;
    width: 75%;
   margin: 0px auto;
   padding: 1vw 3vw 5vw 3vw;
   background: #fff;
   box-shadow: 0 0 5px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
}
.input_div{
  display: flex;
  flex-direction: row;
}
.group_row_ {
   display: flex;
   justify-content: flex-start;
   align-items: center; 
}
.title_name {
   text-align: left;
   font-size: 20pt;
   font-weight: bold;
}
img {
   width: 50px;
   height: auto;
   margin-right: 15px;
}
</style>
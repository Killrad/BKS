<template>
  <div class="main_div">
    <div class="group_row_">
            <img src="../assets/logo.svg">
            <p class="title_name">Блочное шифрование</p>
    </div>
    <div class="inp">
      <div class="input_div">
        <textInput labelText='Шифруемое сообщениe' v-model:value="inputs.message" :Width="100" :countWidthLine="100" :countWidth="100"/>
        </div>
        <div class="input_div k">
            <formInput v-model:value="inputs.K.K1" :Width="20" labelText="K1" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
            <formInput v-model:value="inputs.K.K2" :Width="20" labelText="K2" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
            <formInput v-model:value="inputs.K.K3" :Width="20" labelText="K3" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
            <formInput v-model:value="inputs.K.K4" :Width="20" labelText="K4" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
        </div>
        <div class="input_div k">
            <formInput v-model:value="inputs.K.K5" :Width="20" labelText="K5" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
            <formInput v-model:value="inputs.K.K6" :Width="20" labelText="K6" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
            <formInput v-model:value="inputs.K.K7" :Width="20" labelText="K7" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
            <formInput v-model:value="inputs.K.K8" :Width="20" labelText="K8" :reference="true" textTooltip="Целое четырёхзначное число." :countWidthLine="100" :countWidth="100"/>
        </div>     
        <formButton @click="clickButton" buttonText="Зашифровать"/>
    </div>
    <ans4div :lw="30" :rt="2" v-if="ans" :text="sometext"/>
  </div>
</template>

<script>
import textInput from '../components/textbox.vue'
import formInput from '../components/formInput.vue'
import formButton from '../components/formButton.vue'
import ans4div from '../components/ans4div.vue'
import methods2 from '../functions/BlockCiphers.js'
export default {
  name: 'lab2',
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
        K:{
            K1:'1123',
            K2:'7265',
            K3:'3304',
            K4:'0350',
            K5:'6431',
            K6:'7782',
            K7:'9202',
            K8:'9955',
        }
      },
    }
  },
  methods:{
    clickButton(){
        let ind = 0;
        let arr = [];
        for (let key in this.inputs.K){
          arr[ind]=this.inputs.K[key];
          ind++;
        }
        console.log(arr);
        let params = {
          message: this.inputs.message, key:arr
        };
        let ans = methods2(params);
        let str = ''
        ans.encode.forEach(el =>{
          el.forEach(el2 =>{
            str = str + el2;
          })
        })
        this.sometext = {
          message: ans.message,
          binary_message: ans.binary_message,
          encode: str.split(''),
          binary_encode: ans.encode_binary,
        }
        this.ans = true;
    }
  }
}
</script>

<style>



.k{
    display: flex;
    justify-content: space-between;
}
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
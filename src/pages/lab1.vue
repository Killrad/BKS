<template>
  <div class="main_div">
    <div class="group_row_">
            <img src="../assets/logo.svg">
            <p class="title_name">Поточные Шифры</p>
    </div>
    <div class="inp">
      <div class="input_div">
        <textInput labelText='Шифруемое сообщениe' v-model:value="inputs.message" :Width="70" :countWidthLine="100" :countWidth="100"/>
        <div class = "r_inp">
        <formInput v-model:value="inputs.A" :Width="43" labelText="A" :reference="true" textTooltip="Переменная для асинхронного метода." :countWidthLine="100" :countWidth="100"/>
        <formInput v-model:value="inputs.B" :Width="43" labelText="B" :reference="true" textTooltip="Переменная для асинхронного метода." :countWidthLine="100" :countWidth="100"/>
        
        <formInput v-model:value="inputs.Gamma" :Width="43" labelText="Гамма" :reference="true" textTooltip="Переменная для асинхронного метода." :countWidthLine="100" :countWidth="100"/>
        <formInput v-model:value="inputs.e" :Width="43" labelText="e" :reference="true" textTooltip="Переменная для асинхронного метода." :countWidthLine="100" :countWidth="100"/>
        
        
        </div>
        </div>
        <div class="inp_div">
          <div class="inp_var">
            <formSwitch v-model:value="inputs.asyncM" labelText="Асинхронный"/>
            <formInput v-if="inputs.asyncM" :reference="true" textTooltip="Шаг с которого считается Гамма штрих." v-model:value="inputs.T" :Width="30" labelText="T" :countWidthLine="100" :countWidth="100"/>
          </div>
          <formButton buttonText="Зашифровать"/>
        </div>
    </div>
    <ans4div :text="sometext"/>
  </div>
</template>

<script>
import textInput from '../components/textbox.vue'
import formInput from '../components/formInput.vue'
import formButton from '../components/formButton.vue'
import formSwitch from '../components/formSwitch.vue'
import ans4div from '../components/ans4div.vue'
export default {
  name: 'lab1',
  components: {
    textInput,
    formInput,
    formButton,
    formSwitch,
    ans4div,
  },
  data(){
    return {
      sometext:{
        m1:['1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3'],
        m2:['11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',],
        m3:['1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3',
          '1','2','3'],
        m4:['11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',
        '11111111','22222222','33333333',],
      },
      inputs:{
        message:'',
        A:'',
        B:'',
        Gamma:'',
        e:'',
        asyncM : false,
        T:''
      },
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
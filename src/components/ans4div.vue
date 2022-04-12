<template>
  <div class="ans">
      <div class="mes_text d">
        <label v-for="(item, index) in text.message" @mouseenter="MO(index)" @mouseleave="MO(null)" v-bind:class="{ HOV: HOV(index)}"   :key="index">{{item}}</label>
      </div>
      <div class="mes_bit d bin">
        <label v-for="(item, index) in text.binary_message" @mouseenter="MO(index)" @mouseleave="MO(null)" v-bind:class="{ HOV: HOV(index)}"   :key="index">{{item}}</label>
      </div>
      <div class="shifr_text d ">
        <label v-for="(item, index) in text.encode" @mouseenter="MO(index)" @mouseleave="MO(null)" v-bind:class="{ HOV: HOV(index)}"   :key="index">{{item}}</label>
      </div >
      <div class="shifr_bit d bin">
        <label v-for="(item, index) in text.binary_encode" @mouseenter="MO(index)" @mouseleave="MO(null)" v-bind:class="{ HOV: HOV(index)}"   :key="index">{{item}}</label>
      </div >
    </div>
</template>

<script>
export default {
    props:['text'],
    name:'ans4div',
    components:{
    },
    data(){
        return{
            Hindex:null
        }
    },
    methods:{
     MO(index) {
         this.Hindex = index;
     },
     HOV(index){
         return this.Hindex == index;
     }
    }
}
</script>

<style>
:root{
--border_col: #fff;
--border_width:2px;
--border_radius:15px;
}
.HOV{
    background: #2e38ef;
    border-radius: 15px;
    color: #fff;
}
.ans label {
    font-family: monospace;
    font-size: 2rem;
    padding: 0.5rem;
    transition: background 1s ease-out;
    transition: color 1s ease-out;
}
.bin label{
  font-size: 1rem;
  padding: 0.25rem;
}
.bin{
  padding: 0.25rem;
}

.ans div::-webkit-scrollbar {
  width: 10px;
}
.ans div::-webkit-scrollbar-track {
  background-color:#fff;
  margin-block-start: 1vh;
  margin-block-end: 1vh;
  border-radius: 10px;
}
.ans div.section::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.ans div::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color:#2e38ef;
}

.ans{
  height: 370px;
  overflow-x: hidden;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
}
.d {
  background:  rgba(0,0,0,0.09);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}
.ans .mes_text{
  padding: 0.25rem;
  height: 170px;
  width: 30%;
  margin: 0px;
  overflow-x: hidden;
  overflow-y: auto;
    border: var(--border_width) solid var(--border_col);
    border-right-color: #2e38ef;
    border-bottom-color: #2e38ef;
    border-bottom-right-radius: var(--border_radius);
    border-top-left-radius: var(--border_radius);
}
.ans .mes_bit{
  
  height: 170px;
  width: 60%;
  margin: 0px;
  margin-left: calc(-1*var(--border_width));
  
  overflow-x: hidden;
  overflow-y: auto;
  border: var(--border_width) solid var(--border_col);
    border-left-color: #2e38ef;
    border-bottom-color: #2e38ef;
    border-top-right-radius: var(--border_radius);
    border-bottom-left-radius: var(--border_radius);

}
.ans .shifr_text{
  padding: 0.25rem;
  height: 170px;
  width: 30%;
  margin: 0px;
  margin-top:calc(-1*var(--border_width));
  
  overflow-x: hidden;
  overflow-y: auto;
    border: var(--border_width) solid var(--border_col);
    border-right-color: #2e38ef;
    border-top-color: #2e38ef;
    border-top-right-radius: var(--border_radius);
    border-bottom-left-radius: var(--border_radius);
}
.ans .shifr_bit{
  
  
  height: 170px;
  width: 60%;
  
  margin: 0px;
  margin-top:calc(-1*var(--border_width));
  margin-left: calc(-1*var(--border_width));
  overflow-x: hidden;
  overflow-y: auto;
    border: var(--border_width) solid var(--border_col);
    border-left-color: #2e38ef;
    border-top-color: #2e38ef;
    border-bottom-right-radius: var(--border_radius);
    border-top-left-radius: var(--border_radius);
}

</style>
<template>
   <div class="group" v-bind:style="'--width:'+Width+'%'">
      <div class="group_rows">
         <input :value="value" @input="funcValidate" @blur="$emit('change')" v-bind:class="{error: error}" type="text" v-bind:style="'--width:'+countWidth+'%'">
         <label>{{ labelText }}</label>
         <div v-if="reference" class="reference">
            <img v-show="visible_ref" src="../assets/question.svg">
            <span v-show="visible_ref">{{ textTooltip }}</span>
         </div>
      </div>
      <a v-bind:style="'--width:'+countWidthLine+'%'"></a>
         <p v-if="error">{{ textError }}</p>
      
   </div>
</template>

<script>

export default {
   name:'formInput',
   props: {
      labelText: String,
      reference: {
         type: Boolean,
         default: false
      },
      visible_ref: {
         type: Boolean,
         default: true
      },
      validate: Boolean,
      textError: String,
      value: String,
      validError: Boolean,
      textTooltip: String,
      countWidth: String,
      countWidthLine: String,
      Width: String
   },
   emits:['update:value', 'change', 'update:validError'],
   data() {
      return {
         error: false
      }
   },
   methods: {
      funcValidate(el) {
         //this.error = !this.validate.test(el.target.value)
         this.$emit('update:value', el.target.value)
         this.$emit('validError', this.error)
      }
   }
}
</script>

<style scoped>

.group {
   height: 57px;
   margin: 1vh;
   width: var(--width);
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
}

.group_rows {
   position: relative;
   display: flex;
   width: 100%;
}

.group_rows input {
   cursor: pointer;
   outline: none;
   display: block;
   background: rgba(0,0,0,0.07);
   border: solid 1px #f2f2f2;
   border-radius: 5px 5px 0px 0px;
   border-bottom-color: black;
   border-bottom-width: 1.5px;
   padding: 25px 15px 0px 15px;
   font-size: 20px;
   width: var(--width);
   height: 30px;
}

a {
   display: inline-block;
   color: transparent;
   text-decoration: none;
   position: relative;
   width: var(--width);
   margin-top: -2px;
}


a:after {
    display: block;
    content: "";
    background-color: #2e38ef;
    height: 2px;
    width: 0%;
    left: 50%;
    position: absolute;
    -webkit-transition: width .4s ease-in-out;
    -moz--transition: width .4s ease-in-out;
    transition: width .4s ease-in-out;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    transform: translateX(-50%);
}

.group_rows:hover + a:after {
    width: 100%;
}


.group_rows input:hover {
   background: rgba(0,0,0,0.09);
}

.group_rows input:focus {
   outline:none;
   background: rgba(0,0,0,0.12);
   border-bottom-color: #2e38ef;
   border-bottom-width: 2px;
}

.group_rows label {
   cursor: pointer;
   display: block;
   position: absolute;
   left: 15px;
   top: 5px;
   -webkit-transition: .2s;
   transition: .2s;
   font-size: 14px;
   color: rgba(0,0,0,0.65);
   padding: 0px;
}

.group_rows input:valid + label,
.group_rows input:focus + label {
  top: 0;
  font-size: 14px;
}

.reference {
   position: absolute;
   display: inline-block;
   margin-left: calc(100% - 15px);
   margin-top: -13px;
   height: 27px;
   width: 30px;
}

img {
   height: 23px;
   width: auto;
}

.reference span {
   visibility: hidden;
   width: 135px;
   min-height: 28px;
   background-color: #555;
   color: #fff;
   font-size: 14px;
   text-align: center;
   padding: 5px 5px;
   border-radius: 6px;

   position: absolute;
   z-index: 1;
   top: -8px;
   left: 105%;
   margin-left: 10px;

   opacity: 0;
   transition: opacity 0.3s;
   box-shadow: 0 0 7px rgba(0,0,0,0.6);
}

.reference span:after {
   content: "";
   position: absolute;
   top: 13px;
   right: 100%;
   margin-left: -6px;
   border-width: 6px;
   border-style: solid;
   border-color: transparent #555 transparent transparent;
}

.reference:hover span {
   visibility: visible;
   opacity: 1;
}

.reference:hover img {
   box-shadow: 0 0 7px rgba(0,0,0,0.7);
   border-radius: 60%;
}

.error {
   box-shadow: 0 0 11px red;
}

.group p {
   color: rgba(255, 0, 0, 0.7);
}

@media (max-width: 900px) {
.reference {
   position: relative;
   display: inline-block;
   height: 10px;
   width: 30px;
}

.reference span {
   visibility: hidden;
   width: 135px;
   height: auto;
   background-color: #555;
   color: #fff;
   font-size: 14px;
   text-align: center;
   padding: 5px 5px;
   border-radius: 6px;

   position: absolute;
   z-index: 1;
   top: 50%;
   left: 50%;
   margin-left: -115px;
   margin-top: 25px; 

   opacity: 0;
   transition: opacity 0.3s;
   box-shadow: 0 0 7px rgba(0,0,0,0.6);
}

.reference span:after {
   content: "";
   position: absolute;
   left: 96%;
   margin-top: -22px;
   margin-left: -30px; 
   border-width: 5px;
   border-style: solid;
   border-color: transparent transparent #555;
}

.reference:hover span {
   visibility: visible;
   opacity: 1;
}
}
</style>

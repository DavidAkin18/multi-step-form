<template>
    <form  >
        <div class="plans">
            <div class="input-label" v-for="item in planList" :key="item.id">
                <input type="radio" class="radio" :id="item.inputID" :name="item.name" v-model="selectedOption" :value="item" >
                <label :for="item.inputID" class="radio-ui">
                    <div class="logo"><img :src="item.planImage" :alt="item.name" /></div>
                    <div class="text">
                        <p class="month">{{ item.name }}</p>
                        <span class="p">${{timePeriod === 'monthly' ? item.price.monthly : item.price.yearly  }}/mo</span>
                        <p v-if="timePeriod !== 'monthly'" class="p">2 month free</p>
                    </div>
                </label>
            </div>
        </div>
       

        <div class="plan-type">
            <div class="mon" @click="updateTimePeriod('monthly')" :class="{ 'yo': timePeriod ==='monthly' }"  id="mon">monthly</div>
            <div class="roll" @click="!updateTimePeriod" :class="{ 'rol': timePeriod !== 'yearly' }"><span class="roller" ></span></div>
            <div class="yea" @click="updateTimePeriod('yearly')" :class="{ 'mo': timePeriod === 'yearly' }">yearly</div>
        </div>
        <div id="submit">
            <button id="btn-back" class="btn-back"><router-link id="btn-back" to="/">Go Back</router-link></button>
            <button id="btn-forward" @click="submitSelection" >Next step</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'
export default {
    data(){
        return{
            selectedOption:null,
            isToggle:false,
            planList:[
                {
                    id:1, 
                    name:'Arcade', 
                    price:{
                        monthly:9,
                        yearly:9 * (12 - 2)
                    },
                    planImage:require('@/assets/images/icon-arcade.svg'),
                    inputID:'arcade'
                },
                {
                    id:2, 
                    name:'Advanced', 
                    price:{
                        monthly:12,
                        yearly:12 * (12 - 2)
                    },
                    planImage:require('@/assets/images/icon-advanced.svg'),
                    inputID:'advance'
                },
                {
                    id:3, 
                    name:'Pro', 
                    price:{
                        monthly:15,
                        yearly:15 * (12 - 2)
                    },
                    planImage:require('@/assets/images/icon-pro.svg'),
                    inputID:'pro'
                }
            ]
        }
    },
    computed:{
        timePeriod(){
            return this.$store.getters.getTimePeriod
        }
    },
    methods:{
        submitSelection() {
            if (this.selectedOption) {
                this.$store.dispatch('selectOption', this.selectedOption);
                this.$router.push('/third' );
            } else{
                alert("Please select an option before proceeding.")
            }
        },
        updateTimePeriod(period){
            this.$store.dispatch('updateTimePeriod', period);
        }
    }

}
</script>

<style scoped>
.bill-plan{
    display: flex;
    justify-content: center;
    padding: 12px 0;
    background: hsl(217, 100%, 97%);
    border-radius: 7px;
    box-shadow: 0px 2px 2px 1px #eff1ff85;
}
.form-group-checkout{
    flex-direction: row;
    gap: 15px;
    cursor: pointer;
}

.checkbox{
    position: relative;
    height: 20px;
    width: 35px;
    background: hsl(213, 96%, 18%);
    border-radius: 20px;
}
.checkbox::before{
    content: "";
    position: absolute;
    height: 12px;
    width:12px;
    background: hsl(0, 0%, 100%);
    border-radius: 100%;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s ease;
}

.check{
    opacity: 0;
    height: 1px;
    width: 1px;
    position: absolute;
    top: 0;
    left: 0;
}
.check:checked + .checkbox::before{
    transform: translate(17px, -50%);
}
input[type="checkbox"]:checked + .checkbox::before{
    transform: translate(17px, -50%);
}
.form-item-radio{
    border: solid;
}


.plan-type .mon{
    color: hsl(229, 24%, 87%);
    font-weight: bold;
    font-size: 16px;
}
.plan-type  .yea{
    font-weight: bold;
    font-size: 16px;
    color: hsl(229, 24%, 87%);
}

form{
    gap: 15px;
    margin-top: 30px;
}
.bl{
    color:  hsl(213, 96%, 18%);
}
input[type ='radio']{
    display: none;
}

input[ type= "radio" ]:checked + label{
    background-color:hsl(229, 24%, 87%) ;
    border: 2px solid hsl(243, 100%, 62%);
}
.text .p{
    color:hsl(231, 11%, 63%) ;
}
.plan-type{
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    background: hsl(217, 100%, 97%);
    padding: 10px;
    border-radius: 10px;
}
.plan-type .yo{
    color: hsl(213, 96%, 18%);
    font-weight: bold;
    font-size: 16px;
}
.plan-type .mo{
    color: hsl(213, 96%, 18%);
    font-weight: bold;
    font-size: 16px;
}

.roll{
    background: hsl(213, 96%, 18%);
    width: 10%;
    color: hsl(217, 100%, 97%);
    border-radius: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;  
}
.roller{
   background: hsl(0, 0%, 100%);
   border-radius: 40px;
   margin: 2px;
   height: 10px;
   width: 10px;
}
.rol{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.submit{
    display: flex;
    justify-content: space-between;
    background: hsl(0, 0%, 100%);
    padding: 10px;
  }
  #btn-back{
    background: inherit;
    color:  hsl(231, 11%, 63%);
    border: none;
    padding: 10px ;
    font-weight: bold;
    font-size: 14px;
  }
  #btn-forward{
    background: hsl(213, 96%, 18%);
    color: hsl(0, 0%, 100%);
    padding: 10px ;
    font-weight: bold;
    font-size: 14px;
    border: none;
    border-radius: 4px;
  }

label{
     position: relative;
     color: hsl(213, 96%, 18%);
     border: 2px solid hsl(231, 100%, 99%);
     border-radius: 10px;
     padding:20px 10px ;
     cursor: pointer;
}
.label-text{
    display: flex;
    align-items: center;
    gap: 10px;
}
  @media (min-width:1024px){
   
    .plans{
      display:flex;
      justify-content: space-between;
    }
    .label-text{
      display: block;
    }
    #when{
        color: hsl(213, 96%, 18%);
        font-size: 14px;
    }
    .text p, h3{
      line-height: 25px;
    }
    .text p{
        font-size: 16px;
    }
    .text h3{
        font-weight: 400;
        color: hsl(213, 96%, 18%);
    }
    .logo{
        line-height: 80px;
    }
    .input-label{
        width: 30%;
        padding: 0 8px;
    }
    #submit{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width: 90%;
        bottom: -100px;
    }
  }
</style>
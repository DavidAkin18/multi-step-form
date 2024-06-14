<template>
  <form >
    <div class="plans" >
        <!-- <div class="form-group-check" v-for="item in addOnList" :key="item.id">
            <label for="service" class="form-group-check-container">
                <input type="checkbox" >
                <span class="checkbox-icon"></span>
                <div class="adds-details">
                    <div>
                        <p>{{ item.addName }}</p>
                        <span>{{ item.description }}</span>
                    </div>
                    <p class="adds-price"> ${{ item.planPrice.monthly }}/mo</p>
                </div>
            </label>
        </div> -->
            <!-- <div class="input-label">
                <input type="checkbox" name="plan" id="service" class="service" value="Online-service" checked="checked" v-model="selectedOptions">
                <label for="service">
                    <div class="label-text">
                        <div class="text">
                            <h3>Online service</h3>
                            <p>Access to multiplayer games</p>
                        </div>
                        <div>
                            <p>+$1/mo</p>
                        </div>
                    </div>
                </label>
            </div>

            <div class="input-label">
                <input type="checkbox" name="plan" id="storage" value="Larger-storage" class="storage" v-model="selectedOptions">
                <label for="storage">
                    <div class="label-text">
                        <div class="text">
                            <h3>Larger storage</h3>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                        <div>
                            <p>+$2/mo</p>
                        </div>
                    </div>
                </label>
            </div>

            <div class="input-label">
                <input type="checkbox" name="plan" id="profile" value="Customizable-profile" class="profile" v-model="selectedOptions">
                <label for="profile">
                    <div class="label-text">
                        <div class="text">
                            <h3>Customizable profile</h3>
                            <p>Custom theme on your profile</p>
                        </div>
                        <div class="lang">
                            <p>+$2/mo</p>
                        </div>
                    </div>
                </label>
            </div> -->
            <div class="form-group-check" v-for="item in items" :key="item.id">
                <label for="service" class="form-group-check-container">
                    <input type="checkbox" :value="JSON.stringify(item)" @change="updateSelectedItems($event)"  v-model="selectedItems">
                    <span class="checkbox-icon"></span>
                    <div class="adds-details">
                        <div>
                            <p>{{ item.name }}</p>
                            <span>{{ item.description }}</span>
                        </div>
                        <p id="adds-price"> ${{ timePeriod === 'monthly' ? item.money.month : item.money.year }}/mo</p>
                    </div>
                </label>
            </div>
        </div>
        <div class="submit">
            <button id="btn-back" class="btn-back"><router-link id="btn-back" to="/second">Go Back</router-link></button>
            <button id="btn-forward" @click="submitForm">Next step</button>
        </div>
  </form>
</template>

<script>
export default {
    data(){
        return{
            selectedItems: [],
            items:[
                {
                    id:1,
                    name:'Online service',
                    money:{
                        month:1 ,
                        year:1 * (12 - 2)
                    },
                    description:'Access to multiplayer games',
                },
                {
                    id:2,
                    name:'Larger storage',
                    money:{
                        month:2 ,
                        year:2 * (12 - 2)
                    },
                    description:'Extra 1TB of cloud save',
                
                },
                {
                    id:3,
                    name:'Customizable profile',
                    money:{
                        month:2 ,
                        year:2 * (12 - 2)
                    },
                    description:'Custom theme on your profile',
                },
            ]
        }
    }, 
    computed:{
        timePeriod(){
            return this.$store.getters.getTimePeriod
        },
    },
    methods:{
        submitForm(){
            if(this.selectedItems.length > 0){
                this.$router.push('/forth')
            }
            else{
                alert("Please select an option before proceeding.")
            }
        },
        updateSelectedItems(event){
            const item = JSON.parse(event.target.value);
            if(event.target.checked){
                this.selectedItems.push(item);
            }
            else{
                this.selectedItems = this.selectedItems.filter(i => i.id !== item.id)
            }
            return this.$store.dispatch('updateSelectedItems', this.selectedItems) ;
        }
    }
}
</script>
<style scoped>
.form-group-check{
    display: block;
    position: relative;
    cursor: pointer;
    border: 1px solid hsl(231, 11%, 63%);
    padding: 15px 20px;
    border-radius: 7px;
    color: hsl(0, 0%, 100%);
    margin-bottom: 20px;
}
.adds-details{
    padding-left: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.adds-details p{
    font-weight: bold;
    color:  hsl(213, 96%, 18%);
    margin-bottom: 3px;
}
.adds-details span{
    color:  hsl(231, 11%, 63%);
    font-size: 14px;
}
#adds-price{
    font-size: 14px;
    font-weight: 400;
    color:hsl(231, 11%, 63%) ;

}

input{
    position: absolute;
    left: 0;
    top: 0;
    height: 70px;
    opacity: 0;
}
.checkbox-icon{
    height: 20px;
    width: 20px;
    position: absolute;
    background: hsl(0, 0%, 100%);
    border-radius: 5px;
    border: 1px solid hsl(231, 11%, 63%);
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
}
.checkbox-icon::after{
    left: 6px;
    height: 8px;
    width: 5px;
    border: solid hsl(0, 0%, 100%);
    border-width: 0 3px 3px 0 ;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(-45deg);
    transition: all 0.1s;
    content: '';
    position: absolute;
    opacity: 0;
}
.form-group-check-container{
    width: inherit;
}
.form-group-check-container:hover input ~  .checkbox-icon{
    background: #f1f1f1;
}
.form-group-check-container:hover input:checked ~  .checkbox-icon::after{
    opacity: 1;
    transform: rotate(45deg);
}
.form-group-check-container input:checked ~  .checkbox-icon{
    border: none;
    background: hsl(243, 100%, 62%);
}
.form-group-check:has(input:checked){
    background-color:hsl(229, 24%, 87%);
    border: 2px solid hsl(243, 100%, 62%);
}


</style>
<style scoped>
.plans{
    display: flex;
    flex-direction: column;
    gap: 20px;
    border:  red;
}
/* .label-text{
    display: flex;
    align-items: center;
    justify-content:flex-end;
    gap: 2px;
}
input[type ='checkbox']{
    display: none;
    height: 20px;
    width: 20px;
    position: relative;
    top: 30px;
}
label{
     position: relative;
     color: hsl(213, 96%, 18%);
     border: 2px solid hsl(231, 100%, 99%);
     border-radius: 10px;
     padding:10px ;
     padding-left: 20px;
     cursor: pointer;
}
.lang{
    flex-shrink: 1;
}
.text{
    flex-grow: 1;
    padding-left: 10px;
}
.text h3{
    color: hsl(213, 96%, 18%);
    font-size: 16px;
    line-height: 30px;
}
.text > p{
    color:  hsl(231, 11%, 63%);
}
label:before{
    position: absolute;
    left: 2px;
    top: 25px;
    content: '';
    height: 15px;
    width: 15px;
    border: 2px solid blue;
    border-radius: 5px;
}
input[ type= "checkbox" ]:checked + label{
    background-color:hsl(229, 24%, 87%) ;
    border: 2px solid hsl(243, 100%, 62%);
}

input[type ="checkbox"]:checked + label:before{
    height: 7px;
    width: 7px;
    border: 5px solid hsl(243, 100%, 62%);
}*/
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
@media (min-width:500px){
    label{
        padding-left: 40px;
    }
    label:before{
        left: 10px;
    }
    .submit{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width: 90%;
        bottom: -70px;
    }
   
  

}
@media (min-width:1024px){
   
}  

</style>
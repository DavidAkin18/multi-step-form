<template>
   <main>
        <div class="pricing">
            <div class="namePrice">
                <div id="monYear"> 
                    <h4 id="ta" v-if="selectedOption">{{ selectedOption.name }} <span>(Monthly)</span></h4>
                    <router-link to="/second" id="to">Change</router-link> 
                </div>
                <h4 id="price">${{ timePeriod === 'monthly' ? selectedOption.price.monthly : selectedOption.price.yearly }}/mo</h4>
            </div>
            <hr id="hr">
            <ul class="checkbox-items">
                <li v-for="item in selectedItems" :key="item.id" class="namePrice-check" >
                   <p class="money-name">{{ item.name }} </p>
                   <p  class="money-price" v-if="item.money">${{ timePeriod === 'monthly' ? item.money.month : item.money.year  }}/mo</p>
                </li>
            </ul>
        </div>
        <div class="total-price">
            <p class="total-name">Total (per month)</p>
            <h3 class="total">${{ totalPrice + (timePeriod === 'monthly' ? selectedOption.price.monthly : selectedOption.price.yearly)}}/mo</h3>
        </div>

        <div class="submit">
            <button id="btn-back" class="btn-back"><router-link id="btn-back" to="third">Go Back</router-link></button>
            <button id="btn-forward" @click="finishForm">Confirm</button>
        </div>
   </main>
</template>

<script>
export default {
    computed:{
        selectedOption() {
        return this.$store.getters.selectedOption;
        },
        selectedItems() {
            return this.$store.getters.getSelectedItems;
        },
        totalPrice() {
            return this.$store.getters.getTotalPrice
        },
        timePeriod(){
            return this.$store.getters.getTimePeriod
        },

    },
    methods:{
        finishForm(){
            this.$router.push('/message')
        }
    }
};
</script>

<style>


body{
    color:hsl(213, 96%, 18%);
    color: hsl(243, 100%, 62%);
    color:hsl(228, 100%, 84%);
    color:hsl(206, 94%, 87%);
    color:hsl(231, 11%, 63%);
    color:hsl(229, 24%, 87%);
    color:hsl(217, 100%, 97%);
    color: hsl(231, 100%, 99%);
}
.pricing{
    background: #eff1ff82;
    border-radius: 10px;
    color: black;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: 0px 2px 2px 1px #eff1ff82;
    margin-bottom: 30px;
}
.checkbox-items{
    margin-top: 20px;
}
.namePrice{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin-bottom: 20px;
}
.namePrice-check{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
}
.total-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
}
.total-name{
    color: hsl(231, 11%, 63%);
}
#monYear{
    color: hsl(213, 96%, 18%);
    font-weight: 300;
}
#ta{
    font-weight: 400;
}
#price{
    color: hsl(213, 96%, 18%);
    font-weight: 500;
}
.money-name{
    color: hsl(231, 11%, 63%);
}
.money-price{
    color: hsl(213, 96%, 18%);
}
#to{
    color: hsl(231, 11%, 63%);
    text-decoration: underline;
    line-height: 30px;
}
#hr{
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    border-color: hsl(231, 11%, 63%);
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
    background: hsl(243, 100%, 62%);
    color: hsl(0, 0%, 100%);
    padding: 10px ;
    font-weight: bold;
    font-size: 14px;
    border: none;
    border-radius: 4px;
  }
  .total-price{
    color: hsl(243, 100%, 62%);
  }
  @media (min-width:1024px){
    .submit{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width: 90%;
        bottom: -70px;
        padding: 0;
    }
}  
</style>
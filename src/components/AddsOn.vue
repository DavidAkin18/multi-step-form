<template>
    <form>
      <div class="plans">
        <div class="form-group-check" v-for="item in items" :key="item.id">
          <label for="service" class="form-group-check-container">
            <input
              type="checkbox"
              :value="JSON.stringify(item)"
              @change="updateSelectedItems($event)"
              v-model="selectedItems"
            />
            <i class="checkbox-icon" :class="selectedItems.some(selected => selected.id === item.id) ? 'ri-checkbox-fill' : 'ri-checkbox-blank-line'"></i>

           

  
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
        <button id="btn-back" class="btn-back">
          <router-link id="btn-back" to="/second">Go Back</router-link>
        </button>
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
.form-group-check {
  display: block;
  position: relative;
  cursor: pointer;
  border: 1px solid hsl(231, 11%, 63%);
  padding: 15px 20px;
  border-radius: 7px;
  color: hsl(0, 0%, 100%);
  margin-bottom: 20px;
  background-color: hsl(0, 0%, 100%);
  transition: all 0.3s;
}

.adds-details {
  padding-left: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.adds-details p {
  font-weight: bold;
  color: hsl(213, 96%, 18%);
  margin-bottom: 3px;
}

.adds-details span {
  color: hsl(231, 11%, 63%);
  font-size: 14px;
}

#adds-price {
  font-size: 14px;
  font-weight: 400;
  color: hsl(231, 11%, 63%);
}

input {
  position: absolute;
  left: 0;
  top: 0;
  height: 70px;
  opacity: 0;
}

.checkbox-icon {
  font-size: 24px; /* Increase size of the checkbox icon */
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: hsl(231, 11%, 63%);
  transition: all 0.3s;
}

.checkbox-icon.ri-checkbox-blank-line {
  color: hsl(231, 11%, 63%);
}

.checkbox-icon.ri-checkbox-fill {
  color: hsl(243, 100%, 62%); /* Selected color */
}

.form-group-check-container {
  width: inherit;
}

.form-group-check-container input:checked ~ .checkbox-icon {
  color: hsl(243, 100%, 62%); /* When checked */
}

.form-group-check:has(input:checked) {
  background-color: hsl(229, 24%, 87%);
  border: 2px solid hsl(243, 100%, 62%);
}

.submit {
  display: flex;
  justify-content: space-between;
  background: hsl(0, 0%, 100%);
  padding: 10px;
}

#btn-back {
  background: inherit;
  color: hsl(231, 11%, 63%);
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
}

#btn-forward {
  background: hsl(213, 96%, 18%);
  color: hsl(0, 0%, 100%);
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 4px;
}

@media (min-width: 500px) {
  label {
    padding-left: 40px;
  }

  label:before {
    left: 10px;
  }

  .submit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 90%;
    bottom: -70px;
  }
}
</style>

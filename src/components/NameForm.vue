<template>
    <form @submit.prevent="handleSubmit" >
        <label for="fullName"> <div class="error"> <p class="label-name"> Name</p><p v-if="nameError">{{ nameError }}</p></div> 
            <input type="text" name="fullName" id="fullName" placeholder="e.g. Stephen King" v-model="name" >
        </label><br>

        <label for="email"> <div class="error"> <p  class="label-name">Email Address</p><p v-if="emailError" > {{ emailError }}</p></div>
            <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" v-model="email" >
        </label><br>

        <label for="tel"><div class="error"><p  class="label-name">Phone Number </p><p v-if="telError" > {{ telError }} </p></div> 
            <input type="number" name="tel" id="tel" placeholder="e.g. +1 234 567 890" v-model="tel" >
        </label>
       
        <div class="submit">
          <button type="submit" id="btn" >Next Step </button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
    return{
      name:'',
      email:'',
      tel:'',
      nameError:'',
      emailError:'',
      telError:''
    }
  },
  methods:{
    handleSubmit(){
      this.nameError= this.name === '' ? 'This field is required' :''
      this.emailError= this.email === '' ? 'This field is required' :''
      this.telError= this.tel.length < 11 ? 'This field is required':''
      if(!this.nameError && !this.emailError && !this.telError){
        this.$router.push('/second')
      }
    }

  }
}
</script>

<style scoped>
.error{
  color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.label-name{
  color:hsl(213, 96%, 18%);
}
</style>
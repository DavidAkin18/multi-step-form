<template>
  <div class="home">
    <div class="wait">
      <div class="img-div">
        <div class="spade">
          <div class="active">
            <h3 class="num"><router-link to="/">1</router-link></h3>
            <div class="step">
              <p>STEP 1</p>
              <h3><router-link to="/">YOUR INFO</router-link></h3>
            </div>
          </div>

          <div class="active">
            <h3 class="num" id="num">2</h3>
            <div class="step">
              <p>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </div>

          <div class="active">
            <h3 class="num"> 3</h3>
            <div class="step">
              <p>STEP 3</p>
              <h3>ADD-ONS</h3>
            </div>
          </div>

          <div class="active">
            <h3 class="num">4</h3>
            <div class="step">
              <p>STEP 4</p>
              <h3>SUMMARY</h3>
            </div>
          </div>
      </div>
    </div>
    <div class="second">
      <div class="hd">
        <h2 class="header">Select your plan</h2>
        <p class="para">You have the option of monthly or yearly billing.</p>
      </div>
      <PlanForm/>
    </div>
  
    </div>
  </div>
</template>

<script>
  import PlanForm from "@/components/PlanForm.vue";
  export default{
  name: 'SecondView',
  components:{PlanForm},
 }
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  *{
    font-family: "Ubuntu", sans-serif;
  }
  .home{
    background:  hsl(229, 24%, 87%);
  }
 
  a{
    text-decoration: none;
    color: hsl(0, 0%, 100%);
  }
  
</style>
<style  scoped>
 .second{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
 @media (min-width:1024px){
    .second{
      display: block;
      position: relative;
      width: 65%;
    }
  }
</style>


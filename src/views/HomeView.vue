<template>
  <div class="home">
    <div class="wait">
      <div class="img-div">
         <div class="spade">
          <div class="active">
            <h3 class="num" id="num">1</h3>
            <div class="step">
              <p>STEP 1</p>
              <h3>YOUR INFO</h3>
            </div>
          </div>

          <div class="active">
            <h3 class="num">2</h3>
            <div class="step">
              <p>STEP 2</p>
              <h3>SELECT PLAN</h3>
            </div>
          </div>

          <div class="active">
            <h3 class="num">3</h3>
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
        <h2 class="header">Personal info</h2>
        <p class="para">Please provide your name, email address, and phone number.</p>
        <NameForm/>
      </div> 
    </div>
  </div>
</template>

<script>
import NameForm from '@/components/NameForm.vue'


export default {
  name: 'HomeView',
  components: {NameForm},
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  *{
    font-family: "Ubuntu", sans-serif;
  }
  .body{
    background:  hsl(231, 11%, 63%);
  }
  .img-div{
    background: url(../assets/images/bg-sidebar-mobile.svg);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    height: 170px;
  }
  .spade{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: 30px;
  }
  .num{
    padding: 15px 15px;
    border-radius: 100%;
    border: 1px solid hsl(0, 0%, 100%);
    height: 20px;
    width: 20px;
  }
  #num{
    background:  hsl(206, 94%, 87%);
    color: black;
    border: none;
  }
  .step{
    display: none;
  }
   
  .second{
    width: 80%;
    margin: 0 auto;
    background: hsl(0, 0%, 100%);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    bottom: 60px;
  }
  .header{
    color: hsl(213, 96%, 18%);
    padding-bottom: 10px;
  }
  .para{
    color: hsl(231, 11%, 63%);
    font-size: 16px;
    padding-bottom: 10px;
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  label{
    color: hsl(213, 96%, 18%);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  input{
    width: 95%;
    margin: 0 auto;
    border: 1px solid hsl(231, 11%, 63%);
    padding: 10px ;
    border-radius: 3px;
    font-weight: bold;
    color: hsl(229, 24%, 87%);
  }
  #btn{
    background: hsl(213, 96%, 18%);
    color: hsl(0, 0%, 100%);
    padding: 10px ;
    font-weight: bold;
    font-size: 14px;
    border: none;
    margin: 20px 10px;
    float: right;
    border-radius: 4px;
  }
  input:focus{
    border: 1px solid hsl(231, 11%, 63%);
  }
  @media (min-width:1024px){
    body{
      background: hsl(229, 24%, 87%); 
    }
    .wait{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 60px;
      margin: 50px auto;
      width: 800px;
      height: 550px;
      border-radius: 15px;
      padding: 10px;
      background: hsl(0, 0%, 100%);
      box-shadow: 0px 4px 30px 5px hsl(206, 94%, 87%);
    }
    .img-div{
      height: 87%;
      border-radius: 10px;
      background: url('../assets/images/bg-sidebar-desktop.svg');
      background-repeat: no-repeat;
      width: 260px;
      background-size:cover;
      padding: 30px;

    }
    .spade{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        gap: 20px;
        width: 100%;
    }
    .num{
        height: 10px;
        width: 10px;
        color: hsl(0, 0%, 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 35px;
        border: 1px solid hsl(0, 0%, 100%);
        font-weight: bold;
    }

.step p{
    color: hsl(229, 24%, 87%);
    font-size: 16px;
    text-transform: uppercase;
}
.step h3{
    color: hsl(0, 0%, 100%);
    margin-top: 5px;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
}
    .spade{
      display: flex;
      flex-direction: column;
      /* position: static;
      gap: 40px;
      width: 80%;
      height: 100%;
      padding: 130px 0;
      padding-top: 20px;
      margin: 70px auto;
      margin-top: 10px; */
    }
    .second{
      width: 55%;
      margin-top: 50px;
      padding-right: 40px;
      position: relative;
    }
   
    #btn{
      position: absolute;
      right: 0; 
      text-align: right;
      padding: 15px 20px;
      margin-right: 40px;
    }
    .step{
      display: block;
    }
    .active{
      display: flex;
      justify-content: left;
      align-content: center;
      color: hsl(0, 0%, 100%);
      gap: 20px;
      width: 100%;
    }
    .para{
      margin-bottom: 30px;
    }
    .step p{
      color: hsl(229, 24%, 87%);
    }
    .step h3{
      font-size:16px ;
    }
    .num{
      font-size:16px ;
    }
  }

</style>

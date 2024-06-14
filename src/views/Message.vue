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
                        <h3 class="num" ><router-link to="/second">2</router-link></h3>
                        <div class="step">
                        <p>STEP 2</p>
                        <h3> <router-link to="/second">SELECT PLAN</router-link></h3>
                        </div>
                    </div>

                    <div class="active">
                        <h3 class="num"><router-link to="/third">3</router-link></h3>
                        <div class="step">
                        <p>STEP 3</p>
                        <h3><router-link to="/third">ADD-ONS</router-link></h3>
                        </div>
                    </div>

                    <div class="active">
                        <h3 class="num" id="num"><router-link to="/forth">4</router-link></h3>
                        <div class="step">
                        <p>STEP 4</p>
                        <h3><router-link to="/forth">SUMMARY</router-link></h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="second">
                
                <MessageInto />
            </div>
        </div>
    </div>
</template>

<script>
import MessageInto from '../components/MessageInto.vue';
export default {
components:{MessageInto },
}
</script>

<style>
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
      width: 75%;
    }
  }
</style>
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
                        <h3 class="num" id="num">4</h3>
                        <div class="step">
                        <p>STEP 4</p>
                        <h3>SUMMARY</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="second">
                <div class="hd">
                    <h2 class="header">Finishing up</h2>
                    <p class="para">Double-check everything looks OK before confirming.</p>
                </div>
                <Finished />
            </div>
        </div>
    </div>
</template>

<script>
import Finished from '@/components/Finished.vue'
export default {
    components:{Finished}
}
</script>

<style>

</style>
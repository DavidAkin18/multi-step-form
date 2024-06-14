<template>
  <div class="thank-you-form">
    <div>
        <img src="../assets/images/icon-thank-you.svg" alt="thank you">
    </div>
    <div class="ten">
        <h1>Thank you!</h1>
        <p>
            Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel
            free to email us at support@loremgaming.com
        </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.thank-you-form{
    color: black;
    text-align: center;
    margin: 100px auto;
}
img, h1, p{
  margin: 10px auto;
}
img{
  padding-bottom: 15px;
}
h1{
  color: hsl(213, 96%, 18%);
  padding-bottom: 10px;
}
p{
  color:hsl(231, 11%, 63%);
  line-height: 22px;
  text-align: center;
  font-size: 16px;
}
</style>
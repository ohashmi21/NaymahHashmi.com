<template>
  <header>
    <img src="@/assets/images/naymah.png" />
    <div>
      <h1>{{ Strings.NAYMAH_HASHMI_NAME.toUpperCase() }}</h1>
      <p>{{ Strings.HEADER_TEXT }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import Strings from '@/assets/strings'
</script>

<style scoped lang="scss">
header {
  display: flex;
  margin: 25px auto;
  text-align: center;
  justify-content: center;
  height: 125px;

  img {
    height: 100%;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 425px;

    h1 {
      font-size: 40px;
      margin: 0;
      margin-bottom: 5px;
      color: olive;
      font-weight: 900;
    }

    p {
      margin: 0 10px;
      font-size: 14px;
    }
  }
}
</style>

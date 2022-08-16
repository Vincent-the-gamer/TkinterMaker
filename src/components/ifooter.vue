<template>
  <div class="footer">
    <div class="info">
      <span>{{$config.name}} | </span>
      <span>V{{$config.version}}</span>
    </div>
    <div class="guifeng">
      <a href="https://space.bilibili.com/3342738" target="_blank">诡锋的B站  |  </a>
      <a href="https://github.com/Vincent-the-gamer" target="_blank">诡锋的Github</a>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  background-color: black;
  color: deeppink;

  .info {
    font-size: 16px;
    text-align: center;
    color: deeppink;
    background-color: black;
    a {
      text-decoration: none;
      color: deeppink;
      &:hover{
        color: cyan;
      }
    }
    &:hover{
      color: cyan;
    }
  }
}
.guifeng{
  position: relative;
  margin-top: 4px;
  text-align: center;
  background-color: black;
  color: deeppink;
  a{
    text-decoration: none;
    color: deeppink;
    &:hover{
      color: cyan;
    }
  }
}
</style>
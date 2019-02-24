<template>
  <div class="content">
    <div class="content-left">

    </div>
    <div class="content-right">

    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'TopRight',
            }
        },
        props: [
        ],
        mounted() {
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    width: 100%;
    height: 88%;
    border:1px solid grey;
    display: flex;
    .content-left{
      width: 80%;
      height: 100%;
      border:1px solid grey;
    }
    .content-right{
      width: 20%;
      height: 100%;
      border:1px solid grey;
    }
  }
</style>

<template>
    <div id="app">
        <div class="app-header">
            <div class="app-header-left">
                <div class="left-title-div">
                    <span class="left-title">安全管理问题态势</span>
                </div>
            </div>
            <div class="app-header-nav">
                <router-link to="/" class="banner-title">首页</router-link>
                <router-link to="/second" class="banner-title">环比情况</router-link>
                <router-link to="/third" class="banner-title">重要信息展示</router-link>
            </div>
            <div class="app-header-right">
                <span class="right-title">{{nowTime}}</span>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                nowTime:'',
            }
        },
        mounted(){
            this.getTimeInterval()
        },
        methods:{
            getTimeInterval(){
                setInterval(() => {
                    let date = new Date();
                    var reg = new RegExp( '/' , "g" )
                    this.nowTime=date.toLocaleString('chinese',{hour12:false}).replace(reg,'.');
                },1000)
            }
        },
        computed:{
        }
    }
</script>
<style lang="less">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #ffffff !important;
        width: 100%;
        height:100%;
    }
    .app-header {
        width: 100%;
        height: 0.7rem;
        background: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        .app-header-left{
            height: 0.65rem;
            width: 23.5%;
            border:1px solid red;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding-top:0.5%;
            .left-title-div{
                width: 2.65rem;
                height: 0.37rem;
                border: 1px solid black;
                background-image: url("./assets/images/title-left-border.png");
                background-size: 100% 100%;
                .left-title{
                    font-size: 0.22rem;
                    font-weight: bold;
                    color: #02eeff;
                    line-height: 0.39rem;
                }
            }
        }
        .app-header-nav {
            height: 100%;
            width: 30%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border:1px solid red;

            /*padding: 30px;*/
            a {
                font-size: 0.15rem;
                font-weight: normal;
                text-decoration: none;
                color: #fff;
                &.router-link-exact-active {
                    font-weight: bold;
                    color: #5fd8e8;
                }
            }
        }
        .app-header-right{
            height: 100%;
            width: 23%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border:1px solid red;

            .right-title{
                font-size: 0.15rem;
                color: #5fd8e8;
                font-family: 'DigifaceWide';
                font-weight: bold;
            }
        }
    }

    .banner-title {
        font-size: 0.3rem;
        color: #ffffff;
    }
</style>

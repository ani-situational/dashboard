<template>
    <div id="app">
        <div class="app-header">
            <div class="app-header-left">
                <div class="left-title-div">
                    <span class="left-title">安全管理问题态势</span>
                </div>
            </div>
            <div class="app-header-nav">
                <router-link to="/" class="banner-title-div"><div :class="firstTitle" class="title">首页</div></router-link>
                <router-link to="/second" class="banner-title-div"><div :class="secondTitle" class="title">环比情况</div></router-link>
                <router-link to="/third" class="banner-title-div"><div :class="thirdTitle" class="title">重要信息展示</div></router-link>
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
                currentRoute: 'first',
            }
        },
        mounted(){
            this.getTimeInterval()
        },
        watch:{
            $route(val){
                this.currentRoute = val.name;
            }
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
            firstTitle(){
                return {title1:this.currentRoute === 'first'}
            },
            secondTitle(){
                return {title2:this.currentRoute === 'second'}
            },
            thirdTitle(){
                return {title3:this.currentRoute === 'third'}
            }
        }
    }
</script>
<style lang="less">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #ffffff !important;
        width: 99%;
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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
            /*border:1px solid red;*/
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding-top:0.5%;
            .left-title-div{
                width: 2.65rem;
                height: 0.37rem;
                /*border: 1px solid black;*/
                background-image: url("./assets/images/title-left-border.png");
                background-size: 100% 100%;
                .left-title{
                    font-size: 0.2rem;
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
            /*border:1px solid red;*/

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
            /*border:1px solid red;*/

            .right-title{
                font-size: 0.15rem;
                color: #5fd8e8;
                font-family: 'DigifaceWide';
                font-weight: bold;
            }
        }
    }

    .banner-title-div {
        cursor: pointer;
        color: #ffffff;
        width: 30%;
        height: 50%;
        line-height: 190%;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .title{
        font-size: 0.12rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title1{
        width: 65%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
    .title2{
        width: 65%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
    .title3{
        width: 90%;
        height: 80%;
        background: url("./assets/images/header-item-bg.png");
        background-size: 100% 100%;
    }
</style>

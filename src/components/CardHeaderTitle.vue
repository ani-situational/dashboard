<template>
    <div class="header">
        <span :class="getColorClass">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        data () {
            return {
//                isBlue: false,
            }
        },
        props: [
            'title',
            'isBlue'
        ],
        computed: {
            getColorClass: function () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .title-color{
        color:#68ebfa;
    }
    .header {
        width: 100%;
        height: 0.32rem;
        background: #102e5d;
        font-size: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

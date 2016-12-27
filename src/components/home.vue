<template>
    <div id="home">
        <el-row>
            <el-col :span="24"><div class='zh-head'>
                <div class='zh-head-l'>
                    <span>TRIPICS</span><span>运营后台</span>
                </div>
                <div class='zh-head-r'>
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link nameclass" >
                        {{loginName}} <i @click='exit' class="exit">退出</i><!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                      </span>
                        <!--<el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to='/home/persional' tag='span'>个人设置</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to='/home/system' tag='span'>系统设置</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item ><span @click='exit'>退出系统</span></el-dropdown-item>

                        </el-dropdown-menu>-->
                    </el-dropdown>
                </div>

            </el-col>
        </el-row>

        <el-row >
            <el-col :span='4' class='left-nav'>
                <router-link to='/home/project' tag='div' active-class='zh-pmActived'>项目</router-link>
                <router-link to='/home/money' tag='div'  active-class='zh-pmActived'>财务</router-link>
            </el-col>
            <el-col :span='20' class='dataView' >
                <transition>
                    <router-view></router-view>
                </transition>

            </el-col>
        </el-row>
    </div>
</template>
<style lang="sass">
    @import url("//unpkg.com/element-ui/lib/theme-default/index.css");

    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,
    legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
    body,html{
        width: 100%;
        height: 100%;
        font-size: 16px;

    }

    $basePx:960;
    @function pxCount($px){
    @return $px/$basePx+rem;
    }

    #app2{
        width:100%;
        height:100%;
        overflow:hidden;
        clear:both;
        position:relative
    }
    .el-col {
        border-radius: 4px;
    }
    .zh-head{
        min-height:pxCount(60);
        line-height:pxCount(60);
        background-color:#2f4256;
        color:#fff;


        overflow:hidden;
        clear:both;
        padding:0 10px;

    }
    .zh-head-l{
        float:left;
        height:100%;
        color:#fff;
    }
    .zh-head-l span:nth-child(1){
        font-weight:800;
        font-family:'Helvetica Neue';
        display:inline-block;
        margin-right:pxCount(10),
    }
    .zh-head-l span:nth-child(2){
        display:inline-block;
        color:#fff;
        margin-left:pxCount(5);

    }
    .zh-head-r{
        float:right;
        height:100%;
        color:#fff;

    }
    .zh-head-r span:nth-child(1){
        display:inline-block;
        margin-right:pxCount(5)
    }
    .zh-head-r span:nth-child(2){
        display:inline-block;
        margin-left:pxCount(5)
    }
    .nameclass{
        color: #fff;


    }
    .zh-lrActived{
        color:#d2dce6;
    }

    .left-nav{
        float:left;
        height:pxCount(900);
        padding-right:0 !important;
        text-align:center;
        background-color:#f0f2f7;
        padding-top: pxCount(20);
        cursor: pointer;

    }
    .left-nav div{
        min-height:50px;
        line-height:50px;

        text-align:center;
        color:black;

    }


    .dataView{
        float:right;
        width:75%;

        background-color:#fff;
        margin:0 4%;

        height:pxCount(900);


    }
    div.zh-pmActived{
        background:#d2dce6;

    }
    .exit{
        display: inline-block;
        margin-left: 5px;
        font-style: normal;
        cursor: pointer;
    }
    .fade-enter-active,.fade-leave-active{
        transition: opacity 1.5s
    }
    .fade-enter,.fade-leave{
        opacity: 0
    }
</style>
<script>

    export default {


        data(){
            return{
                storage:false,
                loginName:''
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            exit:function(){
                this.$router.push('/login')
            },



        },
        created:function () {
           this.loginName= JSON.parse(sessionStorage.getItem('user')).name
        },








    }
</script>
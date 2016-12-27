<template>
    <div>
        <el-row>
            <el-col :span="24"><div class='zh-head'>
                <div class='zh-head-l'>
                    <span>TRIPICS</span>|<span>运营后台</span>
                </div>

                <div class='zh-head-r' v-if='storage'>
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link" >
                        {{loginName}}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to='/persional' tag='span'>个人设置</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to='/system' tag='span'>系统设置</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item ><span @click='exit'>退出系统</span></el-dropdown-item>

                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class='zh-head-r' v-else>
                    <router-link to='/login' tag='span' active-class='zh-lrActived'>登录</router-link>|
                    <router-link to='/resiger' tag='span' active-class='zh-lrActived'>注册</router-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="sass">
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
    .el-col {
        border-radius: 4px;
    }
    .zh-head{
        min-height:pxCount(100);
        line-height:pxCount(100);
        background-color:#e8e8e8;
        color:black;

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
        font-weight:bolder;
        font-family:'Helvetica Neue';
        display:inline-block;
        margin-right:pxCount(5),
    }
    .zh-head-l span:nth-child(2){
        display:inline-block;
        color:#fff;
        margin-left:pxCount(5);
        font-weight:100
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
    .zh-lrActived{
        color:#FFB90F;
    }
</style>
<script>
    export default{
        props:{
            storage:Boolean,
            loginName:String
        },
        methods:{
            exit:function(){
                console.log(22222)
                this.storage=false;
                localStorage.setItem('username','');
                this.$router.push('/login')
            }
        }
    }
</script>
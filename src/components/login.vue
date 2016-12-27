<template>
    <div id='login'>
        <div class="zh-bg">
            <el-row class="zh-title">
                <el-col :span="24" ><div class="grid-content bg-purple-dark"><h1>TRIPICS</h1></div></el-col>
            </el-row>
            <el-row class="zh-title-two">
                <el-col :span="24" ><div class="grid-content bg-purple-dark"><h3>运营系统</h3></div></el-col>
            </el-row>
            <el-row :gutter="10" class='zh-login'>
                <el-col :span='8' class="zh-login-left">
                    用户名
                </el-col>
                <el-col :span='16' class="zh-login-right">
                    <el-input placeholder="请输入用户名"
                              size="small" v-model="nameInput" autofocus="autofocus"></el-input>
                </el-col>
            </el-row>

            <el-row :gutter="10" class='zh-login'>
                <el-col :span='8'  class="zh-login-left">
                    密码
                </el-col>
                <el-col :span='16' class="zh-login-right">
                    <el-input placeholder='请输入密码' type='password'
                              size="small" v-model='passInput'></el-input>
                </el-col>
            </el-row>
            <el-row v-if="showWrong" class="zh-showWrong">
                <el-col :span="24"><p>用户名密码错误</p></el-col>
            </el-row>
            <el-row class='zh-logBtn'>
                <el-col :span='24'>
                    <el-button :plain="true" class='zh-logBtn-b'
                               v-on:click='login'><span>登录</span></el-button>
                </el-col>
            </el-row>
        </div>


    </div>
</template>
<script>
    import {Message} from 'element-ui'
    export default{
        mounted: function() {
            this.getCustomers()
        }, 
        methods:{
            getCustomers: function() {
                // $.ajax({
                //     url: this.apiUrl,
                //     dataType: "jsonp",
                //     jsonp: "callback",                    
                //     success: function(data) {
                //         this.item = data.tuple;
                //     }
                // })

                this.$http.jsonp(this.apiUrl,
                    {
                        jsonp:'_cb_mine'
                    }
                    )
                    .then(function(response) {
                        //console.log(response)
                        this.user_pass = response.data.tuple
                        //console.log("not fucked")
                        //console.log(this.user_pass)
                    }, function(response) {
                        //console.log("my site JSON fucked")
                    })
            },

            login:function(){
                var _user=JSON.parse(sessionStorage.getItem('user'));
                var _userName=_user.name;
                var _passWord=_user.password;

                //if(this.nameInput == _userName && this.passInput ==_passWord){
                var inputnp = this.nameInput + this.passInput
                //inputnp_js = "{"+"}"
                if (this.user_pass.indexOf(inputnp) >= 0) {
                    //console.log(this.nameInput)
                    this.$message({
                        showClose: true,
                        message:'登录成功'
                    })

                    var user={'name':this.nameInput,'password':this.passInput}

                    sessionStorage.setItem('user',JSON.stringify(user))

                    this.$router.push('/home/project')

                }else{
                    this.$message({
                        showClose: true,
                        message:'请输入正确的用户名',
                        type:'error'
                    })
                    this.showWrong=true;
                }
            }
        },
        data (){
            return{
                showWrong:false,
                nameInput:'',
                passInput:'',
                user_pass:'',
                apiUrl: 'http://127.0.0.1:8099/act_cnt/get_user_info'
            }
        },        
        beforeRouterLeave(to,from,next) {

        }

    }
</script>
<style lang='sass'>
    $basePx:960;
        @function pxCount($px){
          @return $px/$basePx+rem;
    }
    #login{
        width:100%;
        height: 100%;
        position: relative;
        color: #fff;


    }

    .zh-bg{
        width:800px;
        height:500px;
        background-color: #2f4256;
        margin: auto;
        position: absolute;
        left: 0;
        top:0;
        right:0;
        bottom: 0;
        text-align: center;
        border-radius:5px;
        box-shadow: 1px 1px 5px 5px #888888;

    }
    .zh-title{
        margin-top: 80px;
        margin-bottom: 5px;
    }
    .zh-title-two{
        margin-bottom: 50px;
    }
    .zh-login{
        margin-bottom: 30px;
    }
    .zh-login-left{
        text-align: right;
    }
    div.zh-login-right{
        width:300px;
        margin-left: 30px;
        cursor: pointer;
    }
    .zh-logBtn{
        margin-top: 80px;

    }
    button.zh-logBtn-b{
        background-color: #21a1ff;
        border: none;
        color: #fff;
    }
    div.zh-showWrong{
        position: absolute;
        width:100%;
        color: red;
        font-size: 14px;
    }

</style>
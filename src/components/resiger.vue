<template>
    <div id='resiger'>
        <el-row :gutter="10" class='zh-userName'>
            <el-col :span='8' class='zh-res'>
                用户名
            </el-col>
            <el-col :span='16' class='zh-res'>
               <el-input placeholder="请输入用户名" @focus='nameState' @blur='nameBlur'
                size="small" v-model="nameInput"></el-input>
            </el-col>
        </el-row>
        <el-row v-show='nameFocus' class='nameNorm userMsg'>
            <el-col :span='24'>
                用户名为5-16位 数字,字母,组成
            </el-col>
        </el-row>
        <el-row :gutter="10" class='zh-pass '>
            <el-col :span='8' class='zh-res'>
                密码
            </el-col>
            <el-col :span='16' class='zh-res'>
                <el-input placeholder='请输入密码' type='password' @focus='passState' @blur='passBlur'
                size="small" v-model='passInput'></el-input>
            </el-col>
        </el-row>
        <el-row v-show='passFocus' class='nameNorm passMsg'>
            <el-col :span='24'>
                密码由6-12位 数字,字母,组成
            </el-col>
        </el-row>
        <el-row class='zh-resBtn'>
            <el-col :span='24'>
                <el-button :plain="true" class='zh-reBtn-b' v-on:click='shangchuan'>注册</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {Message} from 'element-ui'
    export default {
        data() {
            return {
                  nameInput:'',
                  passInput:'',
                  nameFocus:false,
                  passFocus:false

                }
        },
        methods:{
            nameState:function(){

                this.nameFocus=true;
            },
            nameBlur:function(){
                var myRegex=/^[a-zA-Z][a-zA-Z0-9]{5,11}$/;
                if(this.nameInput=='' || !myRegex.test(this.nameInput)){
                    this.nameFocus=true;
                }else{
                   this.nameFocus=false;
                }
            },
            passState:function(){
                this.passFocus=true
            },
            passBlur:function(){
                var passReg=/^[a-zA-Z][a-zA-Z0-9]{5,11}$/
                if(this.passInput=='' || !passReg.test(this.passInput)){
                    this.passFocus=true;
                }else{
                   this.passFocus=false;
                }
            },
            shangchuan:function(){

                localStorage.setItem("username",this.nameInput);
                localStorage.setItem("password",this.passInput)
                console.log(localStorage.getItem('username'))
                var _huancun =localStorage.getItem('username')
                if(this.nameInput!='' && this.passInput!=''  && _huancun==this.nameInput){
                    console.log(this.nameInput)
                    this.$message({
                        showClose: true,
                        message:'恭喜你注册成功'
                    })
                    this.$router.push('/login')
                }else{
                    this.$message({
                        showClose: true,
                        message:'请按照提示注册',
                        type:'error'
                    })
                }


            }
        }
    }
</script>
<style lang="sass">
    $basePx:960;
    @function pxCount($px){
      @return $px/$basePx+rem;
    }
    #resiger{
        padding-top:pxCount(100)
    }

    .zh-res{
        height:pxCount(50);
        text-align:center;
        line-height:pxCount(50)
    }
    .nameNorm{
        font-size:12px;
        color:#FF7F00;
        height:pxCount(50);
        text-align:center;
        line-height:pxCount(50);

    }
    .zh-resBtn{
        position:absolute;
        bottom:pxCount(450);
        width:67%;
        text-align:center
    }
    .zh-reBtn-b{
        width:80%
    }

</style>
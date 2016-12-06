<template>
	<div>
		<popup></popup>
		<mt-header fixed title="">
			<router-link :to="{ name: routeback}" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="page-header-main">
			<div class="login">
				<div class="logo-img">
					<img src="../assets/img/login/logo.png" />
				</div>
				<div class="login-Content">
					<div class="login-input">
						<div class="input-list">
							<i class=" icon iconfont icon-shouji1"></i>
							<input placeholder="输入手机号" number="true" type="number"   v-model="phone" />
						</div>
						<div class="input-list get">
							<i class=" icon iconfont icon-shouji1"></i>
							<input placeholder="输入验证码" v-model="verify"/>
							<span class="getbtn" v-on:click="getVerify">
								<label v-if="isverify">获取验证码</label>	
								<label v-else>正获取中...</label>	
							</span>
						</div>
					</div>
					<button class="login-btn" v-on:click="loginBtn">
						登录
					</button>
					<div class="third">
						<div class="thirdborder"></div>
						<div class="thirdlogin">
							第三方登录
							<div class="loginbtn">
								<span>
									<i class="icon iconfont icon-iconfontweixin2"></i>
								</span>
								<span>
									<i class="icon iconfont icon-3"></i>
								</span>
								<span>
									<i class="icon iconfont icon-icon083"></i>
								</span>
							</div>
						</div>
						<div class="thirdborder"></div>
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import popup from "components/childcomponents/Popup.vue"
	export default {
		name: 'login',
		data() {
			return {
				phone:"10086",
				verify:"006",
				isverify:true,
				routeback:""
			}
		},
		methods: {
			//获取验证码
			getVerify:function() {
				this.isverify=false
			},
			//登陆
			loginBtn:function() {
				this.$root.$emit('popup', '请填写手机号码')
			}
		},
		mounted() {
			//获取传过来的返回地址
			this.routeback= this.$route.params.back
		},
		components: {
			popup
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.page-header-main {
		height: 100%;
		width: 100%;
		margin-bottom: 0;
		background: url(../assets/img/login/login.png) no-repeat 100% 100%;
	}
	
	.login-Content {
		padding: 2.5rem;
		overflow: hidden;
	}
	
	.logo-img {
		width: 13.3rem;
		margin: auto;
		padding: 3rem 0;
	}
	
	.logo-img img {
		width: 100%;
		max-width: 100%;
	}
	
	.login-input .input-list {
		display: flex;
		color: #fff;
		margin-bottom: 2rem;
	}
	
	.login-input .input-list i {
		text-align: center;
		position: absolute;
		border-right: 0.05rem #fff solid;
		padding-right: 2%;
		font-size: 1.2rem;
	}
	
	.login-input .input-list input {
		color: #fff;
		background: none;
		font-size: 1rem;
		border: none;
		flex: 1;
		padding-bottom: 0.4rem;
		padding-left: 2rem;
		border-bottom: 0.05rem #fff solid;
	}
	
	.login-input .input-list.get input {
		width: 10%;
	}
	
	.login-input .input-list.get .getbtn {
		padding: 0.4rem;
		border-radius: 0.2rem;
		background: #fff;
		font-size: 1rem;
		color: #555555;
	}
	
	::-webkit-input-placeholder {
		color: #fff;
	}
	
	::-moz-placeholder {
		color: #fff;
	}
	
	:-moz-placeholder {
		color: #fff;
	}
	
	.login-btn {
		border-radius: 10px;
		background: #f05e49;
		color: #fff;
		padding: 1rem 0;
		width: 100%;
		border: none;
		font-size: 1.2rem;
	}
	
	.third {
		margin-top:3rem;
		display: flex;
	}
	
	.third .thirdlogin,
	.third .thirdborder {
		flex: 1;
	}
	
	.thirdborder {
		border-top: 0.05rem solid #555555;
	}
	
	.thirdlogin {
		text-align: center;
	}
	
	.thirdlogin .loginbtn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0.5rem;
	}
	
	.loginbtn span {
		flex: 1;
	}
	
	.loginbtn i {
		font-size: 1.4rem;
		color: #fff;
	}
</style>
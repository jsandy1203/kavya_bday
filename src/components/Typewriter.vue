<template>
	<div class="startingText" v-if="dontShowOtherPageLink">
		<img :src="cutePanda" alt="" style="border-radius: 48%; width: 200px; height: 200px;">
		<span style="text-align: center;" class="headingText">I see you smiling 😅</span>
		<span style="text-align: center;">Wait aipoledu.....inkaa undi
		</span>
		<button style="margin-top: 1rem;border: 1px solid; padding: 0.5rem; border-radius: 10px; background-color:azure;"
					@click="changeComp">Okayyy</button>
	</div>
	<div v-else>
		<div class="typedoc" v-if="!showTypeWriter">
			<div id="typewriter">
				<div id="platen">
					<div id="carriage-lever">
					</div>
					<div id="platen-knob-right"></div>
					<div id="platen-knob-left"></div>
				</div>
				<div id="paper">
					<div id="note">Many more<br>happy returns<br> of the day <br>Kavya!😊🍰<br><br><br><br></div>
				</div>
				<div id="body">
					<div id="top"></div>
					<div id="opening">
						<div id="internal-shadow"></div>
						<div id="internal-hollow"></div>
						<div id="internal-board-crop">
							<div id="internal-board"></div>
						</div>
					</div>
					<div id="internal-board2-crop">
						<div id="internal-board2"></div>
					</div>
					<div id="cutaway"></div>
					<div id="front">
						<div id="keyboard"></div>
						<div id="keys"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="startingText" v-else>
			<img :src="cutePandaa" alt="" height="200px" width="200px" style="border-radius: 48%">
			<span class="headingText">Heyyyy!</span>
			<span>Wanna see something?.....
				<button style="border: 1px solid; padding: 0.25rem; border-radius: 10px; background-color:azure;"
					@click="onBtnClick">Click Here</button>
			</span>
		</div>
	</div>
</template>

<script setup>
import cutePanda from "../assets/cute_baby_panda.jpeg";
import cutePandaa from "../assets/cute_panda.jpg";
import { ref, defineEmits } from 'vue';
const showTypeWriter = ref(true);
const dontShowOtherPageLink = ref(false);
const emit = defineEmits(['changeComp'])
function onBtnClick() {
	showTypeWriter.value = !showTypeWriter.value;
	setTimeout(() => {
		dontShowOtherPageLink.value = !dontShowOtherPageLink.value;
	}, 20000)
}
function changeComp() {
	emit('changeComp')
}
</script>

<style>
.startingText {
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: center;
	padding-top: 15vh;
	background-color: #c7f2e6;
	font-family: 'Agbalumo', sans-serif;
}

.typedoc {
	height: 100vh;
	display: flex;
	align-content: center;
	background-color: #c7f2e6
}

.headingText {
	margin-top: 1rem;
	font-size: 28px;
}

#typewriter {
	position: relative;
	width: 300px;
	height: 300px;
	margin: 0 auto;
	top: 100px;
	overflow: hidden;
}

#platen {
	position: absolute;
	width: 180px;
	height: 30px;
	top: 100px;
	left: 85px;
	background: #585755;
	-webkit-animation: platen-type 5s 3, fall-away 20s forwards;
	/* Chrome, Safari, Opera */
	-moz-animation: platen-type 5s 3, fall-away 20s forwards;
	animation: platen-type 5s 3, fall-away 20s forwards;
}

#platen:before {
	position: absolute;
	width: 180px;
	height: 15px;
	top: 15px;
	background: #3d3d3d;
	content: '';
}

#platen:after {
	position: absolute;
	width: 180px;
	height: 4px;
	top: 3px;
	background: #888888;
	content: '';
	box-shadow: 0 12px #3d3d3d,
		0 16px #3d3d3d,
		0 20px #3d3d3d;
}

#platen-knob-right {
	position: absolute;
	width: 50px;
	height: 4px;
	top: 13px;
	left: 140px;
	background: #585755;
}

#platen-knob-right:before {
	position: absolute;
	width: 10px;
	height: 8px;
	top: -6px;
	left: 45px;
	background: #585755;
	box-shadow: 0 -2px #888888,
		0 6px #3d3d3d,
		0 10px #3d3d3d;
	content: '';
}

#platen-knob-left {
	position: absolute;
	width: 30px;
	height: 4px;
	top: 8px;
	left: -10px;
	background: #585755;
}

#platen-knob-left:before {
	position: absolute;
	width: 3px;
	height: 6px;
	top: -1px;
	left: 3px;
	background: #585755;
	box-shadow: 0 -4px #888888,
		0 4px #3d3d3d,
		-3px 0 #3d3d3d;
	content: '';
}

#platen-knob-left:after {
	position: absolute;
	width: 10px;
	height: 15px;
	left: 15px;
	top: -8px;
	background: #585755;
	content: '';
}

#carriage-lever {
	position: absolute;
	width: 40px;
	height: 30px;
	top: -10px;
	left: -30px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	border-top: 3px solid #dbdbdb;
	border-right: 3px solid #dbdbdb;
}

#carriage-lever:before {
	position: absolute;
	width: 40px;
	height: 30px;
	top: 0px;
	left: -2px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 8px;
	border-top: 2px solid #7a7a7a;
	border-right: 2px solid #7a7a7a;
	content: '';
}

#carriage-lever:after {
	position: absolute;
	width: 25px;
	height: 10px;
	top: 2px;
	left: -15px;
	background: #dbdbdb;
	content: '';
	border-radius: 30px/10px;
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	box-shadow: 0 2px #7a7a7a,
		-1px 2px #7a7a7a;
}

#paper {
	position: absolute;
	width: 130px;
	height: 125px;
	top: 110px;
	left: 110px;
	background: #fff;
	-webkit-animation: paper-type 5s 3, paper-type2 15s forwards;
	/* Chrome, Safari, Opera */
	-moz-animation: paper-type 5s 3, paper-type2 15s forwards;
	animation: paper-type 5s 3, paper-type2 15s forwards;
}

#note {
	position: relative;
	width: auto;
	font-family: courier;
	padding: 5px;
	overflow: hidden;
}

#body {
	position: relative;
	width: 200px;
	height: 200px;
	margin: 0 auto;
	top: 100px;
	-webkit-animation: fall-away 20s forwards;
	/* Chrome, Safari, Opera */
	-moz-animation: fall-away 20s forwards;
	animation: fall-away 20s forwards;
}

#sizer {
	position: absolute;
	width: 100px;
	height: 34px;
	top: 115px;
	background: #444;
}

#top-front {
	position: relative;
	width: 200px;
	height: 62px;
	top: 22px;
	margin: 0 auto;
	overflow: hidden;
}

#top {
	position: relative;
	width: 182px;
	height: 62px;
	margin: 0 auto;
	background: #eb7568;
	-webkit-transform: perspective(500px) rotate3d(1, 0, 0, 56deg);
	transform: perspective(500px) rotate3d(1, 0, 0, 56deg);
}

#opening {
	position: absolute;
	width: 125px;
	height: 125px;
	top: -46px;
	left: 36px;
	border-radius: 100px;
	z-index: 0;
	-webkit-transform: scaleY(.4);
	transform: scaleY(.4);
	overflow: hidden;
}

#internal-shadow {
	position: absolute;
	width: 135px;
	height: 135px;
	top: 60px;
	left: -5px;
	background: #e76056;
	border-radius: 100px;
}

#internal-hollow {
	position: absolute;
	width: 135px;
	height: 135px;
	top: 72px;
	left: -5px;
	background: #585756;
	border-radius: 100px;
}

#internal-hollow:before {
	position: absolute;
	width: 99px;
	height: 99px;
	top: 55px;
	left: 18px;
	background: #434240;
	border-radius: 100px;
	-webkit-transform: scaleY(2);
	transform: scaleY(2);
	content: '';
}

#internal-hollow:after {
	position: absolute;
	width: 93px;
	height: 93px;
	top: 62px;
	left: 21px;
	background: #2e2e2e;
	border-radius: 100px;
	-webkit-transform: scaleY(2);
	transform: scaleY(2);
	content: '';
}

#internal-board-crop {
	position: absolute;
	width: 88px;
	height: 88px;
	top: 129px;
	left: 18px;
	border-radius: 100px;
	-webkit-transform: scaleY(2);
	transform: scaleY(2);
	overflow: hidden;
}

#internal-board {
	position: absolute;
	width: 0;
	height: 0;
	top: -43px;
	left: 11px;
	border-left: 34px solid transparent;
	border-right: 34px solid transparent;
	border-bottom: 60px solid #626262;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	-webkit-transform: scaleY(1.25);
	transform: scaleY(1.25);
}

#internal-board2-crop {
	position: absolute;
	width: 100px;
	height: 50px;
	top: 24px;
	left: 77px;
	overflow: hidden;
}

#internal-board2 {
	position: absolute;
	width: 44px;
	height: 44px;
	top: -26px;
	background: #626262;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
}

#internal-board2:before {
	position: absolute;
	width: 40px;
	height: 40px;
	top: 2px;
	left: 2px;
	background: #a2a2a2;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	content: '';
}

#internal-board2:after {
	position: absolute;
	width: 34px;
	height: 34px;
	top: 5px;
	left: 5px;
	background: #b7b7b7;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	content: '';
}

#cutaway {
	position: absolute;
	width: 40px;
	height: 10px;
	top: 14px;
	left: 79px;
	background: #fff;
}

#cutaway:before {
	position: absolute;
	width: 40px;
	height: 3px;
	top: 7px;
	background: #b7b7b7;
	box-shadow: 0 2px #575754;
	content: '';
}

#cutaway:after {
	position: absolute;
	width: 10px;
	height: 5px;
	left: 5px;
	top: 5px;
	background: #575757;
	box-shadow: 20px 0 #575754;
	content: '';
}

#front:before {
	position: absolute;
	width: 200px;
	height: 100px;
	top: -91px;
	left: 4px;
	background: #e76056;
	border-radius: 0 0 3px 3px;
	-webkit-transform: perspective(700px) rotate3d(1, 0, 0, 34deg);
	transform: perspective(700px) rotate3d(1, 0, 0, 34deg);
	content: '';
}

#body #front {
	position: relative;
	width: 208px;
	height: 17px;
	top: 68px;
	left: -4px;
	margin: 0 auto;
	background: #c45549;
	border-radius: 0 0 3px 3px;
}

#keyboard {
	position: relative;
	width: 180px;
	height: 68px;
	top: -67px;
	margin: 0 auto;
	background: #3c3c3c;
	border-radius: 3px;
	box-shadow: 0 -4px #c85549;
	-webkit-transform: perspective(700px) rotate3d(1, 0, 0, 34deg);
	transform: perspective(700px) rotate3d(1, 0, 0, 34deg);
}

#keyboard:after {
	position: absolute;
	width: 35px;
	height: 7px;
	top: -19px;
	left: 128px;
	background: #b9bdbe;
	box-shadow: 0 2px #ae6d64;
	content: '';
}

#keys {
	position: relative;
	width: 12px;
	height: 7px;
	top: -122px;
	left: 27px;
	background: #696967;
	border-radius: 1px 1px 3px 3px;
	box-shadow: 14px 0 #696967,
		28px 0 #696967,
		42px 0 #696967,
		56px 0 #696967,
		70px 0 #696967,
		84px 0 #696967,
		98px 0 #696967,
		112px 0 #696967,
		126px 0 #696967,
		140px 0 #696967,
		-7px 10px #696967,
		7px 10px #696967,
		21px 10px #696967,
		35px 10px #696967,
		49px 10px #696967,
		63px 10px #696967,
		77px 10px #696967,
		91px 10px #696967,
		105px 10px #696967,
		119px 10px #696967,
		133px 10px #696967,
		147px 10px #696967,
		0 20px #696967,
		14px 20px #696967,
		28px 20px #696967,
		42px 20px #696967,
		56px 20px #696967,
		70px 20px #696967,
		84px 20px #696967,
		98px 20px #696967,
		112px 20px #696967,
		126px 20px #696967,
		140px 20px #696967,
		-9px 30px #696967,
		7px 30px #696967,
		21px 30px #696967,
		35px 30px #696967,
		49px 30px #696967,
		63px 30px #696967,
		77px 30px #696967,
		91px 30px #696967,
		105px 30px #696967,
		119px 30px #696967,
		133px 30px #696967,
		149px 30px #696967,
		-5px 40px #696967,
		145px 40px #696967;
}

#keys:before {
	position: absolute;
	width: 12px;
	height: 7px;
	top: -3px;
	background: #d9d9d9;
	border-radius: 2px 2px 3px 3px;
	box-shadow: 14px 0 #d9d9d9,
		28px 0 #d9d9d9,
		42px 0 #d9d9d9,
		56px 0 #d9d9d9,
		70px 0 #d9d9d9,
		84px 0 #d9d9d9,
		98px 0 #d9d9d9,
		112px 0 #d9d9d9,
		126px 0 #d9d9d9,
		140px 0 #d9d9d9,
		-7px 10px #d9d9d9,
		7px 10px #d9d9d9,
		21px 10px #d9d9d9,
		35px 10px #d9d9d9,
		49px 10px #d9d9d9,
		63px 10px #d9d9d9,
		77px 10px #d9d9d9,
		91px 10px #d9d9d9,
		105px 10px #d9d9d9,
		119px 10px #d9d9d9,
		133px 10px #d9d9d9,
		147px 10px #d9d9d9,
		0 20px #d9d9d9,
		14px 20px #d9d9d9,
		28px 20px #d9d9d9,
		42px 20px #d9d9d9,
		56px 20px #d9d9d9,
		70px 20px #d9d9d9,
		84px 20px #d9d9d9,
		98px 20px #d9d9d9,
		112px 20px #d9d9d9,
		126px 20px #d9d9d9,
		140px 20px #d9d9d9,
		-9px 30px #d9d9d9,
		7px 30px #d9d9d9,
		21px 30px #d9d9d9,
		35px 30px #d9d9d9,
		49px 30px #d9d9d9,
		63px 30px #d9d9d9,
		77px 30px #d9d9d9,
		91px 30px #d9d9d9,
		105px 30px #d9d9d9,
		119px 30px #d9d9d9,
		133px 30px #d9d9d9,
		149px 30px #d9d9d9,
		-5px 40px #d9d9d9,
		145px 40px #d9d9d9;
	content: '';
}

#keys:after {
	position: absolute;
	width: 124px;
	height: 7px;
	top: 37px;
	left: 14px;
	background: #d9d9d9;
	border-radius: 2px 2px 3px 3px;
	content: '';
	box-shadow: 0 3px #696969;
}


/* Chrome, Safari, Opera */
@-webkit-keyframes platen-type {
	0% {
		left: 85px;
	}

	10% {
		left: 80px;
	}

	20% {
		left: 75px;
	}

	30% {
		left: 70px;
	}

	40% {
		left: 65px;
	}

	50% {
		left: 60px;
	}

	60% {
		left: 55px;
	}

	70% {
		left: 50px;
	}

	80% {
		left: 45px;
	}
}

/* Standard syntax */
@keyframes platen-type {
	0% {
		left: 85px;
	}

	10% {
		left: 80px;
	}

	20% {
		left: 75px;
	}

	30% {
		left: 70px;
	}

	40% {
		left: 65px;
	}

	50% {
		left: 60px;
	}

	60% {
		left: 55px;
	}

	70% {
		left: 50px;
	}

	80% {
		left: 45px;
	}
}

/* Chrome, Safari, Opera */
@-webkit-keyframes paper-type {
	0% {
		left: 110px;
	}

	10% {
		left: 105px;
	}

	20% {
		left: 100px;
	}

	30% {
		left: 95px;
	}

	40% {
		left: 90px;
	}

	50% {
		left: 85px;
	}

	60% {
		left: 80px;
	}

	70% {
		left: 75px;
	}

	80% {
		left: 70px;
	}
}

/* Standard syntax */
@keyframes paper-type {
	0% {
		left: 110px;
	}

	10% {
		left: 105px;
	}

	20% {
		left: 100px;
	}

	30% {
		left: 95px;
	}

	40% {
		left: 90px;
	}

	50% {
		left: 85px;
	}

	60% {
		left: 80px;
	}

	70% {
		left: 75px;
	}

	80% {
		left: 70px;
	}
}

/* Chrome, Safari, Opera */
@-webkit-keyframes paper-type2 {
	0% {
		top: 110px;
		height: 125px;
	}

	30% {
		top: 110px;
	}

	33% {
		top: 90px;
	}

	63% {
		top: 90px;
	}

	66% {
		top: 70px;
	}

	96% {
		top: 70px;
		height: 125px;
	}

	100% {
		top: 50px;
		height: 165px;
	}
}

/* Standard syntax */
@keyframes paper-type2 {
	0% {
		top: 110px;
		height: 125px;
	}

	30% {
		top: 110px;
	}

	33% {
		top: 92px;
	}

	63% {
		top: 92px;
	}

	66% {
		top: 74px;
	}

	96% {
		top: 74px;
		height: 125px;
	}

	100% {
		top: 56px;
		height: 165px;
	}
}

/* Chrome, Safari, Opera */
@-webkit-keyframes fall-away {
	0% {
		top: 100px;
	}

	75% {
		top: 100px;
	}

	100% {
		top: 400px;
	}
}

/* Standard syntax */
@keyframes fall-away {
	0% {
		top: 100px;
	}

	75% {
		top: 100px;
	}

	100% {
		top: 400px;
	}
}

.justpaper {
	padding: 6px;
	background-color: #9ae6d0;
	width: 75vw;
	height: 80vh;
}
</style>
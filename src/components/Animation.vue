<template>
	<!-- <div>
		<div class="message-wait">
			<div class="window-wait" ref="windowWait">
				<div class="polosa">

				</div>
			</div>

			<div class="circle-wait">
				<div class="star__wrap">
					<div class="star">
						<img class="star-big" src="../assets/star.svg" alt="">
						<img class="star-mini" src="../assets/star.svg" alt="">
						<img class="star-small" src="../assets/star.svg" alt="">
					</div>
				</div>

			</div>
		</div>
		<div class="message">
			{{ message }}
		</div>
	</div> -->
	<svg>
		<defs>
			<mask id="maskForWindow" x="0" y="0" width="100%" height="100%">
				<rect x="0" y="0" width="16vw" height="100vh" fill="white" />
				<circle cx="5" cy="5" r="20" fill="black" />
			</mask>
		</defs>
	</svg>
	<div class="top">
		<div class="circle-wait">
			<div class="star__wrap">
				<div class="star">
					<div class="star-big__contaier">
						<img class="star-big" src="../assets/star.svg" alt="">
						<div class="vortex"></div>
						<div class="vortex"></div>
						<div class="vortex"></div>
						<div class="vortex"></div>
					</div>
					<img class="star-mini" src="../assets/star.svg" alt="">
					<img class="star-small" src="../assets/star.svg" alt="">
				</div>
			</div>

		</div>
		<div class="wrapper">
			<div class="container">
				<div class="polosa_2"></div>
			</div>
			<div class="l"><img src="../assets/mask__2.svg" alt="" srcset=""></div>
			<div class="r"></div>
		</div>
	</div>

</template>

<script>
import anime from 'animejs'


export default {
	data() {
		return {
			message: '',
			text: 'Это проверочное сообщение от чат-бота психолога и необходимо сообщение подлиннее',
			index: 0
		}
	},
	/* mounted() {
		this.showMessage()
		anime({
			targets: '.star-big',
			rotate: [
				{ value: -15, duration: 400, delay: 200 },
				{ value: 180, duration: 1500 },
			],
			scale: [
				{ value: 1, duration: 400 },
				{ value: 1.1, duration: 800 },
				{ value: 1, duration: 200 }
			],
			endDelay: 1000,
			easing: 'easeInOutQuad',
			loop: true,
		}),

			anime({
				targets: '.star-mini',
				translateX: [
					{ value: 0, delay: 200 },
					{ value: 17, duration: 1400 }
				],
				translateY: [
					{ value: 0, delay: 200 },
					{ value: -15, duration: 1400 }
				],
				rotate: [
					{ value: -15, duration: 400 },
					{ value: 270, duration: 1000, delay: 200 },
				],
				endDelay: 1000,
				easing: 'easeInOutQuad',
				loop: true,
			}),

			anime({
				targets: '.star-small',
				translateX: [
					{ value: 0, delay: 700 },
					{ value: 20, duration: 900 }
				],
				translateY: [
					{ value: 0, delay: 700 },
					{ value: -8, duration: 900 }
				],
				rotate: [
					{ value: -15, duration: 400 },
					{ value: 270, duration: 1000, delay: 200 },
				],
				endDelay: 1000,
				easing: 'easeInOutQuad',
				loop: true,
			})
	},
 */
	methods: {
		showMessage() {
			let typeMessage = setInterval(() => {
				if (this.index < this.text.length) {
					this.message += this.text[this.index]
					this.index++
				} else {
					clearInterval(typeMessage)
				}
			}, 80)
		},
		getWidth() {
			const widthEl = this.$refs.windowWait.clientWidth
			return widthEl
		}
	}

}
</script>

<style lang="scss">
.message {
	background-color: #488CE1;
	border-radius: 10px;
	max-width: 15vw;
	padding: 10px;
	font-family: Onest;
	color: #fff;
}

.top {
	position: relative;
}

.wrapper {
	display: flex;
	height: 62px;
	position: relative;
	width: fit-content;

	.container {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		height: 62px;
		width: 100%;
		border-radius: 12.4px;
		z-index: 2;
		clip-path: polygon(7% 31%, 9% 20%, 10% 0, 100% 0, 100% 100%, 0 100%, 0 41%);
	}

	.l {
		img {
			object-fit: cover;
		}
	}

	.r {
		background-color: #488CE1;
		width: 200px;
		height: 62px;
		border-radius: 0px 10px 10px 0px;
		position: relative;
	}

	/* 	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: -1.49vw;
		display: block;
		height: 4vw;
		width: 1.5vw;
		background-image: url(../assets/mask__2.svg);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom right;
	} */
}

.message-wait {
	position: relative;
}

.window-wait {
	width: 15vw;
	height: 5vh;
	margin-bottom: 5vw;
	border-radius: 10px;
	background: #488CE1;
	mask-image: url(#maskForWindow);
	mask-repeat: no-repeat;
	mask-position: left top;
	overflow: hidden;
}

.polosa {
	width: 40%;
	height: 100%;
	background: transparent;
	animation-name: movePolosa;
	animation-duration: 3s;
	animation-delay: 600ms;
	animation-iteration-count: infinite;

}

@keyframes movePolosa {
	from {
		transform: translateX(-100%);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}

	to {
		transform: translateX(100%);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}
}

.polosa_2 {
	width: 50%;
	height: 100%;
	background: transparent;
	animation-name: movePolosa_2;
	animation-duration: 3s;
	animation-delay: 1.6s;
	animation-iteration-count: infinite;
	z-index: 2;

}

@keyframes movePolosa_2 {
	from {
		transform: translateX(-80%);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}

	to {
		transform: translateX(300%);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}
}

.circle-wait {
	width: 32.37px;
	height: 32.37px;
	position: absolute;
	background-color: #488CE1;
	top: -12.6px;
	left: -15.7px;
	border-radius: 50%;
}

.star__wrap {
	height: 100%;
	position: relative;
	overflow: hidden;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.star {
	display: flex;
	animation-name: star;
	animation-duration: 3s;
	animation-delay: 3s;
	animation-iteration-count: infinite;
	align-items: center;
	justify-content: center;
	height: fit-content;
}

/* 
@keyframes star {
	0% {
		transform: rotate(0);
	}

	30% {
		transform: rotate(0);

	}

	50% {
		transform: rotate(-10deg);

	}

	60% {
		filter: drop-shadow(0px 0px 1px #ffffff72);

	}

	75% {
		filter: drop-shadow(0px 0px 4px #ffffffc5);
	}

	85% {
		filter: drop-shadow(0px 0px 1px #ffffffc5);
	}


	100% {
		transform: rotate(180deg);
		filter: drop-shadow(0px 0px 0px #ffffffc5);
	}
} */
.star-big__contaier {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	animation-name: starBig;
	animation-duration: 3s;
	animation-delay: 3s;
	animation-iteration-count: infinite;

	.vortex:nth-child(2) {
		position: absolute;
		top: 0px;
		right: 50%;
		width: 0px;
		height: 5px;
		background-image: url(../assets/star-line.png);
		background-size: contain;
		background-repeat: no-repeat;
		animation-name: starLine;
		animation-duration: 3s;
		animation-delay: 3s;
		animation-iteration-count: infinite;
	}

	.vortex:nth-child(3) {
		position: absolute;
		top: 50%;
		left: -0.5px;
		width: 5px;
		height: 0px;
		background-image: url(../assets/star-line-L.png);
		background-size: contain;
		background-repeat: no-repeat;
		animation-name: starLineV;
		animation-duration: 3s;
		animation-delay: 3s;
		animation-iteration-count: infinite;

	}

	.vortex:nth-child(4) {
		position: absolute;
		bottom: -1px;
		left: calc(50% + 3px);
		width: 0px;
		height: 5px;
		background-image: url(../assets/star-line-B.png);
		background-size: contain;
		background-repeat: no-repeat;
		animation-name: starLine;
		animation-duration: 3s;
		animation-delay: 3s;
		animation-iteration-count: infinite;
	}

	.vortex:nth-child(5) {
		position: absolute;
		bottom: calc(50%);
		right: -1px;
		width: 5px;
		height: 0px;
		background-image: url(../assets/star-line-R.png);
		background-size: contain;
		background-repeat: no-repeat;
		animation-name: starLineV;
		animation-duration: 3s;
		animation-delay: 3s;
		animation-iteration-count: infinite;
	}
}

@keyframes starLineV {
	0% {
		height: 0;
		transform: translateY(0px);
	}

	50% {
		height: 1px;
		transform: translateY(0px);
	}

	70% {
		height: 8px;
		transform: translateY(0px);
	}

	78% {
		height: 0px;
		transform: translateY(-2px)
	}

	100% {
		height: 0;
		transform: translateY(-2px)
	}
}

@keyframes starLine {
	0% {
		width: 0;
	}

	50% {
		width: 1px;
		transform: translateX(0px);
	}

	70% {
		width: 8px;
	}

	78% {
		width: 0px;
		transform: translateX(-2px)
	}

	100% {
		width: 0;
	}
}


.star-big {
	width: 23px;

}

@keyframes starBig {
	0% {
		transform: rotate(0);
	}

	30% {
		transform: rotate(0);

	}

	50% {
		transform: rotate(-10deg);

	}

	60% {
		filter: drop-shadow(0px 0px 1px #ffffff72);

	}

	75% {
		filter: drop-shadow(0px 0px 4px #ffffff);
	}

	85% {
		filter: drop-shadow(0px 0px 1px #ffffffc5);
	}

	95% {
		transform: rotate(180deg);
		filter: drop-shadow(0px 0px 0px #ffffffc5);
	}

	100% {
		transform: rotate(180deg);
		filter: drop-shadow(0px 0px 0px #ffffffc5);
	}
}

.star-mini {
	width: 12px;
	position: absolute;
}

.star-small {
	width: 6px;
	position: absolute;
}
</style>

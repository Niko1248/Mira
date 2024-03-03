<template>
	<div>
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
	</div>
	<svg>
		<defs>
			<mask id="maskForWindow" x="0" y="0" width="100%" height="100%">
				<rect x="0" y="0" width="16vw" height="100vh" fill="white" />
				<circle cx="5" cy="5" r="20" fill="black" />
			</mask>
		</defs>
	</svg>
	<div class="wrapper">
		<div class="container">
			<div class="polosa_2"></div>
		</div>
		<div class="l"><img src="../assets/mask__2.svg" alt="" srcset=""></div>
		<div class="r"></div>
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
	mounted() {
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
		border-radius: 10px;
		z-index: 2;
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
		transform: translateX(-7vw);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}

	to {
		transform: translateX(16vw);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}
}

.polosa_2 {
	width: 50%;
	height: 100%;
	background: transparent;
	animation-name: movePolosa_2;
	animation-duration: 3s;
	animation-delay: 600ms;
	animation-iteration-count: infinite;
	z-index: 2;

}

@keyframes movePolosa_2 {
	from {
		transform: translateX(-20vw);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}

	to {
		transform: translateX(30vw);
		background: linear-gradient(117deg, rgba(72, 140, 225, 1) 15%, rgba(214, 214, 214, 0.25) 50%, rgba(72, 140, 225, 1) 80%);
	}
}

.circle-wait {
	width: 35px;
	height: 35px;
	position: absolute;
	background-color: #488CE1;
	top: -32%;
	left: -4.5%;
	border-radius: 50%;
}

.star__wrap {
	height: 100%;
	position: relative;
	overflow: hidden;
	border-radius: 50%;
}

.star {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%
}

.star-big {
	width: 23px;
}

.star-mini {
	width: 12px;
	position: absolute;
}

.star-small {
	width: 6px;
	position: absolute;
}
</style>import { h } from 'vue';

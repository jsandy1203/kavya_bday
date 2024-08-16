<template>
	<div class="birthdayNotes">
		<p>Hey Andhra girl with Telanga slang😅!....Many more happy returns of the day man. Appudappudu bagaa kaali ga unte ilanti ideas osthai.
			Hope you liked it.</p>
		<p class="myy-0">Oorike em kaadu le......Anthaa party kosame😅</p>
		<div class="flex-center">
			<img :src="partyTime" alt="" style="width: 200px; height: 200px;">
		</div>
		<p>Wish you are actually excited and not sad like Joey from  the F.R.I.E.N.D.S. But who I am kidding, we all get to be sad like Joey😅. Still chin up...silver jubilee complete chesav.</p>
		<div class="flex-center">
			<img :src="joeyHappy" alt="" style="width: 200px; height: 200px;">
		</div>
		<p>Anyways...short ga unchutunna...Once again have a great day and another great year man. Byeeee!</p>
		<div class="flex-center">
			<img :src="finalImg" alt="" style="width: 200px; height: 200px;">
		</div>
	</div>
</template>

<script setup>
import partyTime from "../assets/party_time.jpg";
import joeyHappy from "../assets/joey_happy.jpg";
import finalImg from "../assets/final_img.jpg";
</script>

<style scoped>
p {
	text-align: justify;
	font-family: none;
	line-height: 22px;
}
img {
	width: 300px !important;
	margin: 1rem 0;
	height: 200px !important
}
.birthdayNotes {
	display: flex;
	flex-direction: column;
	background-color: #c7f2e6;
	height: 100vh;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	font-size: 18px;
	padding: 1rem;
	overflow-y: scroll;
}
.flex-center {
	display: flex;
	justify-content: center;
}
</style>
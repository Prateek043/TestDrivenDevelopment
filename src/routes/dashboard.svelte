<script>
	export let user; // Assuming that `user` is an object with an `email` property
</script>

<style>

	.container {
		background-image: url('https://img.freepik.com/premium-photo/beauty-pastel-color-floral-background_608068-32044.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	.content {
		text-align: center;
		padding: 50px;
	}

	.greeting {
		font-size: 24px;
		font-weight: bold;
		color:black;
	}

	.email {
		font-size: 18px;
		color:black;
	}
</style>

<div class="container">
	<div class="content">
		{#if user && user.email}
			<p class="greeting">Hello, User!</p>
			<p class="email">Your email: {user.email}</p>
		{:else}
			<p class="greeting">Hello, Guest!</p>
		{/if}
	</div>
</div>

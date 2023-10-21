<script>
	import { session } from '$app/stores';
	import { supabaseClient } from '$lib/sb';
	import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
</script>

<svelte:head>
	<title>SvelteKit-App</title>
</svelte:head>

<style>
	main {
		text-align: center;
		margin-top: 20px;
	}

	.welcome-message {
		font-size: 24px;
		margin-bottom: 10px;
	}

	.sign-out-button {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 20px;
	}

	.sign-in-message {
		color: red;
		font-size: 18px;
	}
	.btn{
		text-decoration:none;
		color: #fff;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
	}
</style>

<SupaAuthHelper {supabaseClient} {session}>
	<main>
		<div>
			<h2 class="welcome-message">
				{#if $session?.user?.id}
  				Welcome to Dashboard
				{:else}
 				 <span class="sign-in-message">Please sign in to access the dashboard.</span>
				{/if}
			</h2>

			<slot />

			<div>
				{#if $session?.user?.id}
					<button class="sign-out-button"><a class="btn" href="/api/auth/logout">Sign out</a></button>
				{/if}
			</div>
		</div>
	</main>
</SupaAuthHelper>

 <script>
  import { error } from '@supabase/auth-helpers-svelte';
	import { supabaseClient } from '../lib/sb.js';
	export let errors = null;
	export let message = null;
	let email = '';
  let password = '';

  export const GET = async ({ locals }) => {
    if (locals.user) {
        return {
            status: 303,
            headers: {
                location: '/dashboard'
            }
        };
    }
    return {
        status: 200
    };
};

  async function handleSubmit(event) {
    event.preventDefault();

    // Basic client-side form validation
    if (!email || !password) {
      errorMessage = 'Please fill in all fields.';
      return;
    }

    // Call the registration function to interact with Supabase
    const registrationResult = await registerUser(email, password);

    if (registrationResult.success) {
      // Handle a successful registration, e.g., redirect to a dashboard or show a success message
      GET(locals);
    } else {
      // Handle registration errors, e.g., display an error message
    //   errorMessage = registrationResult.message;
	console.log(error)
    }
  }

	async function registerUser(email, password) {
		const { user,error } = await supabaseClient.auth.signUp(
        { email, password }, 
        { redirectTo: `https://fpdchkwrnmlivobvxrhq.supabase.co/logging-in`}
    );

  if (error) {
    return { success: false, message: error.message };
  } else {
    return { success: true, user };
  }
}
</script>

<style>
 
  .container {
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
  }
</style>

<section>
	<div class="container">
		<h1 style="color: #007bff;">Sign up</h1>
		{#if errors}
			<div style="color: red;">{errors.form}</div>
		{/if}
		{#if message}
			<div>{message}</div>
		{/if}
		<form method="post" style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
			<div>
				<label for="email" style="font-weight: bold; margin-bottom: 5px;">Email</label>
				<p>
					<input
						id="email"
						name="email"
						bind:value={email}
						type="email"
						placeholder="Email"
						required
						style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"
					/>
				</p>
			</div>
			<div>
				<label for="password" style="font-weight: bold; margin-bottom: 5px;">Password</label>
				<p>
					<input
						id="password"
						name="password"
						bind:value={password}
						type="password"
						placeholder="Password"
						required
						style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"
					/>
				</p>
			</div>
			<div>
				<p>
					<button type="submit"
						style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;"
					>Sign up</button>
				</p>
			</div>
		</form>

		<div>
			<p>
				Already have an account? <a href="/" style="text-decoration: none; color: #007bff; font-weight: bold;">Sign in</a>
			</p>
		</div>
	</div>
</section> 


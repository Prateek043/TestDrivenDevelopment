<script>
	export let errors;
	export let values;
</script>

<style>
  /* Add some global styles for the body and HTML */
  body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
  }

  /* Style the container div */
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

  h1 {
    color: #007bff;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }


  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
</style>

<section>
	<div class="container">
		<h1>Sign in</h1>
		{#if errors}
			<div style="color: red;">{errors.form}</div>
		{/if}
		<form method="post">
			<div>
				<label for="email">Email</label>
				<p>
					<input
						id="email"
						name="email"
						value={values?.email ?? ''}
						type="email"
						placeholder="Email"
						style="width: 50%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"
						required
					/>
				</p>
			</div>
			<div>
				<label for="password">Password</label>
				<p>
					<input
						id="password"
						name="password"
						value={values?.password ?? ''}
						type="password"
						placeholder="Password"
						style="width: 50%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"
						required
					/>
				</p>
			</div>
			<div>
				<p>
					<button>Sign in</button>
				</p>
			</div>
		</form>

		<div>
			<p>
				Don't have an account? <a href="/signup">Sign up</a>
			</p>
		</div>
	</div>
</section>

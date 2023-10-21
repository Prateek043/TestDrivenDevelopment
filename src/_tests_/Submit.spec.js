// SignUp.test.js
import SignUp from '../routes/signup.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { server } from '../supabase.mock';

describe('SignUp component', () => {
  beforeEach(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers(); 
    server.close(); 
  });

  it('should register a user when the "Sign up" button is clicked', async () => {
    const { getByRole } = render(SignUp);
    const submitButton = getByRole('button', { name: 'Sign up' });


    await fireEvent.click(submitButton);

    expect(window.location.pathname).toBe('/');

    
  });
});

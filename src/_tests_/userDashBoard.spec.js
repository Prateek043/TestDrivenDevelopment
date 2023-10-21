import userDashBoard from '../routes/dashboard.svelte';
import  {render,screen,fireEvent} from'@testing-library/svelte'
import "@testing-library/jest-dom"
import { describe, expect } from 'vitest';

describe('YourComponent', () => {
  it('renders with a guest greeting when user is undefined', () => {
    const { getByText } = render(userDashBoard, {
      user: undefined, 
    });
    
    expect(getByText('Hello, Guest!')).toBeInTheDocument();

  });

  it('renders with a guest greeting when user.email is empty', () => {
    const { getByText } = render(userDashBoard, {
      user: { email: '' }, 
    });
    
    expect(getByText('Hello, Guest!')).toBeInTheDocument();

  });

  it('renders the user greeting and email when user.email is provided', () => {
    const user = { email: 'user@example.com' };
    const { getByText } = render(userDashBoard, { user });
    
    expect(getByText('Hello, User!')).toBeInTheDocument();
    expect(getByText('Your email: user@example.com')).toBeInTheDocument();
  });
});

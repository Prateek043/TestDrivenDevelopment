// supabase.mock.js
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { supabaseClient } from './lib/sb'; // Adjust the import path

const server = setupServer(
  rest.post(
    'https://api.supabase.co/auth/v1/signup',
    async (req, res, ctx) => {
      // Mock a successful registration response
      return res(
        ctx.json({
          user: { id: 1, email: 'test@example.com' },
          access_token: 'mocked-access-token',
        })
      );
    }
  )
);

export { server };

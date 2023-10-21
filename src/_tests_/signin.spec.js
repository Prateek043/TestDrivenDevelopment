import signin from "../routes/index.svelte"
import  {render,screen,fireEvent} from'@testing-library/svelte'
import "@testing-library/jest-dom"
import { describe, expect } from 'vitest';

describe("Sign in Page",()=>{
    describe('Layout', () => {
        it("has signin header",()=>{
            render(signin);
            const header=screen.getByRole("heading",{name:"Sign in"});
            expect(header).toBeInTheDocument();
        })
        it("has email input",()=>{
            render(signin);
            const input=screen.getByLabelText("Email");
            expect(input).toBeInTheDocument();
        })
        it("has password input",()=>{
            render(signin);
            const input=screen.getByLabelText("Password");
            expect(input).toBeInTheDocument();
        })
        it("has password type for password input",()=>{
            render(signin);
            const input=screen.getByLabelText("Password");
            expect(input.type).toBe("password");
        })
        it("has signup Button",()=>{
            render(signin);
            const button=screen.getByRole("button",{name:"Sign in"});
            expect(button).toBeInTheDocument();
        })
        it("has signin Button",()=>{
            render(signin);
            const button=screen.getByRole("button",{name:"Sign in"});
            expect(button).toBeInTheDocument();
        })
        it("should redirect to the dashboard on click", async () => {

            const { getByText } = render(signin);
        
            const signInButton=screen.getByRole("heading",{name:"Sign in"});
            await fireEvent.click(signInButton);
            expect(window.location.href).toContain("/");
          });
      })
})

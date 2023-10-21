import signup from "../routes/signup.svelte"
import  {render,screen,fireEvent} from'@testing-library/svelte'
import "@testing-library/jest-dom"
import { describe, expect } from 'vitest';


describe("Sign Up Page",()=>{
    describe('Layout', () => {
        it("has signup header",()=>{
            render(signup);
            const header=screen.getByRole("heading",{name:"Sign up"});
            expect(header).toBeInTheDocument();
        })
        it("has email input",()=>{
            render(signup);
            const input=screen.getByLabelText("Email");
            expect(input).toBeInTheDocument();
        })
        it("has password input",()=>{
            render(signup);
            const input=screen.getByLabelText("Password");
            expect(input).toBeInTheDocument();
        })
        it("has password type for password input",()=>{
            render(signup);
            const input=screen.getByLabelText("Password");
            expect(input.type).toBe("password");
        })
        it("has signup Button",()=>{
            render(signup);
            const button=screen.getByRole("button",{name:"Sign up"});
            expect(button).toBeInTheDocument();
        })
        it("has signin Button",()=>{
            render(signup);
            const button=screen.getByRole("button",{name:"Sign up"});
            expect(button).toBeInTheDocument();
        })
      })
})


 

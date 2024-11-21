import {userEvent} from '@testing-library/user-event';
import { vi,describe,it, expect } from 'vitest';
import { render,screen } from '@testing-library/react';
import CustomButton from './CustomButton';

describe("Button Testing", ()=>{
    it("should render button",()=>{
        render(<CustomButton onClick={()=>{}}/>);
        const button = screen.getByRole("button",{name: "Click Me"});
        expect(button).toBeInTheDocument();
    });

    it("should call onclick after click", async ()=>{
        const onClick = vi.fn()
        const  user = userEvent.setup()
        render(<CustomButton onClick={onClick} />);

        const button = screen.getByRole("button", { name: "Click Me" });
        await user.click(button)
        expect(onClick).toHaveBeenCalled();
    });

    it("should not call without click",async()=>{
        const onClick = vi.fn()
        render(<CustomButton onClick={onClick}/>);

        expect(onClick).not.toHaveBeenCalled();
    })

});
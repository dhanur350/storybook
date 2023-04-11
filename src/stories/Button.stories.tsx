import type {Meta, StoryObj} from "@storybook/react" 
import {CustomButton} from "../components"

const meta:Meta<typeof CustomButton> = {
    title:"Button",
    component:CustomButton
}

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Red:Story = {
    args:{
        backgroundColor:"Red" || "Blue" || "Green",
        label:"Click ME"        
    },
}

// export const Red = () => <CustomButton label="Press ME" size="3rem" backgroundColor="blue"/>


// export const Green = () => <CustomButton label="Press ME" size="2rem" backgroundColor="green"/>
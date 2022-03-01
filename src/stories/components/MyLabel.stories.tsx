import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';



export default{

    title:'CursoReactPro/UI/myLabel',
    component:MyLabel,
    argTypes:{
        size:{control:'select'},
        color:{control:'select'}

    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel>= (args) => <MyLabel {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    
    size:'h2',
    allCaps:false
}
export const AllCaps = Template.bind({})

AllCaps.args = {
    size:'h2',
    allCaps:true

}
export const Secondary = Template.bind({})
Secondary.args = {
    size:'h2',
    color:'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size:'h2',
    color:'tertiary'
}
export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    size:'h2',
    fontColor: '#8038e6'
}

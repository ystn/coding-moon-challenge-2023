import Radar from "../components/radar/Radar";

export default {
    title: "Components/Radar",
    component: Radar,
};

const Template = (args) => <Radar {...args} />;

export const Level0 = Template.bind({});
Level0.args = {
    level: 0,
};

export const Level1 = Template.bind({});
Level1.args = {
    level: 1,
};

export const Level2 = Template.bind({});
Level2.args = {
    level: 2,
};

export const Level3 = Template.bind({});
Level3.args = {
    level: 3,
};
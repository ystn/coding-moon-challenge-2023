import MapTopBar from "../components/MapTopBar";

export default {
    title: "Components/MapTopBar",
    component: MapTopBar,
};

const Template = (args) => <MapTopBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    level: 0,
};
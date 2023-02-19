import MapPage from "../components/MapPage";

export default {
    title: "Components/MapPage",
    component: MapPage,
};

const Template = (args) => <MapPage {...args} />;

export const Default = Template.bind({});
Default.args = {
    level: 0,
};
import Popup from "../components/popup/Popup";

export default {
    title: "Components/Popup",
    component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "Default",
    initialValue: 50,
};
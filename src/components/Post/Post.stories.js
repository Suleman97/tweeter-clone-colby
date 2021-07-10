
import { Post } from './Post';

export default {
  title: 'Example/Button',
  component: Post,

};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});



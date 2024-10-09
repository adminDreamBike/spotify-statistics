import { Search } from "./Search";

export default {
  title: "",
  component: Search,
  parameters: {
    docs: {
      description: {
        component: "Search",
      },
    },
  },
  argTypes: {},
};

export const Default = () => <Search />;

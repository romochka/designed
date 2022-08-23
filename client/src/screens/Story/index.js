import Layout from "../../components/layout";
import { useTokens } from "../../providers/tokens";

const useStoryStyle = () => {
   const backgroundColor = useTokens("colors.story.accent[1]");
   return { backgroundColor }
};

const Story = () => {

   const contentDependentStyle = useStoryStyle();

   return (
      <Layout {...{ contentDependentStyle }}>story</Layout>
   )

};

export default Story;

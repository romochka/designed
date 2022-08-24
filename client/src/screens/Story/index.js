import Layout from "../../components/layout";
import Button from "../../components/ui/button";
import { useTokens } from "../../providers/tokens";

const useStoryStyle = () => {
   const backgroundColor = useTokens("colors.story.accent[1]");
   return { backgroundColor }
};

const Story = () => {

   const contentDependentStyle = useStoryStyle();

   return (
      <Layout {...{ contentDependentStyle }}>
         story
         <br />
         <Button>A button</Button><br />
         <Button disabled>A disabled button</Button>
      </Layout>
   )

};

export default Story;

import ButtonUnstyled, { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import styled from "@emotion/styled";
import { useTokens } from "../../providers/tokens";

const component = (unstyled, token) => styled(unstyled)(token);

const Button = (props) => {
   const tokens = useTokens();
   const token = {
      ...tokens.composite.button.action.default[0],
      ...tokens.composite.button.action.default[1],
   }
   const Component = component(ButtonUnstyled, token);
   return <Component {...props } />
}

export default Button;

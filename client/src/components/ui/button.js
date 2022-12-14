import ButtonUnstyled, { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { css } from "@emotion/css";
import { withTokens } from "../../providers/tokens";

const style = ({
   tokens: { composite: { button } },
   variant = "action",
}) => {
   console.log(button[variant]?.disabled[1]);
    const res = css`
   all: unset;
   ${button[variant]?.default[0]}
   ${button[variant]?.default[1]}
   &:hover {
      ${button[variant]?.hover[0]}
   }
   &:active {
      ${button[variant]?.active[0]}
   }
   &:disabled {
      ${button[variant]?.disabled[0]}
      ${button[variant]?.disabled[1]}
   }
`; console.log(res); return res; };


const Button = withTokens(ButtonUnstyled, style);

export default Button;

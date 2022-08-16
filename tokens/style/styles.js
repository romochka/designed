const px = value => /px$/.test(value) ? value : `${value}px`;

export const styles = [
   [
      ["verticalPadding", "horizontalPadding"],
      args => ({ padding: `${px(args[0])} ${px(args[1])}` }),
   ],
   [
      ["verticalPadding"],
      args => ({ paddingTop: `${px(args[0])}`, paddingBottom: `${px(args[0])}` }),
   ],
   [
      ["horizontalPadding"],
      args => ({ paddingLeft: px(args[0]), paddingRight: px(args[0]) }),
   ],
   [
      ["padding"],
      args => ({ padding: px(args[0]) }),
   ],
   [
      ["itemSpacing"],
      args => ({ gap: px(args[0]) }),
   ],
   [
      ["textCase"],
      args => ({ textTransform: args[0] }),
   ],
   [
      ["fill"],
      (args, textNode) => ({ [textNode ? "color" : "backgroundColor"]: args[0] }),
   ],
];

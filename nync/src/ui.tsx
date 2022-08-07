import {
   Button,
   Columns,
   Container,
   render,
   Text,
   TextboxNumeric,
   VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

import {
   CloseHandler,
   CreateRectanglesHandler,
   ExportNodesHandler,
} from "./types";

function Plugin() {
   const [count, setCount] = useState<number | null>(5);
   const [countString, setCountString] = useState("5");
   const handleCreateRectanglesButtonClick = useCallback(
      function () {
         if (count !== null) {
            emit<CreateRectanglesHandler>("CREATE_RECTANGLES", count);
         }
      },
      [count]
   );
   const handleCloseButtonClick = useCallback(function () {
      emit<CloseHandler>("CLOSE");
   }, []);
   const handleExportButtonClick = useCallback(() => {
      emit<ExportNodesHandler>("EXPORT_NODES");
   }, []);

   window.onmessage = event => {
      const msg = event.data.pluginMessage;
      console.log(msg);
      if (msg.type === "post") {
         fetch("http://localhost:5000/post", {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
            },
            body: JSON.stringify(msg.data),
         })
            .then(res => {
               console.log(`response:`, res);
            })
            .catch(err => {
               console.log(`error:`, err);
            });
      }
   };

   return (
      <Container space="medium">
         <VerticalSpace space="large" />
         <Text muted>Count</Text>
         <VerticalSpace space="small" />
         <TextboxNumeric
            onNumericValueInput={setCount}
            onValueInput={setCountString}
            value={countString}
         />
         <VerticalSpace space="extraLarge" />
         <Columns space="extraSmall">
            <Button fullWidth onClick={handleCreateRectanglesButtonClick}>
               Create
            </Button>
            <Button fullWidth onClick={handleExportButtonClick}>
               Export
            </Button>
            <Button fullWidth onClick={handleCloseButtonClick} secondary>
               Close
            </Button>
         </Columns>
         <VerticalSpace space="small" />
      </Container>
   );
}

export default render(Plugin);

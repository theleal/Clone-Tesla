import React from "react";
import DefaultOverlayContent from "../DefaultContentOverlay";

import { ModelsWrapper, ModelSection } from "../Model";


import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection 
            modelName="Modal One"
            overlayNode={
              <DefaultOverlayContent 
              label="Modal One"
              description="Order online for Delivery"
              />
            }
          />
        </div>
      </ModelsWrapper> 
    </Container>
  );
};

export default Page;






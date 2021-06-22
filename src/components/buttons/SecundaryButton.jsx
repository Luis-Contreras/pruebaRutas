import React from "react";
import { Button } from "@chakra-ui/react";

const SecundaryButton = ({ onClick, size, children, props }) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      size={size}
      ml="2px"
      colorScheme="pink">
      {children}
    </Button>
  );
};

export default SecundaryButton;

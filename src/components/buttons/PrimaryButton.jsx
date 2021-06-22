import React from "react";
import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ onClick, size, children, props }) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      size={size}
      ml="2px"
      colorScheme="teal">
      {children}
    </Button>
  );
};

export default PrimaryButton;

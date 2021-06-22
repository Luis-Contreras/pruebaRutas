import { createStandaloneToast } from "@chakra-ui/react";

const Notify = ({ description = undefined, title, type }) => {
  const toast = createStandaloneToast();
  toast({
    title,
    description,
    status: type,
    duration: 3000,
    isClosable: true,
  });
};

export default Notify;

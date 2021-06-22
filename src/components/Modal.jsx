import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import SecundaryButton from "./buttons/SecundaryButton";

const Modal = ({ isOpen, onClose, children, actions }) => {
  return (
    <ModalChakra isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Actualizar ruta</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <SecundaryButton colorScheme="blue" mr={3} onClick={onClose}>
            Cerrar
          </SecundaryButton>
          {actions}
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
};

export default Modal;

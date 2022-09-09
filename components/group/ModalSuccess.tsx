import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Center,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSuccess: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Center p={4}>
          <Icon color="green.500" as={AiFillCheckCircle} boxSize="36" />
        </Center>
        <Center>Your information is updated successfully</Center>
        <Center p={4}>
          <Button onClick={onClose}>OK</Button>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;

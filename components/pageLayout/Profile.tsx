import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const Profile: React.FC<Props> = ({}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEditSigninInfo, setIsEditSigninInfo] = useState<boolean>(false);

  return (
    <Box className="min-h-screen" p="6">
      <Text fontSize="3xl" as="b">
        My details
      </Text>
      <Box p="4">
        <Text fontSize="lg" as="b">
          Personal Information
        </Text>
        <Spacer h="4" />
        <Divider borderColor="gray.400" />
        <Spacer h="4" />
        <Text color="gray.500">
          If you want to edit your personal information please click button
          edit.
        </Text>
        <form method="POST">
          <Box p="4">
            <Box>
              <FormLabel>FIRST NAME </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="firstname"
                type="text"
                value="first name"
                isRequired={true}
                isReadOnly={!isEdit}
              />
              <Spacer h="5" />
              <FormLabel>LAST NAME </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="lastname"
                type="text"
                value="last name"
                isRequired={true}
                isReadOnly={!isEdit}
              />
              <Spacer h="5" />
              <FormLabel>PHONE NUMBER </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="phoneNumber"
                type="text"
                value="phone number"
                isRequired={true}
                isReadOnly={!isEdit}
              />
              <Spacer h="5" />
              <FormLabel>ADDRESS </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="address"
                type="text"
                value="address"
                isRequired={true}
                isReadOnly={!isEdit}
              />
            </Box>
          </Box>
        </form>
        <Flex justifyContent="flex-end">
          {isEdit ? (
            <ButtonGroup>
              <Button colorScheme="teal" onClick={() => setIsEdit(false)}>
                CANCEL
              </Button>
              <Button>SAVE</Button>
            </ButtonGroup>
          ) : (
            <Button colorScheme="teal" onClick={() => setIsEdit(true)}>
              EDIT
            </Button>
          )}
        </Flex>
      </Box>
      <Spacer h="10" />
      <Box p="4">
        <Text fontSize="lg" as="b">
          Sign In Information
        </Text>
        <Spacer h="4" />
        <Divider borderColor="gray.400" />
        <form method="POST">
          <Box p="4">
            <Box>
              <FormLabel>EMAIL</FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="email"
                type="email"
                value="first name"
                isRequired={true}
                isReadOnly={!isEditSigninInfo}
              />
              <Spacer h="5" />
              <FormLabel>PASSWORD</FormLabel>
              <Button colorScheme="teal">PASSWORD EDIT</Button>
            </Box>
          </Box>
        </form>
        <Flex justifyContent="flex-end">
          {isEditSigninInfo ? (
            <ButtonGroup>
              <Button
                colorScheme="teal"
                onClick={() => setIsEditSigninInfo(false)}
              >
                CANCEL
              </Button>
              <Button>SAVE</Button>
            </ButtonGroup>
          ) : (
            <Button
              colorScheme="teal"
              onClick={() => setIsEditSigninInfo(true)}
            >
              EDIT
            </Button>
          )}
        </Flex>
      </Box>
      <Spacer h="20" />
    </Box>
  );
};

export default Profile;

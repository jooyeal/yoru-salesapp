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
  useDisclosure,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  personalInfoUpdateWrapper,
  signinInfoUpdateWrapper,
} from "../../lib/services/profileWrapper";
import ModalSuccess from "../group/ModalSuccess";

interface Props {
  userInfo?: UserInfo;
  errorMessage?: string;
}

const Profile: React.FC<Props> = ({ userInfo, errorMessage }) => {
  const { data } = useSession();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEditSigninInfo, setIsEditSigninInfo] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserInfo | undefined>(
    userInfo
  );

  const onPersonalInfoSubmit = (e: any) => {
    e.preventDefault();
    const userId = data?.id;
    if (userId) {
      const firstname = e.target.firstname.value;
      const lastname = e.target.lastname.value;
      const nickname = e.target.nickname.value;
      const phoneNumber = e.target.phoneNumber.value;
      const address = e.target.address.value;
      personalInfoUpdateWrapper({
        data: { userId, firstname, lastname, nickname, phoneNumber, address },
        successCallback: (status, data) => {
          onOpen();
        },
        errorCallback: (status, data) => {
          //TODO: fetch error
          console.log(status, data);
        },
      });
    } else {
      //TODO: authentication error
    }
  };

  const onSignInfoSubmit = (e: any) => {
    e.preventDefault();
    const userId = data?.id;
    if (userId) {
      const email = e.target.email.value;
      signinInfoUpdateWrapper({
        data: { userId, email },
        successCallback: (status, data) => {
          onOpen();
        },
        errorCallback: (status, data) => {
          //TODO: fetch error
          console.log(status, data);
        },
      });
    } else {
      //TODO: authentication error
    }
  };

  const successModalOnClose = () => {
    onClose();
    router.reload();
  };

  return (
    <Box className="min-h-screen" p="6">
      <ModalSuccess isOpen={isOpen} onClose={successModalOnClose} />
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
        <form method="POST" onSubmit={onPersonalInfoSubmit}>
          <Box p="4">
            <Box>
              <FormLabel>FIRST NAME </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="firstname"
                type="text"
                value={userDetails?.firstname ?? ""}
                isRequired={true}
                isReadOnly={!isEdit}
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return { ...prev, [e.target.name]: e.target.value };
                  })
                }
              />
              <Spacer h="5" />
              <FormLabel>LAST NAME </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="lastname"
                type="text"
                value={userDetails?.lastname ?? ""}
                isRequired={true}
                isReadOnly={!isEdit}
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return { ...prev, [e.target.name]: e.target.value };
                  })
                }
              />
              <Spacer h="5" />
              <FormLabel>NICK NAME </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="nickname"
                type="text"
                value={userDetails?.nickname ?? ""}
                isRequired={true}
                isReadOnly={!isEdit}
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return { ...prev, [e.target.name]: e.target.value };
                  })
                }
              />
              <Spacer h="5" />
              <FormLabel>PHONE NUMBER </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="phoneNumber"
                type="text"
                value={userDetails?.phoneNumber ?? ""}
                isRequired={true}
                isReadOnly={!isEdit}
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return { ...prev, [e.target.name]: e.target.value };
                  })
                }
              />
              <Spacer h="5" />
              <FormLabel>ADDRESS </FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="address"
                type="text"
                value={userDetails?.address ?? ""}
                isRequired={true}
                isReadOnly={!isEdit}
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return { ...prev, [e.target.name]: e.target.value };
                  })
                }
              />
            </Box>
          </Box>
          <Flex justifyContent="flex-end">
            {isEdit ? (
              <ButtonGroup>
                <Button
                  size="sm"
                  colorScheme="teal"
                  onClick={() => {
                    setIsEdit(false);
                    setUserDetails(userInfo);
                  }}
                >
                  CANCEL
                </Button>
                <Button size="sm" type="submit">
                  SAVE
                </Button>
              </ButtonGroup>
            ) : (
              <Button
                size="sm"
                colorScheme="teal"
                onClick={() => setIsEdit(true)}
              >
                EDIT
              </Button>
            )}
          </Flex>
        </form>
      </Box>
      <Spacer h="10" />
      <Box p="4">
        <Text fontSize="lg" as="b">
          Sign In Information
        </Text>
        <Spacer h="4" />
        <Divider borderColor="gray.400" />
        <form method="POST" onSubmit={onSignInfoSubmit}>
          <Box p="4">
            <Box>
              <FormLabel>EMAIL</FormLabel>
              <Input
                colorScheme="black"
                variant="filled"
                name="email"
                type="email"
                value={userDetails?.email ?? ""}
                isRequired={true}
                isReadOnly={!isEditSigninInfo}
                onChange={(e) =>
                  setUserDetails((prev) => {
                    return { ...prev, [e.target.name]: e.target.value };
                  })
                }
              />
              <Spacer h="5" />
              <FormLabel>PASSWORD</FormLabel>
              <Button colorScheme="teal">PASSWORD EDIT</Button>
            </Box>
          </Box>
          <Flex justifyContent="flex-end">
            {isEditSigninInfo ? (
              <ButtonGroup>
                <Button
                  size="sm"
                  colorScheme="teal"
                  onClick={() => {
                    setIsEditSigninInfo(false);
                    setUserDetails(userInfo);
                  }}
                >
                  CANCEL
                </Button>
                <Button size="sm" type="submit">
                  SAVE
                </Button>
              </ButtonGroup>
            ) : (
              <Button
                size="sm"
                colorScheme="teal"
                onClick={() => setIsEditSigninInfo(true)}
              >
                EDIT
              </Button>
            )}
          </Flex>
        </form>
      </Box>
      <Spacer h="20" />
    </Box>
  );
};

export default Profile;

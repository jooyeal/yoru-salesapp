import { Button } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button size="sm" colorScheme="teal" onClick={() => signOut()}>
          SIGN OUT
        </Button>
      </>
    );
  }
  return (
    <>
      <Button size="sm" colorScheme="teal" onClick={() => signIn()}>
        SIGN IN
      </Button>
    </>
  );
}

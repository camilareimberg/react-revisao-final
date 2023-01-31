import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image
} from "@chakra-ui/react";
import receita from "../assets/receita.jpg";

const SignupForm = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Create your account</Heading>
          <FormControl id="name">
            <FormLabel>Nome</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* chamamos a imagem no src {receita} e importamos lá em cima */}
        <Image
          style={{ height: "100vh", width: "100vw" }}
          alt={"Login Image"}
          objectFit={"cover"}
          src={receita}
        />
      </Flex>
    </Stack>
  );
};
export default SignupForm;

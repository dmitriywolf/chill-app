import React from "react";
import { TextFieldRHF } from "components/rhf/TextFieldRHF/TextFieldRHF";
import { FormProvider, useForm } from "react-hook-form";
import { VStack, Center, Box, Heading, Button } from "@chakra-ui/react";
import { login } from "services/api";
import { useAuthContext } from "hooks/useAuthContext";

export default function Login() {
  const methods = useForm();
  const { onLogin } = useAuthContext();

  const onSubmit = async (data) => {
    try {
      const { data: loginData } = await login(data);
      onLogin(loginData.token, loginData.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Center h="100vh" w="full">
      <Box width="440px">
        <Heading as="h3" size="lg" textAlign="center">
          Войти
        </Heading>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <TextFieldRHF
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
              />
              <TextFieldRHF
                id="password"
                name="password"
                label="Пароль"
                placeholder="Пароль"
                isPassword
              />
              <Center width="full">
                <Button type="submit" width="full" colorScheme="blue">
                  Войти
                </Button>
              </Center>
            </VStack>
          </form>
        </FormProvider>
      </Box>
    </Center>
  );
}

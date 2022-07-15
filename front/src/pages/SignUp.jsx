import React from "react";
import { TextFieldRHF } from "components/rhf/TextFieldRHF/TextFieldRHF";
import { FormProvider, useForm } from "react-hook-form";
import { VStack, Center, Box, Heading, HStack, Button } from "@chakra-ui/react";
import { register } from "services/api";
import { useAuthContext } from "hooks/useAuthContext";

export default function SignUp() {
  const methods = useForm();
  const { onLogin } = useAuthContext();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { data: registerData } = await register(data);
      onLogin(registerData.token, registerData.data.user);
    } catch (err) {
      console.log(err);
      // if (e.response.status === 422) {
      //   Object.keys(e.response.data.errors).forEach((key) => {
      //     setError(key, {
      //       type: "manual",
      //       message: e.response.data.errors[key],
      //     });
      //   });
      // }
    }
  };

  return (
    <Center h="100vh" w="full">
      <Box width="440px">
        <Heading as="h3" size="lg" textAlign="center">
          Регистрация
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
              <TextFieldRHF
                id="passwordConfirm"
                name="passwordConfirm"
                label="Подтвердите пароль"
                placeholder="Подтвердите пароль"
                isPassword
              />
              <HStack width="full" spacing={6}>
                <TextFieldRHF
                  id="firstName"
                  name="firstName"
                  label="Имя"
                  placeholder="Имя"
                />
                <TextFieldRHF
                  id="secondName"
                  name="lastName"
                  label="Фамилия"
                  placeholder="Фамилия"
                />
              </HStack>
              <Center width="full">
                <Button type="submit" width="full" colorScheme="blue">
                  Зарегестрироваться
                </Button>
              </Center>
            </VStack>
          </form>
        </FormProvider>
      </Box>
    </Center>
  );
}

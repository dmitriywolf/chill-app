import React from "react";
import { Flex, HStack, Divider, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuthContext } from "hooks/useAuthContext";

export default function Header() {
  const { isAuth, onLogout } = useAuthContext();

  console.log(isAuth);

  return (
    <>
      <Flex
        py="15px"
        px="40px"
        alignItems="center"
        justify="space-between"
        bg="black"
      >
        <HStack>
          <Link as={RouterLink} to="/" color="teal.500">
            Home
          </Link>
          <Link as={RouterLink} to="/users" color="teal.500">
            Пользователи
          </Link>
          <Link as={RouterLink} to="/tours" color="teal.500">
            Туры
          </Link>
        </HStack>
        <HStack>
          {!isAuth ? (
            <>
              <Button as={RouterLink} colorScheme="telegram" to="/login">
                Войти
              </Button>
              <Button as={RouterLink} colorScheme="messenger" to="/register">
                Регистрация
              </Button>
            </>
          ) : (
            <Button onClick={onLogout}>Выйти</Button>
          )}
        </HStack>
      </Flex>
      <Divider />
    </>
  );
}

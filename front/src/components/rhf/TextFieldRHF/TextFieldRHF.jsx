import { useFormContext } from "react-hook-form";
import { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

export function TextFieldRHF(props) {
  const {
    id,
    name,
    label,
    isPassword = false,
    placeholder,
    isDisabled,
    isReadOnly,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors?.[name];

  return (
    <FormControl>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        {isPassword ? (
          <>
            <Input
              id={id}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              autoComplete="off"
              {...register(name)}
              borderColor={hasError ? "red.500" : "white.500"}
              {...rest}
            />
            <InputRightElement width="4.5rem">
              <Button size="sm" onClick={handleClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </>
        ) : (
          <Input
            id={id}
            placeholder={placeholder}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            autoComplete="off"
            {...register(name)}
            borderColor={hasError ? "red.500" : "white.500"}
            {...rest}
          />
        )}
      </InputGroup>
      <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
}

import {
  Textarea,
  FormControl,
  FormLabel,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { styles } from "./chakra.styles";

export function TextareaRHF(props) {
  const {
    id,
    name,
    label,
    placeholder,
    isDisabled,
    isReadOnly,
    height,
    ...rest
  } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors?.[name];

  return (
    <FormControl>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        <Textarea
          id={id}
          placeholder={placeholder}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          {...register(name)}
          sx={styles({ hasError, height })}
          {...rest}
        />
      </InputGroup>
      <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
}

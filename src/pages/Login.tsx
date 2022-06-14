import {
  Button,
  Center,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import useUserStore from "../store/useStore";

const UserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type UserFormType = z.infer<typeof UserSchema>;

export const Login = () => {
  const login = useUserStore((state) => state.login);
  const error = useUserStore((state) => state.error);
  const form = useForm<UserFormType>({
    schema: zodResolver(UserSchema),
    initialValues: {
      username: "",
      password: "",
    },
  });

  const onSubmitLogin = (data: UserFormType) => {
    login(data);
    form.reset();
  };

  return (
    <Container mx="auto">
      <Group sx={{ height: "100vh" }} align="center" position="center">
        <Paper
          component="form"
          onSubmit={form.onSubmit(onSubmitLogin)}
          sx={{ width: 600 }}
          p="md"
          shadow="md"
          withBorder
        >
          <Text size="lg" weight="bold" align="center">
            LOGIN
          </Text>
          {error && (
            <Center>
              <Text color="red" size="sm">
                {error}
              </Text>
            </Center>
          )}
          <Stack>
            <TextInput
              {...form.getInputProps("username")}
              label="Username"
              required
            />
            <PasswordInput
              {...form.getInputProps("password")}
              label="Password"
              required
            />
            <Button type="submit">LOGIN</Button>
          </Stack>
        </Paper>
      </Group>
    </Container>
  );
};

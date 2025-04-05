import {
     Box,
     Button,
     Container,
     Heading,
     Input,
     VStack,
     useToast,
     Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
     const [email, setEmail] = useState("");
     const [pass, setPass] = useState("");
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const navigate = useNavigate();

     const handleLogin = async () => {
          if (!email || !pass) {
               toast({
                    title: "Missing Fields",
                    description: "Please enter both email and password.",
                    status: "warning",
                    duration: 3000,
                    isClosable: true,
               });
               return;
          }

          setLoading(true);

          try {
               const response = await axios.post(
                    "https://fitbit-server-side.onrender.com/user/login",
                    {
                         email,
                         password: pass,
                    },
                    {
                         headers: {
                              "Content-Type": "application/json",
                         },
                    }
               );

               const { token, user } = response.data;

               if (token) {
                    localStorage.setItem("token", token);

                    toast({
                         title: "Login Successful 🎉",
                         description: `Welcome ${user.name}`,
                         status: "success",
                         duration: 3000,
                         isClosable: true,
                    });

                    navigate("/phones");
               } else {
                    toast({
                         title: "Login Error",
                         description: "Token not received from server.",
                         status: "error",
                         duration: 3000,
                         isClosable: true,
                    });
               }
          } catch (error) {
               console.log("Login Error ❌", error);

               toast({
                    title: "Login Failed",
                    description:
                         error.response?.data?.message || "Invalid email or password.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
               });
          } finally {
               setLoading(false);
          }
     };

     return (
          <Box
               bgGradient="#FFF6EC"
               m={10}
               display="flex"
               alignItems="center"
               justifyContent="center"
               px={4}
               p={10}
          >
               <Container
                    maxW="md"
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="2xl"
                    py={10}
                    px={8}
               >
                    <Heading
                         textAlign="center"
                         mb={6}
                         fontSize="lg"
                         color="teal.600"
                         fontWeight="bold"
                    >
                         Welcome Back 👋
                    </Heading>

                    <VStack spacing={5}>
                         <Input
                              placeholder="Enter your email"
                              size="md"
                              focusBorderColor="teal.500"
                              borderRadius="xl"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />

                         <Input
                              placeholder="Enter your password"
                              type="password"
                              size="md"
                              focusBorderColor="teal.500"
                              borderRadius="xl"
                              value={pass}
                              onChange={(e) => setPass(e.target.value)}
                         />

                         <Button
                              width="100%"
                              colorScheme="blue"
                              size="md"
                              borderRadius="xl"
                              onClick={handleLogin}
                              isLoading={loading}
                              _hover={{ bg: "teal.600" }}
                         >
                              Log In
                         </Button>

                         <Text fontSize="sm" color="gray.500">
                              Don&apos;t have an account?{" "}
                              <Text as="span" color="teal.600" fontWeight="medium" cursor="pointer">
                                   <Link to={"/signup"}>Signup</Link>
                              </Text>
                         </Text>
                    </VStack>
               </Container>
          </Box>
     );
};

export default Login;

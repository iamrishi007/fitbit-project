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
   
   const Signup = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [pass, setPass] = useState("");
     const [age, setAge] = useState("");
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const navigate = useNavigate();
   
     const handleSignup = async () => {
       if (!name || !email || !pass || !age) {
         toast({
           title: "Missing Fields",
           description: "Please fill in all the fields.",
           status: "warning",
           duration: 3000,
           isClosable: true,
         });
         return;
       }
   
       setLoading(true);
   
       try {
         const res = await axios.post(
           "https://fitbit-server-side.onrender.com/user/register",
           {
             name,
             email,
             password: pass,
             age,
           },
           {
             headers: {
               "Content-Type": "application/json",
             },
           }
         );
         console.log(res);
         
   
         toast({
           title: "Signup Successful 🎉",
           description: "You can now login with your credentials.",
           status: "success",
           duration: 3000,
           isClosable: true,
         });
   
         navigate("/login");
       } catch (err) {
         console.log("Signup Error ❌", err);
   
         toast({
           title: "Signup Failed",
           description:
             err.response?.data?.message || "Something went wrong during registration.",
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
             Create Your Account 📝
           </Heading>
   
           <VStack spacing={5}>
             <Input
               placeholder="Enter your name"
               size="md"
               focusBorderColor="teal.500"
               borderRadius="xl"
               value={name}
               onChange={(e) => setName(e.target.value)}
             />
   
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
   
             <Input
               placeholder="Enter your age"
               type="number"
               size="md"
               focusBorderColor="teal.500"
               borderRadius="xl"
               value={age}
               onChange={(e) => setAge(e.target.value)}
             />
   
             <Button
               width="100%"
               colorScheme="blue"
               size="md"
               borderRadius="xl"
               onClick={handleSignup}
               isLoading={loading}
               _hover={{ bg: "teal.600" }}
             >
               Sign Up
             </Button>
   
             <Text fontSize="sm" color="gray.500">
               Already have an account?{" "}
               <Text as="span" color="teal.600" fontWeight="medium" cursor="pointer">
                 <Link to={"/login"}>Login</Link>
               </Text>
             </Text>
           </VStack>
         </Container>
       </Box>
     );
   };
   
   export default Signup;
   
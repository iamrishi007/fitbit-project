import {
     Box, Flex, Image, IconButton, Drawer, DrawerOverlay,
     DrawerContent, DrawerHeader, DrawerBody, useDisclosure,
     Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
     ModalCloseButton, Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const NavbarLinks = [
     { to: "/", label: "Home" },
     { to: "/phones", label: "Phones" },
     { to: "/watches", label: "Watches & Trackers" },
     { to: "/accessories", label: "Accessories" },
     { to: "/support", label: "Support" },

];

const Navbar = () => {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure(); // For Modal


     const navigate = useNavigate();

     const handleLogout = () => {
          localStorage.removeItem("token")   
          onModalClose();                     
          navigate("/login");                 
     };

     return (
          <>


               <Flex
                    p={2}
                    m={"5px auto"}
                    alignItems="center"
                    backgroundColor="white"
                    padding="10px 20px"
                    w="95%"
                    // boxShadow="sm"
                    // borderBottom="1px solid #ddd"
                    justifyContent="left"
                    // border={"1px solid red"}
               >
                    <Link to="/">
                    <Image
                         src="https://loodibee.com/wp-content/uploads/Google-Symbol-300x300.png"
                         alt="Google Logo"
                         w="30px"
                         h="30px"
                         mr="20px"
                    />
                    </Link>

                    <Flex
                         p={2}
                         w={"90%"}
                         // border={"1px solid green"}
                         gap="30px"
                         display={{ base: "none", md: "flex" }}
                         fontSize="15px"
                         color="blackAlpha.800"
                         fontWeight="450"
                    >
                         {NavbarLinks.map((link) => (
                              <Box key={link.to}>
                                   <Link to={link.to}>{link.label}</Link>
                              </Box>
                         ))}
                    </Flex>


                    <Flex gap="20px" alignItems="center">

                         <FaUserCircle
                              style={{ fontSize: "30px", cursor: "pointer", color: "#333" }}
                              onClick={onModalOpen}
                         />


                         <IconButton
                              aria-label="Open Menu"
                              icon={<HamburgerIcon />}
                              display={{ base: "block", md: "none" }}
                              onClick={onOpen}
                              variant="ghost"
                         />
                    </Flex>
               </Flex>


               <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                         <DrawerHeader textAlign="start">Menu</DrawerHeader>
                         <DrawerBody>
                              {NavbarLinks.map((link) => (
                                   <Box key={link.to} p="10px">
                                        <Link to={link.to} onClick={onClose}>{link.label}</Link>
                                   </Box>
                              ))}
                         </DrawerBody>
                    </DrawerContent>
               </Drawer>


               <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                         <ModalHeader textAlign="center" color={"blue.200"}>My Profile</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody textAlign="center" pb={6}>
                              <Button  variant="outline" w="100%" mb="3">
                                   <Link to="/login" onClick={onModalClose}>Login</Link>
                              </Button>
                              <Button  w="100%" mb="3">
                                   <Link to="/signup" onClick={onModalClose}>Sign Up</Link>
                              </Button>
                              <Button  w="100%">
                                   <Link to="/cart" onClick={onModalClose}>Cart</Link>
                              </Button>
                              <Button m={2} onClick={handleLogout}  colorScheme="red" w="100%" mb="3">
                                   Log Out
                              </Button>
                         </ModalBody>
                    </ModalContent>
               </Modal>
          </>
     );
};

export default Navbar;

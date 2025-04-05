import { Box, Container, Flex, Link, Text, IconButton, Divider, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box bg="white" py={6}>
      <Container maxW="6xl">
        <Flex justify="space-between" align="start" wrap="wrap">
          <Box>
            <Flex direction="column" gap={2} color="gray.700" fontSize="sm">
              <Link href="#">Country availability</Link>
              <Link href="#">Disability Support</Link>
              <Link href="#">Repairs</Link>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column" gap={2} color="gray.700" fontSize="sm">
              <Link href="#">Help Centre</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">Fitbit Support</Link>
              <Link href="#">Device recycling</Link>
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Divider my={4} />

      <Container maxW="6xl">
        <Flex justify="space-between" align="center" wrap="wrap">
          <Flex gap={4}>
            <IconButton as="a" href="#" icon={<FaXTwitter />} variant="ghost" aria-label="Twitter" />
            <IconButton as="a" href="#" icon={<FaInstagram />} variant="ghost" aria-label="Instagram" />
            <IconButton as="a" href="#" icon={<FaFacebook />} variant="ghost" aria-label="Facebook" />
            <IconButton as="a" href="#" icon={<FaYoutube />} variant="ghost" aria-label="YouTube" />
            <IconButton as="a" href="#" icon={<FaTiktok />} variant="ghost" aria-label="TikTok" />
          </Flex>

          <Flex align="center" gap={4} color="gray.600" fontSize="sm">
            <Image src="https://magikpng.com/wp-content/uploads/2024/08/Indian-Flag-png.png" alt="India" boxSize="20px" />
            <Text>India</Text>
            <Link href="#">Privacy</Link>
            <Link href="#">Google Nest Commitment to Privacy</Link>
            <Link href="#">Sales Terms</Link>
            <Link href="#">Terms of Service</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

import { Box, Grid, Heading, Image, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const Phones = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fitbit-server-side.onrender.com/protected/phones", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setData(response.data);
      console.log("Fetched Phones Data:", response.data);
    } catch (error) {
      console.log("Error fetching phones:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box m={"20px auto"} w={"90%"} p={[4, 6, 10]}>
        <Box color={"gray.600"} textAlign={"center"} mb={6}>
          <Heading fontSize={["xl", "2xl", "4xl"]}>
            Pixel. The only phone engineered <br /> by Google.
          </Heading>
        </Box>
      </Box>

      <Box w="90%" m="0 auto" mt={6}>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
          {data.map((elm) => (
            <Box
              key={elm._id}
              textAlign="center"
              p={4}
              boxShadow="md"
              borderRadius="md"
              border="1px solid #eee"
            >
              <Image
                src={elm.image_url}
                alt={elm.title}
                height={["150px", "180px", "200px"]}
                objectFit="cover"
                mx="auto"
              />
              <Text mt={2} fontWeight="semibold" fontSize={["md", "lg"]}>
                {elm.title}
              </Text>
              <Text mt={2} fontWeight="bold" fontSize={["md", "lg"]}>
                Rs. {elm.price}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box w="90%" color="gray.600" textAlign="center" m="20px auto" p={[4, 6, 10]}>
        <Box>
          <Heading m={2} fontSize={["xl", "2xl", "3xl"]}>
            Make magic happen with Pixel.
          </Heading>
          <Text m={2} fontSize={["sm", "md", "lg"]}>
            Pixel phones have advanced AI features that make it easy to create amazing photos <br />
            and videos, get more done and keep your info safe.
          </Text>
        </Box>

        <Box m={2} p={5}>
          <Image src="head.png" alt="Pixel AI" maxW="100%" height="auto" mx="auto" />
        </Box>
      </Box>

      <Grid
        color="gray.600"
        m="20px auto"
        w="90%"
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
        gap={6}
        p={4}
      >
        <Box textAlign="center" bg="blue.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize={["md", "lg"]}>Google Pixel 9 Pro and Pro XL</Text>
          <Heading fontSize={["xl", "2xl"]}>
            All pro.
            <br />
            Pure magic.
          </Heading>
          <Button m={3}>Learn More</Button>
          <Image
            src="https://lh3.googleusercontent.com/mlmED2sjC0Dx6S_boGkY4c_BIUIQh0DfRJoeiATyUa_JtxEuh8yIfENCh4-kcRyQXLbNGQP7Ma2Rw-nUeTUeFAsid1LEFocu0E8=rw-e365-w3000"
            alt="Pixel 9 Pro"
            maxW="100%"
            height="auto"
          />
        </Box>

        <Box textAlign="center" bg="green.100" p={4} borderRadius="lg" boxShadow="md">
          <Text fontSize={["md", "lg"]}>Google Pixel 9</Text>
          <Heading fontSize={["xl", "2xl"]}>
            A phone full of
            <br />
            firsts.
          </Heading>
          <Button m={3} border="1px solid black">
            Learn More
          </Button>
          <Image
            src="https://lh3.googleusercontent.com/xXAN_I3vTtsdrdcL8fwZA-1nLeo6cOg33Gfy4ne-_jRMknlPIPOyWGuJ1yQn04gtxyMhCu5GGaTlKc4aKg7YVlnto4cnipvwrWY=rw-e365-w1200"
            alt="Pixel 9"
            maxW="100%"
            height="auto"
          />
        </Box>
      </Grid>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Phones;

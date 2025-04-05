import { Heading, Box, Text, Image, SimpleGrid, Grid, Button } from "@chakra-ui/react";
import Footer from "./Footer";

const Watches = () => {
     return (
          <>

               <Box w="95%" p={{ base: 5, md: 10, lg: 20 }} m="20px auto" bgColor="#FFF9F3">
                    <Box color="gray.600" p={{ base: 5, md: 10 }} textAlign="center">
                         <Text>Pixel and Fitbit</Text>
                         <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
                              Smartwatches and <br />
                              trackers to keep you <br />
                              moving.
                         </Heading>
                    </Box>
               </Box>


               <SimpleGrid
                    columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
                    spacing={5}
                    p={5}
                    w="95%"
                    m="20px auto"
                    textAlign="center"
               >
                    {[
                         {
                              img: "https://lh3.googleusercontent.com/4lLgypgc1i3PJR8slbV_H9AEuJaNsX54tzetQKJSIbRajET7wQoCMmkKN4N6n0JrakTnS2xsS0QcVu0bOVpxpsA5TF7818xtJ04=s6000-w6000-e365-rw-v0-nu",
                              text: "Pixel Watch 3",
                         },
                         {
                              img: "https://lh3.googleusercontent.com/94XHEBzIv0WvwK1EYmMUyQloynu5JGlt1dsh2VctdMZaHflHSewnC9s-VfvEUnuodWuwv0xy51PqHjOTSXxv78Z7mQWDDvli_NI=s6000-w6000-e365-rw-v0-nu",
                              text: "Google Pixel Watch 2",
                         },
                         {
                              img: "https://lh3.googleusercontent.com/vN8Q3cTaRqB0c6pw3QjOt2MRS73PNmiPWKnemBv2YXUY4HhYSG85c7mYoWAxih9nz9L3kbVeMGM2xqJM9YM73O_Zi1h_RsSr8Xo=s6000-w6000-e365-rw-v0-nu",
                              text: "Google Pixel Watch 2",
                         },
                         {
                              img: "https://lh3.googleusercontent.com/OQ5nGT5BDSMMgjqAjHSRyT-7MVzUCU6TpKQBb8GdhShe8ONEFNZ_i6fhQ9wZMorVBXDVdyETMor5rwM1boR6LgDzQbfSAS8xob8=s6000-w6000-e365-rw-v0-nu",
                              text: "Google Pixel Watch 2",
                         },
                         {
                              img: "https://lh3.googleusercontent.com/8U6Lr2WaxeH_xZ-LDgxlA8czUwClqwmqQbN81IbVU1YIhWkq6wXsMkcn2raEqYNWpyFBUc3C7m8B86FHI4IcI6CF2_RvOGO2_t41=rw-e365-nu-w450",
                              text: "Google Pixel Watch 6",
                         },
                         {
                              img: "https://lh3.googleusercontent.com/AN3qUgtM_RSxFyFTyi00kXeq3d857bkCZze4aE3Wq-zyz8F7LD9NGaPYRSs9rfUN2xb5fJ3BT2XZrHsvijygQbLDgBdSIArZT__r=rw-e365-nu-w450",
                              text: "Google Pixel Watch 6",
                         },
                    ].map((item, index) => (
                         <Box key={index} shadow="md" p={3} borderRadius="md" bg="white">
                              <Image w="100%" h="165px" objectFit="contain" src={item.img} alt={item.text} />
                              <Text mt={2}>{item.text}</Text>
                         </Box>
                    ))}
               </SimpleGrid>


               <Grid
                    p={5}
                    w="95%"
                    m="10px auto"
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={5}
                    alignItems="center"
               >
                    <Box color="gray.600" p={{ base: 5, md: 10 }} textAlign="center" bgColor="#FFF6EC">
                         <Text>Now in two sizes</Text>
                         <Heading my={2}>Google Pixel <br />Watch 3</Heading>
                         <Text mb={3}>Goals. Guidance. Gorgeous.</Text>
                         <Button border="1px solid black">Find Retailers</Button>
                    </Box>
                    <Box>
                         <Image
                              w="100%"
                              src="https://lh3.googleusercontent.com/2pzIqGY2BF__ST5urJl02xUEy5eV4annam-7B_cQ6-bC-uGD6LeNfSE_iwIvWHARefW2xLTmTzC59k7iT_1WLRFpUDve3UrL_FU=s6000-w6000-e365-rw-v0-nu"
                         />
                    </Box>
               </Grid>

               <Box bgColor="#FFF6EC" w="95%" m="10px auto" textAlign="center">
                    <Box>
                         <Image
                              w="100%"
                              src="https://lh3.googleusercontent.com/jom8zraKT6_lm_EGSNkf6rEuew-dSAQmGRfCWVQULN9q3H5cwXe73blEsI6NkgoGqsKAwt5ztS5XaAsGXhBOR621WqYAbxAs0YvG=s6000-w6000-e365-rw-v0-nu"
                         />
                         <Heading p={5} color="gray.600">
                              Which one is right for you?
                         </Heading>
                    </Box>
               </Box>

             
               <Grid
                    p={5}
                    w="95%"
                    m="10px auto"
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={5}
                    alignItems="center"
               >
                    <Box color="gray.600" p={{ base: 5, md: 10 }} textAlign="center" bgColor="#F0F8FF">
                         <Text>Fitbit Premium</Text>
                         <Heading my={2}>
                              Boost your fitness <br />
                              routine with Fitbit <br />
                              Premium.
                         </Heading>
                         <Text>
                              Access a full library of workouts and mindfulness sessions led by Fitbit’s expert
                              trainers. Get started with 6 months of Fitbit Premium included with your smartwatch or
                              tracker.
                         </Text>
                    </Box>
                    <Box>
                         <Image
                              w="100%"
                              src="https://lh3.googleusercontent.com/uDrrFvlDVXLxIhi5M6HOC-ofUovePxZEfa8m9EcoO4a2mqEwuFAZ6mCqp_YB0FMmTjVeIEDs_OjhNTvazRNRIg1kT53WVUQX-iU=s6000-w6000-e365-rw-v0-nu"
                         />
                    </Box>
               </Grid>

               <Box m={10}>
                    <Footer />
               </Box>
          </>
     );
};

export default Watches;

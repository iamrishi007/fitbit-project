import {
     Box,
     Button,
     Container,
     Heading,
     Image,
     Text,
     Grid,

} from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";

const Home = () => {
     return (
          <>
               <Box w="90%" m="20px auto" color="gray.600" position="relative">
                    <Text
                         position="absolute"
                         textAlign="center"
                         padding="2px"
                         m={2}
                         top="10px"
                         left="50%"
                         transform="translateX(-50%)"
                         color="black"
                         fontSize={["16px", "20px", "24px"]}
                         fontWeight="bold"
                         p="8px"
                         borderRadius="8px"
                    >
                         <h5 style={{ color: "gray.600" }}>The new Google Pixel 9a</h5>
                         <Heading color="gray.600" fontSize={["md", "lg", "2xl"]}>
                              Magic made simple.
                         </Heading>
                         <Button
                              m={2}
                              color="gray.600"
                              border="1px solid black"
                              size={["sm", "md"]}
                         >
                              Learn More
                         </Button>
                    </Text>

                    <Image
                         borderRadius={20}
                         w="100%"
                         src="https://lh3.googleusercontent.com/61aueyhHpPo3f4G5_UegEeK0D9MDj2rYF2xToSvUW7LRSrouVKQm7TBuHC5Q0Q_IzlUDNsn_v2LYffZTsacWFbeVQeVHeT5P6oE=s6000-w6000-e365-rw-v0-nu"
                    />
               </Box>

               <Container color="gray.600">
                    <Heading fontSize={["xl", "2xl"]}>Our top recommendations.</Heading>
               </Container>

               <Container>
                    <ImageSlider />
               </Container>

               <Grid
                    color="gray.600"
                    m="20px auto"
                    w="90%"
                    templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
                    gap={6}
                    p={4}
               >
                    <Box
                         textAlign="center"
                         m={2}
                         bg="blue.100"
                         p={4}
                         borderRadius="md"
                         boxShadow="md"
                    >
                         <Text>Google Pixel 9 Pro and Pro XL</Text>
                         <Heading fontSize={["md", "lg"]}>
                              All pro.
                              <br />
                              Pure magic.
                         </Heading>
                         <Button m={3} border="1px solid black">
                              Learn More
                         </Button>
                         <Image
                              w="100%"
                              src="https://lh3.googleusercontent.com/mlmED2sjC0Dx6S_boGkY4c_BIUIQh0DfRJoeiATyUa_JtxEuh8yIfENCh4-kcRyQXLbNGQP7Ma2Rw-nUeTUeFAsid1LEFocu0E8=rw-e365-w3000"
                         />
                    </Box>

                    <Box
                         textAlign="center"
                         m={2}
                         bg="green.100"
                         p={4}
                         borderRadius="lg"
                         boxShadow="md"
                    >
                         <Text>Google Pixel 9</Text>
                         <Heading fontSize={["md", "lg"]}>
                              A phone full of
                              <br />
                              firsts.
                         </Heading>
                         <Button m={3} border="1px solid black">
                              Learn More
                         </Button>
                         <Image
                              w="100%"
                              src="https://lh3.googleusercontent.com/xXAN_I3vTtsdrdcL8fwZA-1nLeo6cOg33Gfy4ne-_jRMknlPIPOyWGuJ1yQn04gtxyMhCu5GGaTlKc4aKg7YVlnto4cnipvwrWY=rw-e365-w1200"
                         />
                    </Box>
               </Grid>

               <Box m="10px auto" w="90%">
                    <Image w="100%" src="hero.png" alt="Hero Banner" />
               </Box>

               <Grid
                    color="gray.600"
                    m="20px auto"
                    w="90%"
                    templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
                    gap={6}
                    p={4}
               >
                    <Box textAlign="center" m={2} bg="blue.100" p={4} borderRadius="md">
                         <Text>Google Pixel Buds Pro 2</Text>
                         <Heading>Light ears ahead.</Heading>
                         <Button m={3} border="1px solid black">
                              Learn More
                         </Button>
                         <Image
                              w="100%"
                              src="https://lh3.googleusercontent.com/I5xts9jU4N18ktmuOUfTliDy2n7DSiQ7vjNRchIYgaQeYDoxza774f7Xiv2blMHW_yGh7Hup9fkJDa2F5kLsrfGvwA2CbU6j8Nw=rw-e365-w3000"
                         />
                    </Box>
                    <Box textAlign="center" m={2} bg="green.100" p={4} borderRadius="lg">
                         <Text>Google Pixel Watch 3</Text>
                         <Heading>
                              Goals. Guidance.
                              <br />
                              Gorgeous.
                         </Heading>
                         <Button m={3} border="1px solid black">
                              Learn More
                         </Button>
                         <Image
                              w="100%"
                              src="https://lh3.googleusercontent.com/KGljX-yHEKafQd7rWaBbayrZjpWC8_h2J8B3FDIZRfwoQRv1Kr7_uDokMVZIS5RKhKR_Dsa7VIPR4P-oJrNwZJvd9SEjPmb7zZSB=rw-e365-w3000"
                         />
                    </Box>
               </Grid>

               <Box w="90%" m="20px auto" color="gray.600">
                    <Heading textAlign="center">Discover the world of Pixel.</Heading>
                    <Grid
                         fontWeight="bold"
                         w="90%"
                         templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                         gap={6}
                         m="8px auto"
                    >
                         {[
                              {
                                   img: "https://lh3.googleusercontent.com/QchE9ndrDV2kwGEJasRVPbLODKIktrgcB0lFf4FPnWFlL2TpeI9La_szyHeCD-AF8F5vboekoxBA1VBcjfpashNS25MPXQvvjgF2zvg=s6000-w6000-e365-rw-v0-nu",
                                   text: "Include everyone in your photos with Add Me.",
                              },
                              {
                                   img: "https://lh3.googleusercontent.com/iDR71atZDxl0Gl1xRY4R9hTJZn9bGZhF-SS77xlDA2j_gmjaBzwS1tsJSoyzFWL-_vSx_-b94jqJURLt6VZeYSP8I2cMnQESHhH-2bU=s6000-w6000-e365-rw-v0-nu",
                                   text: "Gemini Nano lets you complete helpful AI tasks without a network connection.",
                              },
                              {
                                   img: "https://lh3.googleusercontent.com/VdAOLi2-UlyWK5Dk9KuYLKqO_uK4Z08iOmMflyPEKkreYIMstSn1spCFiBghhS2lBU4ZgRsufsaEev_-OzN1DDghoqq20P0Bgm6bHqce=s6000-w6000-e365-rw-v0-nu",
                                   text: "Your Pixel phone is your new interpreter.",
                              },
                         ].map((item, i) => (
                              <Box
                                   key={i}
                                   bg="#FFF6EC"
                                   boxShadow="md"
                                   borderRadius="15px"
                                   p={2}
                                   textAlign="center"
                              >
                                   <Image borderRadius="15px" src={item.img} />
                                   <Text mt={2}>{item.text}</Text>
                              </Box>
                         ))}
                    </Grid>
               </Box>

               <Grid
                    color="gray.600"
                    m="20px auto"
                    w="90%"
                    templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                    gap={6}
                    p={4}
               >
                    {[
                         {
                              title: "Google Pixel Buds Pro 2",
                              desc: "Light ears ahead.",
                              img: "https://lh3.googleusercontent.com/yBA-SisM1Y9q8nLoUWPt4VoOYbsA4SaFRdLPy5W5YtZSkZ9kIjg2JV-X3uim3ZBB_wr_fCnX_6oiHmmiYkCZmyapHXbI5ffXNOV0=rw-e365-w3000",
                         },
                         {
                              title: "Google Pixel Watch 3",
                              desc: "Goals. Guidance. Gorgeous.",
                              img: "https://lh3.googleusercontent.com/dd_TzpnyEqKj0BetzFA0YBVlJL7MidtT9i7BMnsrU1eY-KDvmUtL4kmqwhkXNDC9piUJqG9pTnMWeU7cjRPUm2RDty91M_xCuu8=rw-e365-w3000",
                         },
                         {
                              title: "Google Pixel Watch 3",
                              desc: "Goals. Guidance. Gorgeous.",
                              img: "https://lh3.googleusercontent.com/gXLk_z8vwI17YpYlBoW4D0TciRmDQ12deHb4G1BrTDrrawwcWSxUyh8PQe-lwIprLWosYA8rg8x-nHWrsLkOfRVtyNxuByL-hho=rw-e365-w3000",
                         },
                    ].map((item, i) => (
                         <Box
                              key={i}
                              textAlign="center"
                              m={2}
                              bg="green.100"
                              p={4}
                              borderRadius="lg"
                         >
                              <Text>{item.title}</Text>
                              <Heading>{item.desc}</Heading>
                              <Button m={3} border="1px solid black">
                                   Learn More
                              </Button>
                              <Image w="100%" src={item.img} />
                         </Box>
                    ))}
               </Grid>

               <Box w="90%" bgColor="#FFF9F3" color="gray.600" m="10px auto">
                    <Box textAlign="center" p={["10", "20"]}>
                         <Heading>
                              You're all set to receive the latest <br />
                              news and offers from the <br />
                              Google Store.
                         </Heading>
                         <Text m={4}>You're subscribed.</Text>
                    </Box>
               </Box>

               <Box>
                    <Footer />
               </Box>
          </>
     );
};

export default Home;

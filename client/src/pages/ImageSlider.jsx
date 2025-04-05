import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const products = [
    { img: "https://lh3.googleusercontent.com/UIcu9qORusEL_vu5nQo8AmfRWpqzyMlpYmQWMPnTzbtKjABOA-n48HH4Dk5eanNq7Z916irmVBG88BF23kywh8vDtM3jXxjZd7q3=s6000-w6000-e365-rw-v0-nu", title: "Pixel 9" },
    { img: "https://lh3.googleusercontent.com/1Pdm3gR8T0BQUnlEaH_6sUp0UcyFWKhNopBphkXkqyblgGvws_WweuKHZiKLgm0FkV99DjCUw_3LLDgtREIC4iwoZRJgNPD20go=s6000-w6000-e365-rw-v0-nu", title: "Pixel Watch 3" },
    { img: "https://lh3.googleusercontent.com/wniBuif5XOtmonvpl_SeE3kAZWx1vYgjeKw3cYxDB0wK_FiJt_3L7vxQyzRuqKsgKC3Ebli1hKePGIyJOjZoO8pb6d7prMbqBw=s6000-w6000-e365-rw-v0-nu", title: "Pixel Buds Pro 2" },
    { img: "https://lh3.googleusercontent.com/yNVCCLko19YvTDwqxtNIYVkDtg_k8wzwHgNlft1ktbVwjDTgk0mrCSmbglSsak4TUyD9jNcVkx4S7ICHZE4wFwd5kbMC8H_BynxL=s6000-w6000-e365-rw-v0-nu", title: "Pixel Buds A-Series" },
    { img: "https://lh3.googleusercontent.com/FKvXXY-2diMsRDoysMIW2IPrtDrME8chYPvy13tUITM2haa1V9k-HnZNBF6HKcnrP4WV-hZwC_-XvDskWIrv228xvURwZ13d6A=s6000-w6000-e365-rw-v0-nu", title: "Fitbit Sense 2" },
    { img: "https://lh3.googleusercontent.com/AgsfM3dQFKtOkDgYhuMc4tUNKL6d-omSx6QlRf322k4IN09zcJil2EQmHWELeqwQWUHf7TEptqAdX7NybVZ5yKz_nMim8DEkc-yb=s6000-w6000-e365-rw-v0-nu", title: "Nest Audio" },
    { img: "https://lh3.googleusercontent.com/bvdxm1QhMX8LVB7qroEQ4Jm0TR5fn2ZDRFu4ki61m9PcuiGzOOYPTevTSV8A3Z8N-uwbcZPtn1QBf1-FDO_oQq3C0d6hPzDg6okC=s6000-w6000-e365-rw-v0-nu", title: "Pixel Tablet" },
];

const ImageSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleImages = products.slice(startIndex, startIndex + 5);

    const handleNext = () => {
        if (startIndex < products.length - 5) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <Box w="90%" m="auto" textAlign="center" mt="20px">

            

            <Flex alignItems="center" justifyContent="center" gap="10px">

                <Button
                    onClick={handlePrev}
                    isDisabled={startIndex === 0}
                    borderRadius="full"
                    w="80px"
                    h="80px"
                    bg="white"
                    boxShadow="md"
                >
                    <ChevronLeftIcon w={6} h={6} />
                </Button>

     
                <Flex gap="20px">
                    {visibleImages.map((item, index) => (
                        <Box
                            key={index}
                            w="250px"
                            textAlign="center"
                            borderRadius="10px"
                            bg="gray.50"
                            p="10px"
                        >
                            <Image src={item.img} w="100%" h="240px" borderRadius="10px" />
                            <Text fontSize="sm" mt="5px" fontWeight="medium">
                                {item.title}
                            </Text>
                        </Box>
                    ))}
                </Flex>

         
                <Button
                    onClick={handleNext}
                    isDisabled={startIndex >= products.length - 5}
                    borderRadius="full"
                    w="50px"
                    h="50px"
                    bg="white"
                    boxShadow="md"
                >
                    <ChevronRightIcon w={6} h={6} />
                </Button>
            </Flex>
        </Box>
    );
};

export default ImageSlider;

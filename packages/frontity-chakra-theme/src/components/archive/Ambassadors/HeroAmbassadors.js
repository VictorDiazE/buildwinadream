import { connect, css } from "frontity";
import {
  Container,
  Flex,
  SimpleGrid,
  Box,
  Button,
  Text,
  chakra,
  Link,
  VStack,
  Wrap,
  Center,
  Heading
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonPurple from "../../buttons/ButtonPurple";
import ReadMore from "../../buttons/ReadMore";

/* const motion = chakra(motion) */

const HeroAmbassadros = ({ state, id }) => {
  const Page = state.source.page[id];

  const MediaID = Page?.featured_media;
  const media = state.source.attachment[MediaID];
  const acf = Page?.acf;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
    >
      <Flex
        bgColor="tamkeen.900"
        bgGradient={{
          base: `linear(to-b, tamkeen.700 4.18%, tamkeen800A 44.51%, tamkeen.900 100%), url(${media?.source_url})`,
          md: `linear(to-b, tamkeen.700 4.18%, tamkeen800A 44.51%, tamkeen.900 100%), url(${media?.source_url})`
        }}
        bgPosition="center"
        bgSize="cover"
        width="100%"
        maxWidth="100%"
        minH="100vh"
        mx="auto"
        alignItems="center"
        pb={{ base: "0", md: "20px" }}
        position="relative"
      >
        <Container maxW="1000px" bg="transparent">
          <Center h="auto" color="white">
            <VStack
              sx={
                state.theme.isMobile
                  ? { width: "100vw", padding: "0 25px" }
                  : null
              }
            >
              <Text
                fontSize={{ base: "18px" }}
                maxW="500px"
                textAlign="center"
                paddingBottom="24px"
                color="tamkeen.300"
              >
                {acf?.hero_ambassadors_slogan}
              </Text>
              <Heading
                as="h1"
                fontSize={{
                  base: "40px",
                  sm: "50px",
                  md: "100px"
                }}
                lineHeight={{
                  base: "60px",
                  md: "100px"
                }}
                textAlign="center"
                color="white"
                fontWeight="900"
              >
                {acf?.hero_ambassadors_title}
              </Heading>
              <Text
                fontSize={{ base: "16px" }}
                maxW="500px"
                textAlign="center"
                paddingBottom="24px"
                color="tamkeen.300"
              >
                {acf?.hero_ambassadors_description}
              </Text>
              <ButtonPurple
                title={acf?.text_to_become_a_member}
                url={acf?.url_to_become_a_member}
              />
              <ReadMore url={acf?.url_ambassadors_to_read_more} />
            </VStack>
          </Center>
        </Container>
      </Flex>
    </motion.div>
  );
};

export default connect(HeroAmbassadros);

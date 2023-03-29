import { Box, Heading, Image, Text } from "@chakra-ui/react";

const NoRecipeFound = ({ name }) => {
  return (
    <Box textAlign="center" mt="20">
      <Heading fontSize="3xl">
        Sorry, we could not find the recipe for : {name}
      </Heading>
      <Text fontSize="xl" mt="4">
        "Looks like our cocktail recipe is playing hard to get. Why not flex
        your mixology muscles and craft your own signature drink?"
      </Text>
      <Image
        src="https://media.giphy.com/media/10kABVanhwykJW/giphy.gif"
        alt="Creative Cocktails"
        maxW="sm"
        mx="auto"
        mt="4"
      />
    </Box>
  );
};

export default NoRecipeFound;

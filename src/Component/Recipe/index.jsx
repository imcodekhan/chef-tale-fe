import React from "react";
import { Box, Text, List, ListItem, OrderedList } from "@chakra-ui/react";

const Recipe = ({ ingredients, instructions, name }) => {
  return (
    <Box>
      <Text as="h2" fontSize="2xl" fontWeight="bold" mb="4">
        Here is your recipe for: {name}
      </Text>
      <Box>
        <Text
          as="h3"
          fontSize="lg"
          fontWeight="bold"
          mb="2"
          ml="10%"
          textAlign={"left"}
        >
          Ingredients:
        </Text>
        <List spacing="2" styleType={"disc"}>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index} ml="15%" textAlign={"left"}>
              {ingredient}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Text
          as="h3"
          fontSize="lg"
          fontWeight="bold"
          mb="2"
          mt="6"
          ml="10%"
          textAlign={"left"}
        >
          Instructions:
        </Text>
        <OrderedList spacing="2">
          {instructions.split(".").map((step, index) => {
            if (step.trim() !== "") {
              return (
                <ListItem key={index} ml="15%" textAlign={"left"}>
                  {step.trim()}
                </ListItem>
              );
            }
          })}
        </OrderedList>
      </Box>
    </Box>
  );
};

export default Recipe;

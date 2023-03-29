import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import LoadingButton from "./Component/LoadingButton";
import Recipe from "./Component/Recipe";
import NoRecipeFound from "./Component/RecipeNotFound";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const [recipe, setRecipe] = useState(undefined);
  const [showRecipeNotFound, setRecipeNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(
        "Oops! It looks like you forgot to tell me what cocktail you're looking for. How about adding a name?"
      ),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://127.0.0.1:5000//get_recipe?name=${values.name.toLowerCase()}`
        );

        const data = await response.json();
        const filteredRecipe = data?.find(
          (recipe) => recipe.name === values.name.toLowerCase()
        );
        if (filteredRecipe) {
          setRecipe(filteredRecipe);
          setRecipeNotFound(false);
        } else {
          setRecipeNotFound(true);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
  });

  useEffect(() => {
    if (showRecipeNotFound) {
      setRecipeNotFound(false);
    }
  }, [formik?.values.name]);

  return (
    <div className="App">
      <Card mb="6">
        <CardBody>
          <FormLabel>welcome to cocktail recipe counter</FormLabel>
          <FormControl isInvalid={formik.touched.name && formik.errors.name}>
            <Input
              placeholder="what are you making today?"
              onChange={formik.handleChange("name")}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            ) : null}
          </FormControl>
          <LoadingButton
            isLoading={loading}
            clickCallback={formik.handleSubmit}
            mt="4"
          >
            {loading ? "cooking" : "get recipe"}
          </LoadingButton>
        </CardBody>
      </Card>
      {recipe ? (
        <Card>
          <CardBody>
            <Recipe
              ingredients={recipe?.ingredients}
              instructions={recipe?.instructions}
              name={recipe?.name}
            />
          </CardBody>
        </Card>
      ) : showRecipeNotFound && formik.values.name?.length ? (
        <NoRecipeFound name={formik.values.name} />
      ) : null}
    </div>
  );
}

export default App;

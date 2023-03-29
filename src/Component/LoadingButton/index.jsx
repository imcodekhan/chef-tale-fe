import { useState } from "react";
import { Button, Spinner } from "@chakra-ui/react";

const LoadingButton = ({ isLoading, children, clickCallback, ...rest }) => {
  return (
    <Button
      colorScheme="blue"
      onClick={() => clickCallback?.()}
      isLoading={isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <Spinner mr={2} />
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;

import { Box, Button, Container, Heading, Input, VStack, useColorModeValue, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../../store/product";

const CreatePage = () => {
  // hook for remembering the values when the state changes
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast(); // message notification

  const {createProduct} = useProductStore(); // global states for user input

  // function to handle adding a new product when button is pressed
  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    // condition for toast message
    if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
    setNewProduct({name: "", price: "", image: ""}); // reset the UI after a product has been updated.
  }
  return (
    <Container maxH={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={5}>
            <Input placeholder="Product Name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
            <Input placeholder="Price" name="price" type="number" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
            <Input placeholder="Image URL" name="image" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
            <Button colorScheme="blue" onClick={handleAddProduct} w={'full'}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage;
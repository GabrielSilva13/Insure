import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
interface QualityCardProps {
  title: string;
  description: string;
  image: string;
}

const QualityCard = ({ title, description, image }: QualityCardProps) => {
  return (
    <>
      <Box
        display="flex"
        alignItems={["center", "center", "flex-start"]}
        textAlign={["center", "center", "unset"]}
        flexDirection="column"
      >
        <Image src={image} alt={title} width={86} height={86} />
        <Text
          as="strong"
          fontSize="2xl"
          fontFamily="heading"
          mt="5"
          mb="2"
          display="block"
          color="hsl(250.00000000000003, 10.000000000000005%, 11.76470588235294%)"
        >
          {title}
        </Text>
        <Text color="violet.400" maxWidth="325">
          {description}
        </Text>
      </Box>
    </>
  );
};

export default QualityCard;

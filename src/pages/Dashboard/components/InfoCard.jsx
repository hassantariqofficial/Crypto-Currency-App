import React from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ tag, imgUrl, text, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "#01204E" : "#fff"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      mb="40px"
    >
      <Tag
        bg={inverted ? "#fff" : "#01204E"}
        color={inverted ? "#01204E" : "#fff"}
        borderRadius="full"
      >
        {tag}
      </Tag>
      <Text
        mt="24px"
        fontWeight="medium"
        textStyle="h3"
        color={inverted ? "#fff" : "black"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;

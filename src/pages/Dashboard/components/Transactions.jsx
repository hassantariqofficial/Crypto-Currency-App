import React, { Fragment } from "react";
import { CustomCard } from "../../../Chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaBtc } from "react-icons/fa6";

const Transactions = () => {
  const Transactions = [
    {
      id: "1",
      icon: PiCurrencyInrBold,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: PiCurrencyInrBold,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb="24px" fontSize="sm" color="#222">
        Recent Transactions
      </Text>
      <Stack gap="15px">
        {Transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i != 0 && <Divider />}
            <Flex gap="24px">
              <Grid
                placeItems="center"
                bg="#f3f3f7"
                boxSize="40px"
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="100%">
                <Stack spacing={0}>
                  <Text fontStyle="h6" color="black" fontWeight="bold">
                    {transaction.text}
                  </Text>
                  <Text fontSize="sm" color="#222">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text fontStyle="h6" color="black" fontWeight="bold">
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button
        mt="10px"
        w="full"
        bg="#01204E"
        color="#fff"
        _hover={{
          bg: "#3C5B6F",
        }}
      >
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;

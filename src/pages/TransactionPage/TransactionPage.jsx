import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Componenets/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./Components/TransactionTable";

import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {
  const tabs = [
    {
      key: "1",
      name: "All",
      count: "349",
    },
    {
      key: "2",
      name: "Deposit",
      count: "114",
    },
    {
      key: "3",
      name: "Withdraw",
      count: "55",
    },
    {
      key: "4",
      name: "Trade",
      count: "50",
    },
  ];
  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify="end" mt="24px" mb="12px">
        <Button
          _hover={{
            bg: "#3C5B6F",
          }}
          bg="#01204E"
          color="#fff"
          leftIcon={<Icon as={AiOutlineDownload} />}
        >
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="16" boxShadow="100px">
        <Tabs>
          <TabList pt="2" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab display="flex" gap="6px" pb="18px" color="#3C5B6F">
                  {tab.name}{" "}
                  <Tag bg="#3C5B6F" color="#fff">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px" pr="12px">
              <InputLeftElement pointerEvents="none">
                <Icon color="#3C5B6F" as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search Here..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;

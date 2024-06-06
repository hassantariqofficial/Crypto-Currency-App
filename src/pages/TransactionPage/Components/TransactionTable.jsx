import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
import { FaSortDown } from "react-icons/fa6";
const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:00 Am",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2Y",
      date: "2023-06-09",
      time: "12:00 Am",
      type: {
        name: "INR Withdraw",
        tag: "Wire Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Completed",
    },
    {
      id: "HD82NA2X",
      date: "2024-06-09",
      time: "09:00 Am",
      type: {
        name: "Buy",
        tag: "",
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2W",
      date: "2024-09-09",
      time: "07:00 pm",
      type: {
        name: "Sell",
        tag: "",
      },
      amount: "+ ₹81,123.10",
      status: "Completed",
    },
    {
      id: "HD82NA2w",
      date: "2024-10-10",
      time: "10:00 pm",
      type: {
        name: "BTC Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Completed",
    },
  ];
  const statusColor = {
    Completed: "#059669",
    Pending: "#F5A50B",
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption color="#01204E" fontWeight="bold">
          Powered by{" "}
          <Tag bg="#01204E" color="#fff">
            Hywiz Technologies
          </Tag>
        </TableCaption>
        <Thead>
          <Tr>
            <Th fontSize="14px" fontWeight="bold" color="#01204E">
              ID
            </Th>
            <Th
              fontSize="14px"
              fontWeight="bold"
              color="#01204E"
              RightIcon={<Icon as={FaSortDown} />}
            >
              Date & Time
            </Th>
            <Th fontSize="14px" fontWeight="bold" color="#01204E">
              Type
            </Th>
            <Th
              fontSize="14px"
              fontWeight="bold"
              color="#01204E"
              RightIcon={<Icon as={FaSortDown} />}
            >
              Amount
            </Th>
            <Th fontSize="14px" fontWeight="bold" color="#01204E">
              Status
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="14px" fontWeight="bold">
                {data.id}
              </Td>
              <Td>
                <Stack>
                  <Text fontSize="14px" fontWeight="bold">
                    {data.date}
                  </Text>
                  <Text fontSize="12px">{data.time}</Text>
                </Stack>
              </Td>
              <Td>
                <Stack>
                  <Text fontSize="14px" fontWeight="bold">
                    {data.type.name}
                  </Text>
                  <Text fontSize="12px">{data.type?.tag}</Text>
                </Stack>
              </Td>
              <Td fontSize="14px" fontWeight="bold">
                {data.amount}
              </Td>
              <Td fontSize="14px" fontWeight="bold">
                <Tag bg={statusColor[data.status]} color="#fff">
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;

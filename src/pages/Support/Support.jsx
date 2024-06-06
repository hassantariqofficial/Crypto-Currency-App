import React from "react";
import SupportCard from "./Components/SupportCard";
import DashboardLayout from "../../Componenets/DashboardLayout";
import ContactCard from "./Components/ContactCard";
import { AiFillMessage, AiTwotoneMessage } from "react-icons/ai";
import { Stack } from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import InfoCard from "../Dashboard/components/InfoCard";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Stack
        spacing="5rem"
        align={{
          base: "center",
          md: "center",
          lg: "center",
        }}
      >
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiFillMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/Visual2.png"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;

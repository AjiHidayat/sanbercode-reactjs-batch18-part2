import React from "react";
import { BuahProvider } from "./BuahContext";
import FormBuah from "./FormBuah";
import ListBuah from "./ListBuah";

const Buah = () => {
  return (
    <BuahProvider>
      <ListBuah />
      <FormBuah />
    </BuahProvider>
  );
};

export default Buah;

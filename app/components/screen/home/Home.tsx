import React from "react";
import Layout from "../../layout/Layout";
import FromInput from "./FromInput";
import MapGoogle from "./Map";
import Options from "./Options";
import OrderButton from "./OrderButton";
import ToInput from "./ToInput";

const Home = () => {
  return (
    <>
      <Layout title="Order taxi">
        <MapGoogle />
        <div className="absolute z-10 left-5 bottom-10 w-11/12 ">
          <FromInput />
          <ToInput />
          <Options />
          <OrderButton />
        </div>
      </Layout>
    </>
  );
};

export default Home;

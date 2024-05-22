"use client";
import { Button } from "@/components";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  router.push("/meal");

  return (
    <div>
      <Button width={100} height={100}></Button>
    </div>
  );
};

export default Home;

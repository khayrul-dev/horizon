"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return <CountUp end={amount} decimals={2} decimal="," prefix="$" />;
};

export default AnimatedCounter;

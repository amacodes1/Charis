"use client";

import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <TailSpin
        height="200"
        width="200"
        color="gray"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* <p className="text-sm text-orange-500">Loading .....</p> */}
    </div>
  );
}

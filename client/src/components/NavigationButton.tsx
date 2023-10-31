"use client";

import { Button } from "@mui/material";

export default function NavigationButton() {
  const buttons = [
    "chairs",
    "bed",
    "couch",
    "dinning",
    "table",
    "stool",
    "Armchair",
  ];
  return (
    <div>
      <div className="flex items-center justify-center  mt-20">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Button
                variant="outlined"
                color="success"
                className="hover:bg-green-300 bg-orange-400 text-black duration-300 ease-in"
              >
                {button}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

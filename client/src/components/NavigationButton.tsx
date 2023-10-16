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
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Button
                variant="outlined"
                color="success"
                className="hover:bg-green-300 duration-300 ease-in"
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

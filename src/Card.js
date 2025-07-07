import React, { useEffect } from "react";
import Dashboard from "./Dashboard";

export default function Card() {
  useEffect(() => {
    console.log("Card UNMOunted ");
    return console.log("Card component MOunted ");
  }, []);
}

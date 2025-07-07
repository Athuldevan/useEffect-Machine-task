import React, { useEffect } from "react";
import Card from "./Card";

export default function Dashboard() {
  useEffect(() => {
    console.log("DAshboard mounted");
    return console.log("CArd compont mounted ");
    console.log("Card component dempounted");
    console.log("DAshboard unMOunted ");
  }, []);
  return <Card />;
}

import React from "react";
import Clock from "./Clock";
import Tabs from "./Tabs";
import Weather from "./Weather";
import Autocomplete from "./Autocomplete";

const tabs = [
  { title: "One", content: "I am the first" },
  { title: "Two", content: "Second pane here" },
  { title: "Three", content: "Third pane here" }
];

const names = [
  "Allison",
  "Andy",
  "Brook",
  "Cameron",
  "Cynthia",
  "Ethan",
  "Frank",
  "Kelly",
  "Jin",
  "Justin"
];

const Root = () => {
  return (
    <>
      <Clock />
      <Tabs tabs={tabs} />
      <Weather />
      <Autocomplete names={names} />
    </>
  );
};

export default Root;

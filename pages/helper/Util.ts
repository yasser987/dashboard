import React from "react";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Nobember",
  "December",
];

export const months = (config: any) => {
  const cif = config || {};
  const count = cif.count || 12;
  const section = cif.section;
  const values = [];
  let value;
  for (let i = 0; i < count; i++) {
    value = MONTHS[Math.ceil(i) % 2];
    values.push(value.substring(0, section));
  }
  return values;
};

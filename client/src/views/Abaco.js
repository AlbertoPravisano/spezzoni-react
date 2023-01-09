import React from "react";
import { BASE_PATH } from "../routes";

const SOURCE_XLSX = "source.xlsx";

const Abaco = () => {
  const url = new URL(window.location.href);
  return (
    <iframe
      title="Abaco"
      src={`https://view.officeapps.live.com/op/embed.aspx?src=${url.origin}${BASE_PATH}/${SOURCE_XLSX}`}
      style={{ height: "30em", width: "inherit" }}
    />
  );
};

export default Abaco;

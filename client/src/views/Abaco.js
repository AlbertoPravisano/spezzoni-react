import React from "react";

const SOURCE_XLSX = "source.xlsx";

const Abaco = () => {
  return (
    <iframe
      title="Abaco"
      src={`https://view.officeapps.live.com/op/embed.aspx?src=/${SOURCE_XLSX}`}
      style={{ height: "30em", width: "inherit" }}
    />
  );
};

export default Abaco;

import React from "react";

const SOURCE_XLSX = "source.xlsx";

const Abaco = () => {
  const url = new URL(window.location.href);
  return (
    <iframe
      title="Abaco"
      src={`https://view.officeapps.live.com/op/embed.aspx?src=${
        url.origin + "/spezzoni-react/" + SOURCE_XLSX
      }`}
      style={{ height: "30em", width: "inherit" }}
    />
  );
};

export default Abaco;

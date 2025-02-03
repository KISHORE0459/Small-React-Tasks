import { useEffect } from "react";

const Amazonapi = () => {
  useEffect(() => {
    fetch(
      "https://na.business-api.amazon.com/products/2020-08-26/products?productRegion=US&locale=en_US&facets=OFFERS&keywords=laptop",
      {
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div>Amazonapi</div>;
};

export default Amazonapi;

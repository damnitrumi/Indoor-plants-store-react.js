import { useEffect, useState } from "react";
import { Catalogo } from "../../components/Catalogo";
import { Loading } from "../../components/Loading";
import { About } from "../../components/About";
import { Cart } from "../../components/Cart";

import plantsMock from "../../components/utils/plantsMock";
import { Toaster } from "react-hot-toast";

export const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const load = async () => {
      await new Promise((r) => {
        setTimeout(() => {
          setPlants(plantsMock);
          console.log("teste");
          r();
        }, 5000);
      });
    };

    load();
  }, []);

  if (plants && plants.length == 0) {
    return <Loading />;
  }

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Toaster />
      <Catalogo plants={plants} />
      <About />
      <Cart />
    </div>
  );
};

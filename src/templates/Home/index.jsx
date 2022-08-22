import { useEffect, useState } from "react";
import { Catalogo } from "../../components/Catalogo";
import { Loading } from "../../components/Loading";
import { About } from "../../components/About";

export const Home = () => {
  const [teste, setTeste] = useState([]);

  useEffect(() => {
    const load = async () => {
      await new Promise((r) => {
        setTimeout(() => {
          setTeste([1, 2, 3]);
          console.log("teste");
          r();
        }, 5000);
      });
    };

    load();
  }, []);

  if (teste && teste.length == 0) {
    return <Loading />;
  }

  return (
    <>
      <Catalogo />
      <About />
    </>
  );
};

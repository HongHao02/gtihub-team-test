import { useEffect } from "react";

function Home() {
  const printEample = () => {
    console.log("Quí Example");
  };
  useEffect(() => {
    printEample();
  }, []);
  return (
    <>
      <h1>Tesssst</h1>
      <h2>Quí</h2>
    </>
  );
}

export default Home;

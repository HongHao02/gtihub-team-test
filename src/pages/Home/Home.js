import { useEffect } from "react";

function Home() {
  const printEample = () => {
    console.log("Quí Example");
  };
  useEffect(() => {
    printEample();
  }, []);
  return <div>Quí test</div>;
}

export default Home;

import { useEffect } from "react";

function Home() {
  const printEample = () => {
    console.log("Example");
  };
  useEffect(() => {
    printEample();
  }, []);
  return <div>Home tttt</div>;
}

export default Home;

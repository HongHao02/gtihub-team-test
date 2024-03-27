import { useEffect, useState } from "react";

function Home() {
    const [loading, setLoading]= useState(false)
  const printEample = () => {
    if(loading){
        setLoading(true)
    }
  };
  useEffect(() => {
    printEample();
  }, []);
  return <div> {loading ? "Quí" : "Hảo"}</div>;
}

export default Home;

import { useEffect, useState } from "react";

function App() {
  const [dataP, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setData(data);
      console.log(data.info);
      console.log(data.results[0].gender);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {/* <section>{dataP.results[0].gender}</section>
      <img src={dataP.results[0].picture.large} /> */}
      <p>{dataP.info.seed}</p>
    </main>
  );
}

export default App;

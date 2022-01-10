import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Spinner from './components/Spinner'

function App() {

  const [load, setLoad] = useState(true);
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=q0xcA9erNCCnvsOrH0BoHmhFECEW8WbjTFaTeAU3",
      )
      .then((response) => {
        setValue(response.data.photos.slice(0, 10));
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Spinner load={load}/>
      <main>
        {value.map((item) => {
          return(<Card img={item.img_src} eDate={item.earth_date} title={item.camera.full_name} />)
        })}
      </main>    
    </div>
  );

}

export default App;

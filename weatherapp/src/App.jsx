import React, { useState,useEffect } from 'react'
// import React, { useEffect } from 'react'
import axios from 'axios'

// FOR TILTING THE CARD
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FiMousePointer } from "react-icons/fi";

function App() {
  const [data, setData] = useState({})
  const [area, setArea] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  // section 1: useEffect hook to fetch the putanginang data sadguajekn dalawang oras ko na fucking ginagawa
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // if (area !== '') {
    //   fetchData();
    // }

    if (area && area.trim() !== '') {
      fetchData();
    }

  }, [area, url]);

  const areaSearch = (event) => {
    if (event.key === 'Enter') {
      setArea('');
    }
  };
  // const areaSearch = (event) => {
  //   if (event.key === 'Enter') {
  //     axios.get(url).then((response) => {
  //       setData(response.data)
  //       console.log(response.data)
  //     })
  //     setArea('')
  //   }
  // }



  // SECTION 2: DESIGN PART TILTING THE CARD
    // const x = useMotionValue(0);
    // const y = useMotionValue(0);

    // const mouseXSpring = useSpring(x);
    // const mouseYSpring = useSpring(y);

    // const rotateX = useTransform(
    //   mouseYSpring,
    //   [-0.5, 0.5],
    //   ["17.5deg", "-17.5deg"]
    // );
    // const rotateY = useTransform(
    //   mouseXSpring,
    //   [-0.5, 0.5],
    //   ["-17.5deg", "17.5deg"]
    // );

    // const handleMouseMove = (e) => {
    //   const rect = e.target.getBoundingClientRect();

    //   const width = rect.width;
    //   const height = rect.height;

    //   const mouseX = e.clientX - rect.left;
    //   const mouseY = e.clientY - rect.top;

    //   const xPct = mouseX / width - 0.5;
    //   const yPct = mouseY / height - 0.5;

    //   x.set(xPct);
    //   y.set(yPct);
    // };

    // const handleMouseLeave = () => {
    //   x.set(0);
    //   y.set(0);
    // };



  return (
      <div className="app">

      {/* section 3: search section */}
      <div className="search">
        <input
          value={area}
          onChange={event => setArea(event.target.value)}
          onKeyPress={areaSearch}
          placeholder='Enter City'
          type="text" />
      </div>

      {/* section 4: body section */}
      <div className="container">
        <div className="body">
          <div className="area">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          {/* section 5: bottom section */}
          <div className="humidity-and-windspeed">
            <div className="humidity">
              <p>Humidity: </p>
              {data.main && <p className='bold'>
                {data.main.humidity}%</p>}             
            </div>
            <div className="wind">
              <p>Wind Speed: </p>
              {data.wind && <p className='bold'>
                {data.wind.speed.toFixed()} MPH</p>}
            </div>
          </div>
        </div>

        {/* {data.name !== undefined &&
          <div className="humidity-and-windspeed">
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        } */}

      </div>
      </div>
  );
}

export default App;

{/* <motion.div
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
style={{
  rotateY,
  rotateX,
  transformStyle: "preserve-3d",
}}
className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
>
<div
  style={{
    transform: "translateZ(75px)",
    transformStyle: "preserve-3d",
  }}
  className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
>
  <FiMousePointer
    style={{
      transform: "translateZ(75px)",
    }}
    className="mx-auto text-4xl"
  />
  <p
    style={{
      transform: "translateZ(50px)",
    }}
    className="text-center text-2xl font-bold"
  >

  </p>
</div>
</motion.div> */}




import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
function Index() {
  const [message, setMessage] = useState("Loading");

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/api/home")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message), setPeople(data.people);
      });
  }, []);
  return (
    <div>
      {message}
      <div>
        {people.map((person, index) => {
          return (
            <>
              <h1 key={index}>{person}</h1>
              <Image src={} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Index;

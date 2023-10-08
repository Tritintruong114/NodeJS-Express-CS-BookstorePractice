"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  id: number;
  name: string;
  types: string[];
  url: string;
}
export default function Home() {
  const [test, setTest] = useState<Props[] | []>();

  const res = async () => {
    const response = await fetch("http://localhost:3333/pokemons");
    const data = await response.json();
    setTest(data.data);
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <div>
        {test?.map((pokemon, index) => {
          return (
            <>
              <h1 key={index}>{pokemon.name}</h1>
              <Image
                src={pokemon.url}
                alt={pokemon.name}
                width={300}
                height={300}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

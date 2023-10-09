"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  id: number;
  name: string;
  types: string[];
  url: string;
}
export default function Home() {
  const [pokemons, setPokemons] = useState<Props[] | []>();

  const res = async () => {
    const response = await fetch("http://localhost:3333/pokemons");
    const data = await response.json();
    setPokemons(data.data);
    console.log(data);
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-3">
      {pokemons?.map((pokemon, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <h1>{pokemon.name}</h1>
            <Image
              src={pokemon.url}
              alt={pokemon.name}
              width={300}
              height={300}
            />
          </div>
        );
      })}
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { useEffect, useState } from "react";

export interface Props {
  id: number;
  name: string;
  types: string[];
  url: string;
}
export default function Home() {
  const [pokemons, setPokemons] = useState<Props[] | []>();
  const [types, setTypes] = useState<string[] | []>();

  function getTypesList(array: Props[]) {
    let typesList = [];
    if (array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].types.length; j++) {
          let type = array[i].types[j];
          if (typesList.indexOf(type) === -1) {
            typesList.push(type);
          }
        }
      }
    }

    typesList.sort();
    setTypes(typesList);
  }

  const res = async () => {
    const response = await fetch("http://localhost:3333/pokemons");
    const data = await response.json();
    setPokemons(data.data);
    getTypesList(data.data);
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-3 p-6">
      <div className="flex w-full col-span-3 justify-center items-center gap-6">
        {types?.map((type, index) => {
          return (
            <Link href={`type/${type}`} key={index}>
              <Button variant={type?.toLowerCase() as any} size="sm">
                {type}
              </Button>
            </Link>
          );
        })}
      </div>
      {pokemons?.map((pokemon, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center bg-cyan-200/30 rounded-xl"
            key={index}
          >
            <Link
              className="flex flex-col justify-centers items-center"
              href={`/pokemon/${pokemon.name}`}
            >
              <h1 className="font-bold text-xl uppercase">{pokemon.name}</h1>
              <Image
                src={pokemon.url}
                alt={pokemon.name}
                width={300}
                height={300}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

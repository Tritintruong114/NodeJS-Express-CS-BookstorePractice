"use client";
import { Props } from "@/app/page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface ParamsProps {
  params: {
    slug: string;
  };
}
const TypePage = ({ params }: ParamsProps) => {
  const { slug } = params;
  const [pokemon, setPokemon] = useState<Props[] | []>();
  const getPokemonByType = async () => {
    const res = await fetch(`http://localhost:3333/pokemons/type/${slug}`);
    const data = await res.json();
    setPokemon(data.data);
  };

  useEffect(() => {
    getPokemonByType();
  }, []);
  return (
    <div className="w-full justify-center my-6 flex items-centers flex-col">
      <Link href="/">
        <Button className="absolute ml-6 mt-6 top-0 left-0">Home</Button>
      </Link>
      <Button className="w-fit m-auto" variant={slug.toLowerCase() as any}>
        {slug}
      </Button>
      <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-3 p-6">
        {pokemon?.map((pokemon, index) => {
          return (
            <div
              className="flex relative flex-col justify-center items-center bg-cyan-200/30 rounded-xl"
              key={index}
            >
              <Image
                className="absolute top-0 w-full h-full rounded-3xl"
                src="/cover.jpg"
                alt=""
                width={300}
                height={150}
              />
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
    </div>
  );
};

export default TypePage;

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    slug: string;
  };
}
interface Pokemon {
  id: number;
  name: string;
  types: string[];
  url: string;
}
const DetailPage = ({ params }: Props) => {
  const { slug } = params;

  const [pokemon, setPokemon] = useState<Pokemon[]>();

  const res = async () => {
    const response = await fetch(`http://localhost:3333/pokemons/${slug}`);
    const data = await response.json();
    setPokemon(data);
    console.log(data);
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <>
      {/* <Link href="/">
        <Button className="absolute ml-6 mt-6 top-0 left-0">Home</Button>
      </Link>
      <div className="w-fit m-auto justify-center items-center flex flex-col py-6">
        <h1 className="font-bold text-3xl uppercase">{pokemon?.name}</h1>
        <Image src={pokemon?.url || ""} alt="" height={300} width={300} />
        <div className="flex">
          {pokemon?.types.map((type, index) => {
            return (
              <Button
                variant={type?.toLowerCase() as any}
                size="sm"
                key={index}
              >
                {type}
              </Button>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default DetailPage;

"use client";
import Image from "next/image";
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

  const [pokemon, setPokemon] = useState<Pokemon>();

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
    <div className="w-full justify-center items-center flex flex-col">
      <h1>{pokemon?.name}</h1>
      <Image src={pokemon?.url || ""} alt="" height={270} width={200} />
    </div>
  );
};

export default DetailPage;

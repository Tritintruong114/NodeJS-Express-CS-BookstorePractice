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
  previous: {
    id: number;
    name: string;
    url: string;
    types: string[];
  };
  next: {
    id: number;
    name: string;
    url: string;
    types: string[];
  };
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
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <>
      <Link href="/">
        <Button className="absolute ml-6 mt-6 top-0 left-0">Home</Button>
      </Link>
      <div className="w-fit relative m-auto justify-center items-center flex flex-col py-6">
        <Image
          className="absolute top-0 w-full h-full rounded-3xl"
          src="/cover.jpg"
          alt=""
          width={300}
          height={150}
        />
        <div className="z-10 flex flex-col justify-centers items-center">
          <h1 className="font-bold text-3xl uppercase">{pokemon?.name}</h1>
          <Image src={pokemon?.url || ""} alt="" height={300} width={300} />
        </div>
      </div>
      <div className="flex w-full justify-between px-12 max-w-4xl m-auto">
        <div className="flex flex-col relative">
          <Image
            className="absolute top-0 w-full h-full rounded-3xl"
            src="/cover.jpg"
            alt=""
            width={300}
            height={150}
          />
          <Link className="z-10" href={`/pokemon/${pokemon?.previous.name}`}>
            <div className="flex justify-center items-center flex-col">
              <h1 className="font-bold text-3xl uppercase">
                {pokemon?.previous.name}
              </h1>
              <Image
                src={pokemon?.previous.url || ""}
                alt=""
                height={300}
                width={300}
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col relative">
          <Image
            className="absolute top-0 w-full h-full rounded-3xl"
            src="/cover.jpg"
            alt=""
            width={300}
            height={150}
          />
          <Link className="z-10" href={`/pokemon/${pokemon?.next.name}`}>
            <div className="flex justify-center items-center flex-col">
              <h1 className="font-bold text-3xl uppercase">
                {pokemon?.next.name}
              </h1>
              <Image
                src={pokemon?.next.url || ""}
                alt=""
                height={300}
                width={300}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailPage;

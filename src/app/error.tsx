"use client";

export default function Error({ error }: { error: Error }) {
  return <h1> There is an Erro: {error.message} </h1>;
}

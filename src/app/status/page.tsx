"use client";
import { fetchAPI } from "@/shared/lib/http/http";
import useSWR from "swr";

function UpdatedAt(props: { updatedAt: string }) {
  return (
    <div>
      Ultima atualização da página foi{" "}
      {new Date(props.updatedAt).toLocaleString("pt-BR", {
        dateStyle: "full",
        timeStyle: "medium",
      })}
      .
    </div>
  );
}

function DatabaseStatus(props: {
  version: string;
  maxConnections: number;
  openedConnections: number;
}) {
  return (
    <div>
      <h2>Database</h2>
      <div>Versão do banco de dados {props.version}</div>
      <div>Máximo de conexões {props.maxConnections}</div>
      <div>Conexões abertas {props.openedConnections}</div>
    </div>
  );
}

export default function Page() {
  const { isLoading, data } = useSWR({ path: "/api/v1/status" }, fetchAPI, {
    refreshInterval: 20000,
  });
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Status</h1>
      <UpdatedAt updatedAt={data?.updated_at}></UpdatedAt>
      <DatabaseStatus
        version={data?.dependencies?.database?.version}
        openedConnections={data?.dependencies?.database?.opened_connections}
        maxConnections={data?.dependencies?.database?.max_connections}
      ></DatabaseStatus>
    </div>
  );
}

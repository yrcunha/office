import { fetchAPI } from "@/shared/lib/http/http";

async function getStatus() {
  const { ok, data } = await fetchAPI("/v1/status");
  if (ok) return data;
  throw data;
}

export default async function Page() {
  const data = await getStatus();
  return (
    <section>
      <h1>Status</h1>
      <p>
        Ultima atualização da página foi{" "}
        {new Date(data.updated_at).toLocaleString("pt-BR", {
          dateStyle: "full",
          timeStyle: "medium",
        })}
        .
      </p>
      <article>
        <h2>Database</h2>
        <p>Versão do banco de dados {data.dependencies.database.version}</p>
        <p>Máximo de conexões {data.dependencies.database.maxConnections}</p>
        <p>Conexões abertas {data.dependencies.database.openedConnections}</p>
      </article>
    </section>
  );
}

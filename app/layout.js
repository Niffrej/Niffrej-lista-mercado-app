export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Meu App de Lista de Mercado</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default function Produtos() {
  return (
    <>
      <h1>Produtos Informáticos - FIAPO</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
          </tr>
        </thead>

        <tbody></tbody>

        <tfoot>
          <tr>
            <td colSpan={3}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

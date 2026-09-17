type TableProps = {
  columns: string[];
  data: Record<string, string | number>[];
  striped?: boolean;
};
const Table = (props: TableProps) => {
  return (
    <table className={`table ${props.striped ? 'striped' : ''}`}>
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, index) => (
          <tr key={index}>
            {props.columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
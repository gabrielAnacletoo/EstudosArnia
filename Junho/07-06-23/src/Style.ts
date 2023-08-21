import styled from "styled-components";


export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`



export const TableCss = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:hover {
    transform: scale(1.05); /* exemplo de transformação no hover */
    transition: transform 0.3s ease-in-out;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;


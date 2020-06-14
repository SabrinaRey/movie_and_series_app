import React from "react";
import { useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  .MuiPaginationItem-page {
    color: rgb(220, 221, 222);
    :hover {
      background-color: rgb(220, 222, 223);
      color: rgb(35, 39, 42);
    }
  }
`;

const PaginationComponent = ({ totalPages }) => {
  const history = useHistory();

  const handleChange = (e, page) => {
    history.push(`${page}`);
  };

  // muy bien resuelta la paginacion aqui y buen uso de material ui
  return (
    <PageContainer>
      <Pagination
        variant="outlined"
        className="pages"
        count={totalPages}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </PageContainer>
  );
};

export default PaginationComponent;

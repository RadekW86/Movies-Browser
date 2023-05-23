import {
  PageButton,
  StyledSpan,
  PageCount,
  PageText,
  Pages,
  PaginationContainer,
} from "./styled";
import { useSetQueryParameter } from "../setQueryParameters";
export const Pagination = ({ currentPage, totalPages }) => {
  const page = parseInt(currentPage);
  const setQueryParameter = useSetQueryParameter();
  const setPage = (targetValue) => {
    setQueryParameter("page", targetValue);
  };
  return (
    <PaginationContainer>
      <PageButton isFirst onClick={() => setPage(1)}>
        <StyledSpan>First</StyledSpan>
      </PageButton>
      <PageButton
        isPrevious
        onClick={() => setPage(page === 1 ? page : page - 1)}
      >
        <StyledSpan>Previous</StyledSpan>
      </PageButton>
      <Pages>
        <PageText>
          Page <PageCount id="currentPage">{currentPage}</PageCount>
        </PageText>
        <PageText>
          of <PageCount id="totalPages">{totalPages}</PageCount>
        </PageText>
      </Pages>
      <PageButton
        isNext
        onClick={() => setPage(page === 500 ? page : page + 1)}
      >
        <StyledSpan>Next</StyledSpan>
      </PageButton>
      <PageButton isLast onClick={() => setPage(totalPages)}>
        <StyledSpan>Last</StyledSpan>
      </PageButton>
    </PaginationContainer>
  );
};

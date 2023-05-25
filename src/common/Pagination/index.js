import {
  PageButton,
  StyledSpan,
  PageCount,
  PageText,
  Pages,
  PaginationContainer,
  StyledArrowLeft,
  StyledArrowRight,
  ArrowWrapper,
} from "./styled";
import { useSetQueryParameter } from "../setQueryParameters";

export const Pagination = ({ currentPage, totalPages }) => {
  const page = parseInt(currentPage);
  const firstPage = page === 1;
  const lastPage = page === 500;
  const setQueryParameter = useSetQueryParameter();
  const setPage = (targetValue) => {
    setQueryParameter("page", targetValue);
  };
  return (
    <PaginationContainer>
      <PageButton isFirst onClick={() => setPage(1)} disabled={firstPage}>
        <StyledArrowLeft disabled={firstPage} />
        <ArrowWrapper>
          <StyledArrowLeft disabled={firstPage} />
        </ArrowWrapper>
        <StyledSpan>First</StyledSpan>
      </PageButton>
      <PageButton
        isPrevious
        onClick={() => setPage(page - 1)}
        disabled={firstPage}
      >
        <StyledArrowLeft disabled={firstPage} />
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
      <PageButton isNext onClick={() => setPage(page + 1)} disabled={lastPage}>
        <StyledSpan>Next</StyledSpan>
        <StyledArrowRight disabled={lastPage} />
      </PageButton>
      <PageButton
        isLast
        onClick={() => setPage(totalPages)}
        disabled={lastPage}
      >
        <StyledSpan>Last</StyledSpan>
        <StyledArrowRight disabled={lastPage} />
        <ArrowWrapper>
          <StyledArrowRight disabled={lastPage} />
        </ArrowWrapper>
      </PageButton>
    </PaginationContainer>
  );
};

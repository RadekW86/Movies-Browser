import { PageButtonsFirst, PageButtonsLast, PageCount, PageText, Pages, PaginationContainer } from "./styled"
import { useSetQueryParameter } from "../setQueryParameters";

export const Pagination = ({ currentPage, totalPages }) => {
    const page = parseInt(currentPage);
    const setQueryParameter = useSetQueryParameter();

    const setPage = (targetValue) => {
        setQueryParameter("page", targetValue);
    };

    return (
        <PaginationContainer>
            <PageButtonsFirst
                onClick={() => setPage(1)}
            >
                First
            </PageButtonsFirst>
            <PageButtonsFirst
                onClick={() => setPage(page - 1)}
            >
                Previous
            </PageButtonsFirst>
            <Pages>
                <PageText>
                    Page{' '}
                    <PageCount id="currentPage">
                        {currentPage}
                    </PageCount>
                </PageText>
                <PageText> of{' '}
                    <PageCount id="totalPages">
                        {totalPages}
                    </PageCount>
                </PageText>
            </Pages>
            <PageButtonsLast
                onClick={() => setPage(page + 1)}
            >
                Next
            </PageButtonsLast>
            <PageButtonsLast
                onClick={() => setPage(totalPages)}
            >
                Last
            </PageButtonsLast>
        </PaginationContainer>
    );
};

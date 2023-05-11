import { useState } from "react"
import { PageButtonsFirst, PageButtonsLast, PageCount, PageText, Pages, PaginationContainer } from "./styled"

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const handleFirstPageClick = () => {
        setCurrentPage(1);
    };

    const handlePreviousPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleLastPageClick = () => {
        setCurrentPage(totalPages);
    };

    return (
        <PaginationContainer>
            <PageButtonsFirst
                onClick={handleFirstPageClick}>
                First
            </PageButtonsFirst>
            <PageButtonsFirst
                onClick={handlePreviousPageClick}>
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
                onClick={handleNextPageClick}>
                Next
            </PageButtonsLast>
            <PageButtonsLast
                onClick={handleLastPageClick}>
                Last
            </PageButtonsLast>
        </PaginationContainer>
    );
};

export default Pagination;
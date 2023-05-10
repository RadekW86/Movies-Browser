import { useState } from "react"
import { PageButton, PageNumber, Pages, PaginationContainer } from "./styled"

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
            <PageButton
                onClick={handleFirstPageClick}>
                First
            </PageButton>
            <PageButton
                onClick={handlePreviousPageClick}>
                Previous
            </PageButton>
            <Pages>
                <PageNumber>
                    Page{' '}
                    <span id="currentPage">
                        {currentPage}
                    </span></PageNumber>
                <PageNumber> of{' '}
                    <span id="totalPages">
                        {totalPages}
                    </span>
                </PageNumber>
            </Pages>
            <PageButton
                onClick={handleNextPageClick}>
                Next
            </PageButton>
            <PageButton
                onClick={handleLastPageClick}>
                Last
            </PageButton>
        </PaginationContainer>
    );
};

export default Pagination;
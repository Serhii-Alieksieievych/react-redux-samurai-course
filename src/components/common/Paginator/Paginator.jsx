import React from "react";
import classes from './Paginator.module.css';

const Paginator = ({
    totalCount,
    pageSize,
    currentPage,
    getUsers,
}) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pageSpans = [];
    let partOfPageSpans = [];
    let size = 9
    const start = currentPage < Math.ceil(size / 2)
        ? 1
        : currentPage + Math.floor(size / 2) > pagesCount
            ? pagesCount - size + 1
            : Math.ceil(currentPage - size / 2)
    let end = start + size - 1;

    for (let i = 1; i <= pagesCount; i++) {
        pageSpans.push(i)
        if (i >= start && i <= end) {
            partOfPageSpans.push(i)
        } 
    }

    return (
        <div className={classes.paginatorWrapper}>
            <span onClick={() => {
                getUsers(1)
            }}>To start</span>
            {(currentPage > 1) && <span onClick={() => {
                getUsers(currentPage-1)
            }}>Back</span>}
            {partOfPageSpans.map(span => (
                <span
                    onClick={() => {
                        getUsers(span)
                    }}
                    className={span === currentPage
                        ? classes.activePaginator + ' ' + classes.span
                        : classes.span}
                    key={span}
                >
                    {span}
                </span>
            ))}
           {currentPage < pagesCount && <span onClick={()=>{
                getUsers(currentPage + 1)
            }}>Forvard</span>}
            <span onClick={() => {
                getUsers(pagesCount)
            }}>To end</span>
        </div>
    )
}

export default Paginator;
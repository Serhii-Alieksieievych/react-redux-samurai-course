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

    for (let i = 1; i <= pagesCount; i++) {
        pageSpans.push(i)
    }
    return (
        <div className={classes.paginatorWrapper}>
            {pageSpans.map(span => (
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
        </div>
    )
}

export default Paginator;
import React from 'react';
import _ from 'lodash'
import {Link, useParams} from "react-router-dom";

function Pagination(props) {
    const params = useParams()
    const {totalPages} = props
    const current = +params.page || 1
    return (
        <div style={{width:'103px', margin:'0 auto', textAlign: "center"}}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {_.range(1, totalPages + 1).map(p=>(
                        <li className={`page-item ${p === current ? 'active' : ""} `} key={p}>
                            <Link className="page-link" to={`/gallery/${p}`}>{p}</Link>
                        </li>
                    ))}


                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
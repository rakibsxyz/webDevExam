import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListItemComponent from '../components/ListItemComponent';
import { ApiResponseModel, AuthorModel } from '../models';
import ReactPaginate from "react-paginate";


function Author() {

    const [authorData, setAuthorData] = useState<AuthorModel[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const [cardPerPage, setCardPerPage] = useState(10)
    const [skipNumber, setSkip] = useState(0)

    const getAuthorData = async () => {
        const url = `https://api.quotable.io/authors?limit=${cardPerPage}&skip=${skipNumber}`
        await axios.get<ApiResponseModel>(url)
            .then((r) => {
                console.log("data", r.data.results)
                setAuthorData(r.data?.results)
                setTotalCount(r.data.totalCount)
            })
            .catch((e) => {

            });
    }

    useEffect(() => {
        getAuthorData()
    }, [skipNumber])

    const paginateReact = (data: any) => {
        const newSkip = (data.selected) * cardPerPage
        setSkip(newSkip)
    }
    return (
        <div className="row mt-5 justify-content-center">
            {authorData.length > 0 ? authorData.map((item) => {
                return <ListItemComponent item={item} />
            }) : null}

            {authorData.length > 0 ? <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={totalCount / cardPerPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={paginateReact}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            /> : null}
        </div>
    )
}

export default Author

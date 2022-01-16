import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListItemComponent from '../components/ListItemComponent';
import { ApiResponseModel, AuthorModel } from '../models';
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from 'react-redux';
import { addAuthor } from '../Redux/AuthorSlice';
import Title from '../components/Title';


function Author() {

    const [authorData, setAuthorData] = useState<AuthorModel[]>([])
    const [totalCount, setTotalCount] = useState<number>(0)
    const [cardPerPage, setCardPerPage] = useState(10)
    const [skipNumber, setSkip] = useState(0)
    const state = useSelector((state: any) => state.authorReducer)
    const [favAuthors, setfavAuthors] = useState<AuthorModel[]>(state?.authorModelData)

    const [favAuthorClicked, setFavAuthorClicked] = useState(false)
    console.log("state ", state)
    const dispatch = useDispatch()
    const getAuthorData = async () => {
        const url = `https://api.quotable.io/authors?limit=${cardPerPage}&skip=${skipNumber}`
        await axios.get<ApiResponseModel>(url)
            .then((r) => {
                console.log("data", r.data.results)
                checkFavourite(r.data?.results)
                setTotalCount(r.data.totalCount)
            })
            .catch((e) => {

            });
    }

    useEffect(() => {
        getAuthorData()
    }, [skipNumber])


    useEffect(() => {
        //    console.log("aaa",fav)
    }, [favAuthorClicked])
    const paginateReact = (data: any) => {
        const newSkip = (data.selected) * cardPerPage
        setSkip(newSkip)
    }

    const checkFavourite = (authors: AuthorModel[]) => {
        var modifiedAuthors: AuthorModel[] = []
        authors.forEach(author => {
            var tempAuthor:AuthorModel;
            tempAuthor = author
            console.log("te",(state?.authorModelData.find((obj: any) => {
              
                return obj._id === author._id
            })))
            if (state?.authorModelData.find((obj: any) => {
              
                return obj._id === author._id
            })) {
                console.log("huhaha ", state)
                tempAuthor.isFav = true
            }
            else {
                tempAuthor.isFav = false
            }

            modifiedAuthors.push(tempAuthor)
        });

        setAuthorData(modifiedAuthors)
    }
    return (
        <div className='"float-container"'>
            <div className='float-child1'>
                <h3 onClick={() => setFavAuthorClicked(false)}>Author</h3>
                <h3 onClick={() => {
                    console.log()
                    setFavAuthorClicked(true)
                }}>Fav Author</h3>
            </div>
            {favAuthorClicked && state.authorModelData.length > 0 ? state.authorModelData.map((author: AuthorModel) => {
                return <ListItemComponent item={author} />

            }) : null}

            {!favAuthorClicked ?
                <div className='float-child2'>
                    <div className="row mt-5 justify-content-center">
                        {authorData.length > 0 ? authorData.map((author) => {
                            return <ListItemComponent item={author} />
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
                </div> : null}
        </div>
    )
}

export default Author

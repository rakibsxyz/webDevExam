import { isFSA } from '@reduxjs/toolkit/dist/createAction';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useDispatch } from 'react-redux';
import { AuthorModel } from '../models';
import { addAuthor, removeauthor } from '../Redux/AuthorSlice';
import './cards.css'
type Props = {
    item: AuthorModel
}
function ListItemComponent(props: Props) {

    const { item } = props;
    const [fav, setFav] = useState<boolean>(item.isFav ?? false)
    const dispatch = useDispatch()

    console.log(item.isFav)

    const onButtonClickHandler = () => {
        if (fav) {
            dispatch(removeauthor(item._id))
            setFav(false)
        }
        else {
            // debugger
            dispatch(addAuthor(item))
            setFav(true)
        }
    }
    useEffect(() => {

    }, [fav])
    return (
        <div className="col-3">
            <Card bg='light' text="dark" className="Cards">

                <Card.Body style={{ margin: "10px" }}>
                    <Card.Title className=' d-flex justify-content-between align-items-center'>
                        Name :   {item.name}
                        <button className='btn btn-primary' onClick={()=>onButtonClickHandler()}>{fav? 'Remove from favorite' : 'Add to favourite'}</button>


                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        Bio : {item.bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

       
    )
}
export default ListItemComponent

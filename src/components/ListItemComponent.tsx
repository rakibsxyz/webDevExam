import React from 'react'
import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { AuthorModel } from '../models';
import './cards.css'
type Props = {
    item: AuthorModel
}
function ListItemComponent(props: Props) {

    const { item } = props;
    return (
        <div className="col-3">
            <Card bg='light' text="dark" className="Cards">

                <Card.Body style={{ margin: "10px" }}>
                    <Card.Title className=' d-flex justify-content-between align-items-center'>
                        Name :   {item.name}
                        <button className="btn btn-sm btn-primary">{item.isFav? 'Remove from favorite' : 'Add to favourite'}</button>
                        
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

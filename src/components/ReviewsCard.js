import {Card, CardBody, CardText, CardFooter} from "reactstrap"


export default function ReviewsCard(props){
    return(
        <div className="review-card">
            <div className="review-content">
                <p>{props.content}</p>
            </div>
            <div className="reviewer-name">
                <p>{props.reviewer}</p>
            </div>
        </div>



    // <Card
    //     className="my-2"
    //     color="dark"
    //     outline
    // >
    //     <CardBody>
    //         <CardText>{props.content}</CardText>
    //     </CardBody>
    //     <CardFooter>{props.reviewer}</CardFooter>
    // </Card>
    )
}
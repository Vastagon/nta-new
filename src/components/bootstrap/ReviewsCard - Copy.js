import {Card, CardBody, CardText, CardFooter} from "reactstrap"


export default function ReviewsCard(props){
    return(
    <Card
        className="my-2"
        color="dark"
        outline
    >
        <CardBody>
            <CardText>{props.content}</CardText>
        </CardBody>
        <CardFooter>{props.reviewer}</CardFooter>
    </Card>
    )
}
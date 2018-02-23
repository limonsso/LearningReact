import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const NewsItem=({item})=>{
  return(
    <div className="col-lg-4" key={item.id}>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{item.feed}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default NewsItem;

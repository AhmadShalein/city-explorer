import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';

export class Movies extends Component {
    render() {
        return (
            <div style={{ width: '18rem', margin: '10px', display: "inline-block"}}>
                <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", }}>
                    <Card style={{ width: '100%', border: 'solid 1px black' }}>
                        <Card.Img variant="top" src={this.props.movies.image_url} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.movies.overview}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Released on: <span style={{ fontWeight: 'bold'}}>{this.props.movies.released_on}</span></ListGroupItem>
                            <ListGroupItem>Popularity: <span style={{ fontWeight: 'bold'}}>{this.props.movies.popularity}</span></ListGroupItem>
                            <ListGroupItem>Average Votes: <span style={{ fontWeight: 'bold'}}>{this.props.movies.average_votes}</span></ListGroupItem>
                            <ListGroupItem>Total Votes: <span style={{ fontWeight: 'bold'}}>{this.props.movies.total_votes}</span></ListGroupItem>
                        </ListGroup>
                    </Card>
                </Container>
                <br />
            </div>
        )
    }
}

export default Movies;
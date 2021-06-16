import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck'
import { Container, Row, Col } from 'react-bootstrap'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.weather
    }
  }
  
  render() {
    return (
      <>
        {this.props.movies.length !== 0 && this.props.showMovies &&
          <div className='gird'>
            <h1>Movies List</h1>
             <Container>
                  <Row md={ "auto"}>
                {this.props.movies.map((day, i) => (
                
                    <CardDeck style={{ width: "50%"}}>
                      <Card >
                        <Card.Img style={{ width: "100%", height: "40%" }}variant="top" alt={"Movie Img"}src={this.props.movies[i].image_url} />
                        <Card.Body>
                          <Card.Title style={{ margin: "25%" }}>{this.props.movies[i].title}</Card.Title>
                          <ListGroup variant="Secondary">
                            <ListGroup.Item>Title: {this.props.movies[i].title}</ListGroup.Item>
                            <ListGroup.Item>Overview: {this.props.movies[i].overview}</ListGroup.Item>
                            <ListGroup.Item>Popularity: {this.props.movies[i].popularity}</ListGroup.Item>
                          </ListGroup>


                          <Card.Footer>
                            <small className="text-muted" Item>Release Date: {this.props.movies[i].released_on} , {<br></br>}</small>
                            <small className="text-muted" Item>Average Votes: {this.props.movies[i].average_votes}, {<br></br>}</small>
                            <small className="text-muted" Item>Total Votes: {this.props.movies[i].total_votes}</small>

                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                ))
                } </Row>
                   </Container>
                
          </div>
        }
        {this.props.showMovies === false &&
          <ListGroup variant="danger">
            <ListGroup.Item>Title:  {this.props.movies}</ListGroup.Item>
          </ListGroup>
        }
      </>
    )
  }
}
export default Movies;
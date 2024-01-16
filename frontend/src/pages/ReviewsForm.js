import React from 'react'

export default function ReviewsForm() {
  return (
    <div>
       <Container className="m-3">
                <div>
                    <h4>Write a review for {this.state.restaurant.restaurantName}</h4>
                    <hr/>
                        <Form onSubmit={this.review}>
                            <FormGroup>
                            <Label>Your Name:</Label>
                            <Input type="text" onChange={this.change.bind(this, "customerName")} placeholder="Please enter your name" />
                            {
                                this.state.errors.customerName ?
                                <p>{this.state.errors.customerName.message}</p>:
                                ""
                            }
                            </FormGroup>
                            <FormGroup>
                            <Label>Select</Label>
                            <select onChange={this.change.bind(this, "rating")}>
                                <option value="1">⭑</option>
                                <option value="2">⭑⭑</option>
                                <option value="3" selected>⭑⭑⭑</option>
                                <option value="4">⭑⭑⭑⭑</option>
                                <option value="5">⭑⭑⭑⭑⭑</option>
                            </select>
                            {
                                this.state.errors.rating ?
                                <p>{this.state.errors.rating.message}</p>:
                                ""
                            }
                            </FormGroup>
                            <FormGroup>
                            <Label>Your Review:</Label>
                            <Input type="text" onChange={this.change.bind(this, "reviewDescription")} placeholder="Please write a review" />
                            {
                                this.state.errors.reviewDescription ?
                                <p>{this.state.errors.reviewDescription.message}</p>:
                                ""
                            }
                            </FormGroup>
                            <Button color="primary" type="submit" className="primary">Submit</Button>
                        </Form>
                </div>
            </Container>
    </div>
  )
}

import React from 'react'
import '../Modules/modules.css'
import { CardDeck, Card, Button } from 'react-bootstrap'

export default function Modules() {
    return(
        <div className="modules">

            <h2>MODULES</h2>
            <br/>
            <h3>MASTER THE 4 C's</h3>
            <br/>
            <CardDeck>
            <Card className="text-left" border="light" style={{ width: '18rem', boxShadow: '0 0 29px 0 rgba(32, 84, 213, 0.37)', padding: '1rem' }}>
                <Card.Body className="d-flex flex-column">
                <Card.Title style={{fontWeight: '600', fontSize: '24px'}}>Communication</Card.Title>
                <Card.Text style={{fontSize: '20px'}}>
                Empower your ideas with the communication they deserve.
                </Card.Text>
                    <Button className="mt-auto" variant="dark">KNOW MORE</Button>
                </Card.Body>
            </Card>
            <Card className="text-left carddd" border="light" style={{ width: '18rem', boxShadow: '0 0 29px 0 rgba(32, 84, 213, 0.37)',  padding: '1rem'   }}>
                <Card.Body className="d-flex flex-column">
                <Card.Title style={{fontWeight: '600', fontSize: '24px'}}>Collaboration</Card.Title>
                <Card.Text style={{fontSize: '20px'}}>
                Learn to make and work in high functioning, performance driven teams.
                </Card.Text>
                    <Button className="mt-auto" variant="dark">KNOW MORE</Button>
                </Card.Body>
            </Card>
            <Card className="text-left carddd" border="light" style={{ width: '18rem', boxShadow: '0 0 29px 0 rgba(32, 84, 213, 0.37)',  padding: '1rem'   }}>
                <Card.Body className="d-flex flex-column">
                <Card.Title style={{fontWeight: '600', fontSize: '24px'}}>Critical Thinking</Card.Title>
                <Card.Text style={{fontSize: '20px'}}>
                Make problem solving your forté. Regardless of the complexity or domain.
                </Card.Text>
                    <Button className="mt-auto" variant="dark">KNOW MORE</Button>
                </Card.Body>
            </Card>
            <Card className="text-left carddd" border="light" style={{ width: '18rem', boxShadow: '0 0 29px 0 rgba(32, 84, 213, 0.37)',  padding: '1rem'   }}>
                <Card.Body className="d-flex flex-column">
                <Card.Title style={{fontWeight: '600', fontSize: '24px'}}>Creativity</Card.Title>
                <Card.Text style={{fontSize: '20px'}}>
                    We don’t teach creativity. We just create the most conducive environment to foster yours
                </Card.Text>
                    <Button className="mt-auto" variant="dark">KNOW MORE</Button>
                </Card.Body>
            </Card>
            </CardDeck>            
        </div>
    );
}
import React from 'react'
import '../About/about.css'
import { Row, Col } from 'react-bootstrap'

export default function About() {
    return(
        <div className="about">
            <h2>ABOUT MAUKA</h2>
            <Row>
                <Col sm={6} lg={true} className="col1 my-auto" data-aos="fade-right" data-aos-duration="1200">
                    <h3>At Mauka, we believe there is always room to grow — for you and for us.</h3>
                    <br/>
                    <h3>CohortOne will be the first of many communities for students to fail, learn, and improve. </h3>
                </Col>
                <Col style={{marginTop: '5rem'}}><img  src="https://maukaeducation.com/static/img/source.gif"/></Col>

            </Row>

            <h2>COHORT DETAILS</h2>

            <Row>

            <Col sm={6} className="col2" ><img className="abt-img" src="https://maukaeducation.com/static/img/cohort.png"/></Col>
                <Col sm={5} className="cohort" >
                    <h3 style={{fontWeight:700, color: '#444444'}} >Join our #CohortOne</h3>
                    <h3 style={{ color: '#444444'}}><i>Get exclusive access to our community of 20 highly motivated individuals like you.  </i></h3>

                    <br/>

                    <h4>Cohort Timeline</h4>
                    <h5>This cohort will run for 60 days and will focus on high-demand, transferable skills that will give you an edge in your professional career.</h5>

                    <br/>

                    <h4>Focus on Community and Networking</h4>
                    <h5>At Mauka, we focus on creating communities and conversations — with yourself, your peers and experts through a series of Q&amp;As with moderators and industry veterans.</h5>

                </Col>


            </Row>

        </div>
    );
}
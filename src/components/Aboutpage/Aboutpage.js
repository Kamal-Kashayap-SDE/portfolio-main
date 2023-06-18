import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I am a MERN stack web developer with a passion for creating user-friendly and interactive websites. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building robust and scalable web applications. I enjoy leveraging my skills to deliver high-quality and engaging digital experiences for users.
                        </p>
                        <ol className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Python</li> 
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>Machine Learning</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                     
                                    <li>React-Bootsrap</li>
                                     
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ol>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage
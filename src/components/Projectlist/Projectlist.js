import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import SER from '../../Assets/SER.webp'
import course from '../../Assets/course.jpg'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={SER}
                isBlog={false}
                title="Speech Emotion Recognition"
                description="This project aims to develop a speech emotion recognition system that accurately identifies and classifies emotions conveyed in human speech. By analyzing vocal characteristics, such as pitch, intensity, and tempo, the system will enable real-time emotion detection, providing valuable insights for applications in psychology, human-computer interaction, and market research."
                ghLink="https://github.com/Kamal-Kashayap-SDE/Speech-Emotion-Recognition"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={course}
                isBlog={false}
                title=" Course Collector"
                description="Course Collector is an innovative platform designed to streamline and organize online courses. It allows users to discover, save, and manage courses from various platforms in one centralized location. With a user-friendly interface and powerful search capabilities, Course Collector simplifies the learning process and enhances educational pursuits."
                ghLink="https://github.com/Kamal-Kashayap-SDE/Course-Collector"
              />
            </Col>

             

             

            

             
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
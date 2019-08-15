import React from 'react'
import { Title } from './MyComp'
import { Radio, Card, Row, Col } from 'antd';
import projects from '../data/projects.json'


const { Meta } = Card;

export default() => {
    
    const [select,setSelect] = React.useState("0")
    const myRef = React.useRef('PROJECT')

    const getProject = (project, index) => {
        if (project.type == select || select == 0) {
            return (
                <ProjectCard project={project} key={index}/>
            )
        }
    }

    return (
        <div className="container" >
            <Title title="PROJECTS"/>
            <center>
                <Radio.Group defaultValue={select} buttonStyle="solid" onChange={e => {
                    setSelect(e.target.value)
                }}>
                    <Radio.Button value="0">All</Radio.Button>
                    <Radio.Button value="1">Web App</Radio.Button>
                    <Radio.Button value="2">Mobile App</Radio.Button>
                    <Radio.Button value="3">API</Radio.Button>
                </Radio.Group>
            </center>
            <Row gutter={16}>
                {projects.map((project, index) => getProject(project, index)) }
            </Row>
        </div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <Col className="gutter-row" md={12} xs={24} sm={24}>
            <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title={project.name} description="www.instagram.com" />
            </Card>,
           
        </Col>
    )
}

const myCard = {
    'background':'#000',
    'color':'#fff'
}
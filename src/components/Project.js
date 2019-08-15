import React from 'react'
import { Title } from './MyComp'
import { Radio } from 'antd';
import projects from '../data/projects.json'

export default() => {
    
    const [select,setSelect] = React.useState("0")

    return (
        <div className="container">
            <Title title="PROJECTS"/>
            <center>
                <Radio.Group defaultValue={select} buttonStyle="solid" onChange={e => {
                    setSelect(e.target.value)
                }}>
                    <Radio.Button value="0">All</Radio.Button>
                    <Radio.Button value="1">Web App</Radio.Button>
                    <Radio.Button value="2">Mobile App</Radio.Button>
                </Radio.Group>
            </center>
            {
                projects.map(project => (
                    <div>
                        {project.name}
                    </div>
                ))
            }
        </div>
    )
}
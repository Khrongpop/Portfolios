import React from 'react'
import { Title } from './MyComp'
export default () => {
    return (
        <div>
            <Title title="ABOUT" />
            <center>
                <img className="img-cirlce" src="https://graph.facebook.com/2960833650623279/picture?type=large&return_ssl_resources=1" alt="KHRONGPOP PHONNGAM"/>
                <p className="about-text">
                    Hi, I'm Khrongpop a software developer from Thailand. Nice to meet you. 
                    <span onClick={foo}>Contact me</span>
                </p>
            </center>
           
        </div>
    )
}

const foo = {

}
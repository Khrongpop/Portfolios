import React from 'react'
import { Title } from './MyComp'
export default () => {
    return (
        <div>
            <Title title="ABOUT" />
            <img className="img-thumbnail" src="https://graph.facebook.com/2960833650623279/picture?type=large" alt="KHRONGPOP PHONNGAM"/>
            <p>
                Hi, I'm Khrongpop a software developer from Thailand. Nice to meet you.
                <span onClick={foo}>Contact me</span>
            </p>
        </div>
    )
}

const foo = {

}
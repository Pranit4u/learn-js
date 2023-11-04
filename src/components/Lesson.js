import React from 'react'
import Code from './Code'
import CodeRunner from './CodeRunner'
import Description from './Description'
import Title from './Title'

const Lesson = ({l1data}) => {
  return (
    <div className="lesson">
        {
            l1data.map((ob,ind) => {
                let k = Object.keys(ob)[0]
                if(k === "title"){
                    return (
                        <div key={ind} className="lesson-content">
                            <Title title={ob.title} />
                            <hr/>
                        </div>
                    )
                } else if (k === "description"){
                    return (
                        <div key={ind} className="lesson-content">
                            <Description description={ob.description} />
                        </div>
                    )
                } else if (k === "code"){
                    return (
                        <div key={ind} className="lesson-content">
                            <Code code={ob.code} />
                        </div>
                    )
                } else if (k === "coderunner"){
                    return (
                        <div key={ind}>
                            <CodeRunner coderunner={ob.coderunner} />
                        </div>
                    )
                } else {
                    return (
                        <div key={ind}>
                            Nothing here
                        </div>
                    )
                }
            })
        }
    </div>
  )
}

export default Lesson
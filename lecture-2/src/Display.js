import React from "react";

const Display = (props) => {
    console.log(props);//always a object

    //destructuring of object (es6 concept)
    const { employeeData, name } = props;//const employeeData = props.employeeData

    return (
        <>
            <p>{employeeData.map(data => {
                return (
                    <React.Fragment key={data.empId}>
                        <p>{data.name}</p>
                        <p>{data.age}</p>
                    </React.Fragment>
                )
            })}</p>
        </>
    )
}

export default Display;



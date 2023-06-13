import {Fragment} from "react";
import {logDOM} from "@testing-library/react";

function User({person}){
    console.log(person);
    return(
       /* <Fragment>
            asdasd
        </Fragment>*/

        <div>
            <div>
                {person.map((el, index)=>{
                    return(
                        <h4 key={index}>{el}</h4>
                    )
                })}
            </div>
        </div>
    )
}
export default User;
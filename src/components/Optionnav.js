import React from 'react';
// import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

// const Paths = [
//   { label: "My Profile", value: "/newbids"},
//   { label: "Paint",     value: "/paint" },
//   { label: "Materials", value: "/materials" },
//   { label: "Labors",    value: "/labors"  },
//   { label: "Quotes",    value: "/quotes" }
// ];

// function onChangeInput(value){
//     console.log(value);
//     return(
//         <Link to={value.value}>{value.label}</Link>
//     )
// }

function Optionnav (props) {
    return (
        <div >
            {/* <div className="dropdown row"> */}
                {/* <div className="col-md-12 ">
                    <Select 
                        options={Paths} 
                        isSearchable="false"
                        defaultValue={Paths[1]}
                        onChange={onChangeInput}>
                            <Link to={onChangeInput.value}> {onChangeInput.label}</Link>
                        </Select>
                    </div>
                </div> */}

            <div className="ph3 mb4">
                <Link to={props.profile}><span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">Edit Profile</span></Link>
                <Link to={props.paint}> <span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">Edit Paint</span></Link>
                <Link to={props.materials}><span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">Edit Materials</span></Link>
                <Link to={props.labor}><span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">Edit Labor</span></Link>
                <Link to={props.quote}><span className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">Edit Quote</span></Link>
                <Link to={props.finish}><span className=" f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green">Finish</span></Link>
            </div>
      </div>
    );
}

//console.log(Paths.value)
export default Optionnav;
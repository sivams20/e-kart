import React, { useContext, useState } from "react";
import { FilterContext } from "../../Contexts/FilterContext";

function Slider(){
    //const [rangeval, setRangeval] = useState(null);
    const {rangeval, setRangeval} = useContext(FilterContext);
    
    return(
        <div class="range-wrap">
            <input type="range" className="range" min="10" max="10000" onChange={(event) => setRangeval(event.target.value)} />
            <output class="bubble"></output>
            <span>{rangeval}</span>
        </div>
    )
}

export default Slider;
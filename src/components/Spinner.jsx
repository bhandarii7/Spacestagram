import React from "react";
import loading from '../images/loading.gif'

function Spinner(props) {
    if(props.load)
    {
        return(
          <div>
              <img src={loading} alt="loading" />
          </div>
      )
    }
    else
    return null;
}

export default Spinner;

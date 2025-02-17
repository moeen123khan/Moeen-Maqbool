import React, { useState } from 'react';

const About = () => {

const [mytyle, setmystyle] = useState(
    {
color : 'white',
backgroundColor: 'black'
  }
);

const [btnText, setBtnText] = useState("Enable light Mode");

const toggleStyle= ()=>{
  if(mytyle.color === 'white'){
    setmystyle({
        color : 'black',
        backgroundColor: 'white',
        border: '1px solid yellow'

    })
    setBtnText("Enable dark Mode");
  }
  else{
    setmystyle({

      color : 'white',
      backgroundColor: 'black'
  })
  setBtnText("Enable light Mode");
  }
}

    return (
        <div className='container' style={mytyle}>
          <h1 className='my-4'>About Us</h1>
      <div className="accordion" id="accordionExample style={mystyle}">
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
<button className="accordion-button" type="button" data-bs-toggle="collapse" style={mytyle}data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  Accordion Item #1
</button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div className="accordion-body" style={mytyle}>
  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
<button className="accordion-button collapsed" style={mytyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
  Accordion Item #2
</button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mytyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mytyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mytyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<div className="container my-4">
<button onClick={toggleStyle} type="button" className="btn btn-primary fs-6">{btnText}</button>  
</div>

        </div>
    );
}

export default About;

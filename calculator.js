import React from "React";

class Calculator extends React.Component 
{
render() 
{
return (
<div className="frame">
<Calculatortittle value="Calculator" />
<div class="Calc"></div>

<resultshow />
            
<div className="buttons"> 
<Button label={"clear"} /> 
<Button label={"Delete"} /> 
<Button label={"."} /> 
<Button label={"="} /> 
</div> 
<div className="buttons"> 
<Button label={"7"} /> 
<Button label={"8"} /> 
<Button label={"9"} /> 
<Button label={"*"} /> 
</div> 
<div className="buttons"> 
<Button label={"4"} /> 
<Button label={"5"} /> 
<Button label={"6"} /> 
<Button label={"+"} /> 
</div> 
<div className="buttons"> 
<Button label={"3"} /> 
<Button label={"2"} /> 
<Button label={"1"} /> 
<Button label={"-"} /> 
</div> 
<div className="buttons"> 
<Button label={"0"} /> 
<Button label={"/"} /> 
</div> 

</div>  ); 
} 
} 
import "./head.css"


function head() {
    return (
        <div className="nav">
            <div className="left-sec">
                
                 <img  src={"./images/getMaterialImage.png"} alt="logo" />
                
                    <li>Tutorial</li>
                    <li>exercise</li>
                    <li>certificates</li>
                    <li>services</li>
                    <li ><input className="search" type="text" placeholder="  Search" /></li>
              
            </div>
            <div className="right-sec"> 
                <button className="btnsec1">plus</button>
                <button className="btnsec1">space</button>
                <button className="btnsec1">Get certified</button>
                <div className="acc">
                <button class=" button1" type="button">Sign up</button>
                <button class=" button2" type="button ">Login</button>
                </div>
            </div>


        </div>
        

    )

    

}

export default head;

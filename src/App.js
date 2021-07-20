import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import download from "./image/download.jpg";
import images2 from "./image/images2.jpg";
import images from "./image/images.png";
import images1 from "./image/images1.jpg";
import download1 from "./image/download1.jpg";



function App() {
  return (
   <>
           <div className="h2" >
           <img src={images} alt="" style={{width:"30rem", height:"10rem"}}/>
           </div>
           <h5 style={{color:"white" , marginLeft:"6rem"}}>Cartoon</h5>
          <div className="main">
            
          <div className="card1">
                <a href="https://www.netflix.com/watch/70303495?trackId=14183174&tctx=6%2C0%2Cf4fc1538-4128-4747-9c77-76d80104ddc9-148861414%2C19627646-519f-4353-81f7-2ff1acf41ee2_33845904X28X1365X1626774334763%2C19627646-519f-4353-81f7-2ff1acf41ee2_ROOT%2C"><img src={download} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="https://www.netflix.com/watch/80048061?trackId=13752289&tctx=0%2C0%2C9edd890b2795ff5cae3f179df49c1cc12503d904%3A3c301625a5cfbe3268968e3b857fe846eee9d973%2C9edd890b2795ff5cae3f179df49c1cc12503d904%3A3c301625a5cfbe3268968e3b857fe846eee9d973%2Cunknown%2C"><img src={download1} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={images2} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={images1} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={images1} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={images1} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={images1} alt="" className="img"/></a>
           </div>
          </div>


          <h5 style={{color:"white" , marginLeft:"6rem"}}>Indian Movies</h5>
          <div className="main">
           <div className="card1">
                <a href="fff"><img src={images1} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={images1} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={download} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={download} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={download} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={download} alt="" className="img"/></a>
           </div>

           <div className="card1">
                <a href="fff"><img src={download} alt="" className="img"/></a>
           </div>

          </div>
   </>
  );
}

export default App;



import "./BackgroundiMG.css";

function BackgroundiMG({ backgroundimage, title }) {
  return (
    <>
     
    <div className="backGroundImage" style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundRepeat: 'no-repeat',
       
        height: 440
        
      }}>
    <h1>{title}</h1>
    </div>
    </>
  );
}

export default BackgroundiMG; 
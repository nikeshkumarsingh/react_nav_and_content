
import './App.css';

function App() {
  const mid=["Services","Projects","About"]
  const osarr=["Android","Blackberry","iPhone","Windows Phone"]
  const mobarr=["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
      <div className="nav">
        <div className='left'>LOGOBAKERY</div>
        <div className="topmid">
        {mid.map((e)=>{
        return <div className="txt">{e}</div>
      })}
        </div>
        <button className='btn'>connect</button>
      </div>
      <div className="bdy">
        <div className="os">
        <h1>Mobile Operating System</h1>
        {osarr.map((e)=>{
          return <li className="osname">{e}</li>
        })}
        </div>
          <div className="mob">
            <h1>Mobile Manufacturers</h1>
            {mobarr.map((e)=>{
               return <li className="mobName">{e}</li>
            })}
          </div>
          
      </div>
    </div>
  );
}

export default App;

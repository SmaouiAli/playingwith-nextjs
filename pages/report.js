
import * as mdb from 'mdb-ui-kit';
import data from '../fakeData.js'
console.log(data);
export const Report = (props) => {
    return (
        <div className="reportPage">
           
  
{/* <div className="card">
<img className="myimage" src="https://www.recruter.tn/wp-content/uploads/2019/08/Careers-120.jpg" alt="..."/>
<span className="mf">🤓🤓🤓</span>
<span className="title">Tesla</span>
<p className="description">Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003 ...</p>
<button className="btn">Discover</button>
</div> */}
{data.map((e,i)=><div className="card" key={i}>
<img className="myimage" src={e.img} alt="..."/>
<span className="mf">⭐⭐⭐⭐⭐</span>
<span className="title">{e.title}</span>
<p className="description">{e.description.slice(0,80) + ' ...'}</p>
<button className="btn">Discover</button>
</div>
)}
        </div>
    )
}



export default Report;

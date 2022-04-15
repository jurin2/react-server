import { Link } from "react-router-dom";

function SecContainer(props){
    return(
      <div className="container">
        {
          props.wear.map((item)=>{
            return(
                <Link key={item.id} to={`/sec1/${item.id}`}>
                    <div className="card">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <p>{item.price}</p>
                    </div>
                </Link>
            );
          })
        }
      </div>
    );
  }

export default SecContainer;
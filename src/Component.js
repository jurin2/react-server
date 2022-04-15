function Header(props){
    return(
      <header>
        <div className="container">
          <h1>{ props.메인타이틀 }</h1>
        </div>
      </header>
    );
  }

function Section(props){
  return(
    <section>
      <div className='container'>
        <p>{props.본문영역[1]}</p>
      </div>
    </section>
  );
}

function Footer(props){
  return(
    <footer>
      <div className="container" style={ {fontSize:'20px', color:'red'} }>
        <p>{props.푸터영역.name}</p>
      </div>
    </footer>
  );
}

export {Header, Section, Footer};
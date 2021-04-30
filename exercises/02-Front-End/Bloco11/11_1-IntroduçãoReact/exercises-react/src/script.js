function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn-primary">Learn more</a>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
          title="How To Make Interactive ReactJS Form"
          description="Let's write some interactive form with React"
          link="https://sebhastian.com/interactive-react-form"
        />
      </div>
      <div className="col-sm-4">
        <Card
          title="Babelify your JavaScript code"
          description="Babel make JavaScript code browser-compatible."
          link="https://sebhastian.com/babel-guide"
        />
      </div>
      <div className="col-sm-4">
        <Card
          title="JavaScript Basics Before You Learn React"
          description="Learn the prerequisites of learning React fast"
          link="https://sebhastian.com/js-before-react"
        />
      </div>
      <div className="col-sm-4">
        <Card
          title="React render props pattern"
          description="Let's learn about React render props pattern"
          link="https://sebhastian.com/react-render-props/"
        />
      </div>
      <div className="col-sm-4">
      <Card
        title="How to filter an array with JavaScript"
        description="Let's learn how you can use the JavaScript array filter method"
        link="https://sebhastian.com/javascript-filter-array/"
      />
    </div>
    </div>
  );
}

export default CardList; 
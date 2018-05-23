class Clock extends React.Component{
        constructor(props){
            super(props);
            this.state = {date: new Date()};
        }
        componentDidMount(){
          this.timerID = setInterval(
            ()=>this.tick(), 1000);
        }
        componentWillUnMount(){
            clearInterval(this.timerID);
        }
        render(){
            return(
            <div>
                <h2>time is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );

        }
        tick(){
          this.setState({date:new Date()});
        }
     }

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    return (
      <tr>
        <td>{this.props.emp.name}</td>
        <td>{this.props.emp.age}</td>
        <td>{this.props.emp.years}</td>
        <td>
           <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }
  handleDelete(){
    console.log("Delete button is clicked. ");
  }
}

class EmployeeTable extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    var rows = [];
    this.props.emps.forEach(
      (e) => rows.push(<Employee emp = {e}/>)
    );
    return(
    <div className="container">
     <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Years</th>
         </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
     </table></div>);
  }
}
class App extends React.Component{

  loadEmployeesFromServer() {
    var that = this;
    const url = 'http://localhost:8080/api/employees';
    if (url) {
        fetch(url)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .then(function (result) {
                that.setState({ employees: result.data._embedded.employees });
         });
    }

    /*var that = this;
    const url = 'http://localhost:8080/api/employees';
    if (url) {
      fetch(url).then(function (response) {

        that.setState({ employees: response.json()._embedded.employees });

      });
    }*/

  }

  constructor(props) {
    super(props);
    this.state={employees: []};
  }

  componentDidMount(){
    //this.loadEmployeesFromServer();
  }

  render() {
    return (
        <div>
            <Clock/>
            <EmployeeTable emps={EMPLOYEES}/>
            {/*<EmployeeTable emps={this.state.employees}/>*/}
        </div>
    );
  }
}


const EMPLOYEES = [
  {name: "pretty", age: 1},
  {name: "prathyash", age: 2},
  {name: "pratheesh", age: 3},
  {name: "preethy", age: 4}
];

ReactDOM.render(
  <App />,
  document.getElementById('root'));
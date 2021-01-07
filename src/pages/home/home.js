import { React, Component } from "react";
import { connect } from "react-redux";
import home from "./home.css";
import { Link } from "react-router-dom";
import { getWeekday, getMonth, getDate } from "../../utils/common";
import { addTask } from "../../actions/taskActions";
import { bindActionCreators } from "redux";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      day: "",
      month: "",
      date: "",
      activetasks: 3,
    };
  }

  getDate = () => {
    const d = new Date().toString();
    const splitD = d.split(" ");
    const day = splitD[0];
    const month = splitD[1];
    const date = splitD[2];
    const presentDay = getWeekday(day);
    const presentMonth = getMonth(month);
    const presentDate = getDate(date);
    this.setState({
      day: presentDay,
      month: presentMonth,
      date: presentDate,
      newTask: "",
    });
  };

  componentDidMount() {
    this.getDate();
  }
  handleTaskField = (e) => {
    console.log("entered task", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleAddTask = (e) => {
    e.preventDefault();
    const { addTask } = this.props;
    const { newTask } = this.state;
    console.log("new task--------", newTask);
    addTask(newTask);
    this.setState({
      newTask: "",
    });
  };
  render() {
    const path = this.props.match.path;
    const { day, month, date, activetasks } = this.state;
    const { tasks } = this.props;
    console.log("tasks-----------", tasks);
    console.log("tasks");
    return (
      <div className="homepage">
        <div className="date">
          {day}, {month} {date}
        </div>

        <Link to="/completedtask">
          <div
            className={
              path === "/completedtask"
                ? "activecompleteRoute"
                : "completeRoute"
            }
          >
            Completed Tasks
          </div>
        </Link>
        <Link to="/">
          <div
            className={
              path === "/" ? "activeincompleteRoute" : "incompleteRoute"
            }
          >
            Incomplete Tasks
          </div>
        </Link>

        <div className="activeTask"> {activetasks} Active Tasks</div>
        <form className="form" onSubmit={this.handleAddTask}>
          <input
            className="textfield"
            type="text"
            name="newTask"
            value={this.state.newTask}
            onChange={this.handleTaskField}
          ></input>
          <input
            className="addtaskbutton"
            type="button"
            name="Add Task"
            value="Add task"
            onClick={this.handleAddTask}
          />
        </form>
        <hr className="horizontalline" />
        <div>
          <table>
            <tbody>
              {tasks.map((task, index) => {
                return (
                  <tr className="tableRow" key={index}>
                    <td className="checkboxDesign">
                      <input type="checkbox" />
                      <span className="checkboxDesign"></span>
                    </td>
                    <td>{task}</td>
                    <td className = "deleteTaskRow">
                      <input
                        type="button"
                        className="deleteTask"
                        value="Delete"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state--------", state);
  return {
    tasks: state.tasksDetails.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

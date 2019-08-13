import React, { Component } from "react";
import "./App.css";
import Select from "react-select";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "./scss/style.css";
const options = [
  { value: "feat", label: "feat" },
  { value: "fix", label: "fix" },
  { value: "docs", label: "docs" },
  { value: "style", label: "style" },
  { value: "refactor", label: "refactor" },
  { value: "test", label: "test" },
  { value: "chore", label: "chore" }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      scope: "",
      subject: "",
      body: "",
      footer: ""
    };
  }

  getCommitMessage = () => {
    let tmpString = `${this.state.type ? this.state.type.value : ""} (${
      this.state.scope
      }): ${this.state.subject} 

${this.state.body}
    
${this.state.footer}`;

    return tmpString;
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value ? e.target.value : ""
    });
  };

  componentDidMount() {
    setInterval(() => {
      localStorage.setItem('commitState', JSON.stringify(this.state));
    }, 5000);

    let localStorageState = localStorage.getItem('commitState');
    if (localStorageState) {
      localStorageState = JSON.parse(localStorageState);
      this.setState({ ...localStorageState })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="two-screens-container">
            <div className="screen left">
              <Form>
                <FormGroup>
                  <Label>Type</Label>
                  <Select
                    name="type"
                    value={this.state.type}
                    onChange={e => {
                      this.setState({ type: e ? e : null });
                    }}
                    options={options}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Scope</Label>
                  <Input
                    onChange={this.onChange}
                    value={this.state.scope}
                    name={"scope"}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Subject</Label>
                  <Input
                    onChange={this.onChange}
                    value={this.state.subject}
                    name={"subject"}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Message Body</Label>
                  <Input
                    onChange={this.onChange}
                    value={this.state.body}
                    name={"body"}
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Footer</Label>
                  <Input
                    onChange={this.onChange}
                    value={this.state.footer}
                    name={"footer"}
                    type="textarea"
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="screen right">
              <div id="commit-message-formatted"> Commit message </div>
              <div className="commit-message-formatted">
                {this.getCommitMessage()}
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                var el = document.createElement("textarea");
                // Set value (string to be copied)
                el.value = '"' + this.getCommitMessage() + '"';
                console.log(el.value);
                // Set non-editable to avoid focus and move outside of view
                el.setAttribute("readonly", "");
                el.style = { position: "absolute", left: "-9999px" };
                document.body.appendChild(el);
                // Select text inside element
                el.select();
                // Copy text to clipboard
                document.execCommand("copy");
                // Remove temporary element
                document.body.removeChild(el);
              }}>
              Copy commit message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

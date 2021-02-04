import React from "react";
import Sidebar from "./components/Sidebar";
import {EmailDetails} from "./components/EmailDetails";
import EmailList from "./components/EmailList";



class App extends React.Component {
  constructor(args) {
    super(args);

    let emails = this.props.emails;
    let id = 0;
    for (const email of emails) {
      email.id = id++;
    }

    this.state = {
      selectedEmailId: 0,
      currentSection: 'inbox',
      emails
    };
  }



  openEmail(id) {
    const emails = this.state.emails;
    const index = emails.findIndex(x => x.id === id);
    emails[index].read = 'true';
    this.setState({
      selectedEmailId: id,
      emails
    });
  }

  deleteMessage(id) {
    // Mark the message as 'deleted'
    const emails = this.state.emails;
    const index = emails.findIndex(x => x.id === id);
    emails[index].tag = 'deleted';

    // Select the next message in the list
    let selectedEmailId = '';
    for (const email of emails) {
      if (email.tag === this.state.currentSection) {
        selectedEmailId = email.id;
        break;
      }
    }

    this.setState({
      emails,
      selectedEmailId
    });
  }

  setSidebarSection(section) {
    let selectedEmailId = this.state.selectedEmailId;
    if (section !== this.state.currentSection) {
      selectedEmailId = '';
    }

    this.setState({
      currentSection: section,
      selectedEmailId
    });
  }

  render() {
    const currentEmail = this.state.emails.find(x => x.id === this.state.selectedEmailId);
    return (
        <div className={"flexbox-container"}>
          <Sidebar
              emails={this.state.emails}
              setSidebarSection={(section) => { this.setSidebarSection(section); }} />
          <div className="inbox-container">
            <EmailList
                emails={this.state.emails.filter(x => x.tag === this.state.currentSection)}
                onEmailSelected={(id) => { this.openEmail(id) }}
                selectedEmailId={this.state.selectedEmailId}
                currentSection={this.state.currentSection} />
            <EmailDetails
                email={currentEmail}
                onDelete={(id) => { this.deleteMessage(id); }} />
          </div>
        </div>
    )
  }
}

export default App;

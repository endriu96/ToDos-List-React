import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  {id: 1, content:"przejść na Reacta", done:false},
  {id: 2, content:"zjeść obiad", done: true},

];

const hiddenDoneTasks = false;
function App() {
  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
       <Section 
        title = "Dodaj nowe zadanie" 
        body={<Form />} />
      
      <Section
        title="Lista zadań"
        body = {<Tasks tasks={tasks} hiddenDoneTasks={hiddenDoneTasks} />}
        extraHeaderContent={<Buttons tasks= {tasks} hiddenDoneTasks={hiddenDoneTasks}/>}
    />  
    </Container>
  );
}

export default App;

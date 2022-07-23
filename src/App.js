import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Exemplo from './componentes/exemplo'

import './App.css';

function App() {
  return (
    

      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Exemplo />
        </div>
      </DndProvider>

     

    
  );
}

export default App;

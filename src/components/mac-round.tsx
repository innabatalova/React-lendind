import React from 'react'


function App() {
    return (
      <div >
        <Welcome name="Алиса" />
        <Welcome name="Базилио" class="macround"/>
        <Welcome name="Буратино" />
      </div>
    );
  }

function Welcome(props: Record<string, any>) {
    return <div className={props.class}>Привет, {props.name}</div>;
}

export default App;
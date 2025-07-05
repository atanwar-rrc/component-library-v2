import React from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Abhi Tanwar's Component Library</h1>
      <Card title="Card 1">
        <Button>Click Me</Button>
        <Label>Sample Label</Label>
      </Card>
      <Card title="Card 2">
        <Button>Another Button</Button>
        <Label>Another Label</Label>
      </Card>
    </div>
  );
}

export default App;

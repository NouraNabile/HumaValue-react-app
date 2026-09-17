import './App.css'
import React from 'react'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Table from './components/ui/Tables'
function App() {

  return (
    <>
    <Card title="Card Title" description="This is a description for the card." image="https://via.placeholder.com/150">
      <p>This is some additional content inside the card.</p>
    </Card>
     <Button text="Primary Button" onClick={() => alert('Primary Button Clicked')} variant="primary" />
     <Button text="Secondary Button" onClick={() => alert('Secondary Button Clicked')} variant="secondary" />
     <Button text="Danger Button" onClick={() => alert('Danger Button Clicked')} variant="danger" />  
    
    <Table
      columns={['Name', 'Age', 'City']}
      data={[
        { Name: 'John Doe', Age: 30, City: 'New York' },
        { Name: 'Jane Smith', Age: 25, City: 'Los Angeles' },
        { Name: 'Bob Johnson', Age: 35, City: 'Chicago' }
      ]}
      striped
    />  
    </>
  )
}

export default App

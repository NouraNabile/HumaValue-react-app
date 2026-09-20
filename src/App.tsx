import './App.css'
import React from 'react'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Table from './components/ui/Tables'
// Header is currently a JavaScript module without TypeScript declarations.
// @ts-expect-error No declaration file exists for this local JSX module.
import Header from './components/tt/Header'
function App() {

  return (
    <>
    <Header/>
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
    <Form/> 
    </>
  )
}
const ASform = ()=>{
  return(
    <>
      <input type="text" placeholder = "Enter your name" />
      <button>submit</button>
    </>
  )
}
const Form = ()=>{
  return(
    <>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" name="name"/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" name="email"/>
      <button style={{ border: '1px solid #ccc', padding: '5px 10px', backgroundColor: '#f0f0f0' }}>Submit</button>
    </form>
    </>
  )
}

export default App

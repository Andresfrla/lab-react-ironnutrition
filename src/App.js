// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider, Button, Col } from 'antd';
import FoodBox from './components/FoodBox'
import foodData from './foods.json'
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods ] = useState(foodData);
  
  const addFood = (newFood) => {
    setFoods(prevFoods => [ newFood, ...prevFoods])
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <Row justify={'center'}>
        <Col span={6}>
        <AddFoodForm addFood={addFood}/>
        <Button> Hide Form / Add New Food </Button>
        </Col>
      </Row>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.map((food, i) => <FoodBox key={i} {...food}/>)}

      </Row>
    </div>
  );
}

export default App;

import Card from '../UI/Card';
import MealItem from './MedicinesItem/MedicinesItem';
import classes from './AvailableMedicines.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Dolo',
    description: 'cure fever and body pain',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'AntiBiotics',
    description: 'cure fever',
    price: 16.5,
  }
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      onAddItem={props.onAddItem}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

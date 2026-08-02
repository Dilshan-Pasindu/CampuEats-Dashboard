import DishCard from "./DishCard";
function MenuList({ dishes }) {
 if (!dishes.length){
    return (
      <div className="no-dishes">
        <span className="no-dishes-icon">🍴</span>
        No dishes match your search.
      </div>
    );
 }
 return (
    <div className="menu-grid">
    {dishes.map((dish) => (
    <DishCard key={dish.id} dish={dish} />
    ))}
    </div>
 );
}
export default MenuList;
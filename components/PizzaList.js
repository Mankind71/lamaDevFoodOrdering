import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        pariatur atque ea numquam fuga. Deleniti expedita perferendis cupiditate
        eligendi perspiciatis quia at recusandae enim repellat ab?
        Necessitatibus, autem? Ea maiores mollitia vero nisi neque enim,
        voluptate ullam incidunt rem velit explicabo hic, voluptas ipsa delectus
        eligendi possimus optio recusandae dignissimos?
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;

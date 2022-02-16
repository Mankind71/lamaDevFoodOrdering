import style from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur pariatur atque ea numquam fuga. Deleniti expedita perferendis cupiditate eligendi perspiciatis quia at recusandae enim repellat ab? Necessitatibus, autem? Ea maiores mollitia vero nisi neque enim, voluptate ullam incidunt rem velit explicabo hic, voluptas ipsa delectus eligendi possimus optio recusandae dignissimos?
      </p>
      <div className={style.wrapper}>
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, optio.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>${pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="double"
              className={styles.checkbox}
              id="double"
            />
            <label htmlFor="double">Double ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="cheese"
              className={styles.checkbox}
              id="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="spicy"
              className={styles.checkbox}
              id="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="garlic"
              className={styles.checkbox}
              id="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

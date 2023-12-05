import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";
import Form from "../../components/Form";

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments/");
      const data = await response.json()

      setData(data)
    };

    fetchData()


  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Form />
        </div>
      </div>
    </section>
  );
}

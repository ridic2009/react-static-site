import React from "react";

import styles from './index.module.scss'

export default function Form() {
  return (
    <form action="POST" className={styles.hero__form}>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Enter your firstname"
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Enter your lastname"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Type your message for us!"
      ></textarea>

      <input type="submit" value="Send" />
    </form>
  );
}

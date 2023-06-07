import React from "react";

import styles from "../styles/Home.module.scss";

import {Link} from 'react-router-dom'

import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";
import { MainPaths } from "../routes/AppRoutes";

const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.about}>
        <div className={styles.avatar}>АК</div>
        <div className={styles.info}>
          <h3>Александр Комаров </h3>
          <div className={styles.links}>
            <div>
              <img src="/img/link.svg" alt="" />
              <a href="https://t.me/gloshi" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
            <div>
              <img src="/img/link.svg" alt="" />
              <a
                href="https://github.com/gloshi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <img src="/img/link.svg" alt="" />
              <a
                href="https://portfolio-my-kohl.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.form}>
          <div className={styles.form__input}>
          <span>Номер телефона</span>
          <PhoneInput />
          </div>
          <div className={styles.form__input}>
          <span>Email</span>
          <EmailInput />
          </div>
      </section>
      <Link to={MainPaths.form}>
      <button className={styles.start}>Начать</button>
      </Link>
    </main>
  );
};

export default Home;

import React from 'react'
import styles from './index.module.scss'

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Lorem ipsum dolor sit ipsum.</h2>

      <div className={styles.avatar}>{/* <img/> */}</div>

      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum
        eos eius quae saepe, minima enim numquam laboriosam sed, omnis
        asperiores fuga placeat perspiciatis molestias praesentium eaque in.
        Veniam quam ad ex in autem vel saepe libero fuga magnam a excepturi,
        laboriosam quia reiciendis vitae eligendi facere dolor unde maiores
        minima est tenetur. Magni fugiat laborum, voluptates aut, commodi
        eligendi corporis consequuntur veniam ullam vero obcaecati eveniet
        voluptate tempora expedita possimus adipisci labore. Voluptas similique,
        optio ab minima at quia autem dolorem tempore excepturi ex voluptates
        est. Odio veniam saepe aperiam delectus magni minus, alias aliquid,
        quibusdam porro sed totam?
      </div>
    </div>
  )
}

export default About

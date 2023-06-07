import React,{FormEvent, useEffect, useState} from 'react'
import { useForm } from '../hooks/useForm'
import { UserForm } from './UserForm'
import { AddressForm } from './AddressForm'
import { AccountForm } from './AccountForm'
import { Link } from 'react-router-dom'
import { MainPaths } from '../routes/AppRoutes'
import styles from "../styles/Form.module.scss";

type FormData = {
  nickName: string
  name: string
  surname: string
  sex: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  nickName: '',
  name: '',
  surname: '',
  sex: '',
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}


const Form = () => {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  console.log(data)
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])
    console.log(currentStepIndex)
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }
  const [valid,setIsValid] = useState<boolean>(false)

  useEffect(() => {
    setIsValid(data.sex ? true : false);
  }, [data.sex]);
  console.log(currentStepIndex)
  return (
    <main className={styles.container}>
      <section className={styles.progress}>
            <div className={styles.progress__line}>
            <div className={data.nickName || currentStepIndex + 1 === 1?  styles.first : `${styles.first} ${styles.gray}`}><img src={data.nickName? '/img/cheked.svg' : '/img/nocheked.svg' } alt='cheked' /></div>
              <div className={currentStepIndex + 1 === 2? styles.second : `${styles.second} ${styles.gray}`}><img src={data.street? '/img/cheked.svg' : '/img/nocheked.svg'} alt='cheked' /></div>
              <div className={currentStepIndex + 1 === 3? styles.third : `${styles.third} ${styles.gray}`}><img src={data.email? '/img/cheked.svg' : '/img/nocheked.svg'} alt='cheked' /></div>
              <div style={{width: `${(currentStepIndex)*340}px`}} className={styles.progress__percent}>
              </div>
            </div>
            
      </section>
    <form onSubmit={onSubmit}>
      <div >
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div>
        {isFirstStep? <Link to={MainPaths.main}><button>Назад</button></Link> :(
          <button  type="button" onClick={back}>
            Back
          </button>
        )}
        
        <button disabled={!valid} type="submit">{isLastStep ? "Finish" : "Next"}</button>
      </div>
    </form>
  </main>
  )
}

export default Form
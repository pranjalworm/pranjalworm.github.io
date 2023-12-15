import { useState } from 'react'
import styles from './signup.module.css'

const Signup = () => {

  const [isUserSignedUp, setUserSignedUp] = useState(false)

  const signupUser = async (event: any) => {

    event.preventDefault()

    // TODO: save this is in session storage?
    setUserSignedUp(true)

    // TODO: make api call to signup user


  }


  return (
    <div className={styles.signupRoot}>

      {

        isUserSignedUp ?

          (
            <div>
              Thank you for signing up!
            </div>
          )

          :

          (<>
            <div className={styles.signupText}>
              Sign up to receive updates. <br />
              No spam. That&apos;s a promise.
            </div>
            <form onSubmit={signupUser} className={styles.signupForm}>

              <input
                className={styles.emailField}
                type="email"
                name="email"
                placeholder="Email Address"
                required />

              <button
                className={styles.submitButton}
                type="submit">
                Sign Up
              </button>

            </form>
          </>)

      }

    </div>
  )
}

export default Signup
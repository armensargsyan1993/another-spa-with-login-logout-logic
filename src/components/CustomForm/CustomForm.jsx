import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './CustomForm.module.scss';

export const CustomForm = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
      <div className={styles.root}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <input
              ref={register}
              placeholder="Miles From"
              name="first"
              type="text"
            />
            <input
              ref={register}
              placeholder="Enter Zipcode"
              name="second"
              type="text"
            />
          </div>
          <div className={styles.btn}>
            <label>
              <input type="submit" value="Find Bootcamps" />
            </label>
          </div>
        </form>
      </div>
    );
}

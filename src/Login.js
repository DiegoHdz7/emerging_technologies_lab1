import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Comments from './Comments';
import Card from 'react-bootstrap/Card'
import styles from './styles.module.css';

import { useState, useRef, useEffect} from 'react';

export default function Login({/*email,isLogin, setEmail, setIsLogin,handleSubmitComment, setComment, */appProps }) {




    //Refs
    const emailInput = useRef();

    //Use Effect: run each time state dependencies changes

    //UseEffect
    useEffect(() => {
        console.log('Users state changed from login: ', appProps.users);
        console.log('Email state has changed from login:', appProps.email);


        //checkCustInputs();
    }, [appProps.users,appProps.email]);

    //Callbacks
    const  handleLoginLogout = async (event) => {
        event.preventDefault();

        //Check that the input value is not empty
        if (emailInput.current != null && emailInput.current.value!=null) {
             appProps.setEmail(emailInput.current.value); // this doesn't change the appProps.email immediately 
                                                              //If I ran this appProps.email, it would show the previous email not the current one


            //Check if the email already exist in the users array state
            if (appProps.users.some((element) => element.email === emailInput.current.value) === false) {

                const newUser = {
                    email: emailInput.current.value,
                    customInput1: null,
                    customInput2: null
                }

                
                 appProps.setUsers([...appProps.users, newUser])
                console.log('New user is: ', newUser)
                
                
            }
        }

        appProps.isLogin ? appProps.setIsLogin(false) : appProps.setIsLogin(true);
    }

    //Login props
    const loginProps = {
        handleLoginLogout: handleLoginLogout
    }


    if (!appProps.isLogin) {
        return (
            <Card style={{ width: '18rem' }} className={styles.cardForm}>
                <h1>Login to evaluate the course:</h1>
                <Form >
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control ref={emailInput} type="text" defaultValue={appProps.email} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <Button className={styles.formButton} variant="success" type="submit" onClick={handleLoginLogout}>
                        Login
                    </Button>

                </Form>
            </Card>
        )
    } else {
        return (
            <>
                <Comments appProps={appProps} loginProps={loginProps} />
            </>
        )
    }




}


import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import styles from './styles.module.css';


export default function Comments({ appProps, loginProps }) {

  const navigate = useNavigate();
  const userComment = useRef();
  const userEmail = useRef();

  const cpyUsers = appProps.users.map(item => { return item });
  const customOptions1 = ['favorite topic', 'favorite assignment', 'strongest technical skill obtained in this course'];
  const customOptions2 = ['professor name', 'GPA', 'Schedule'];




  //UseEffect
  useEffect(() => {


    checkCustInputs();

    //const index = arr.findIndex( item => item.email ===obj.email);

    console.log('Users state changed from Comments: ', appProps.users);

  }, [appProps.users]);

  //Callbacks



  const handleCommentSubmit = (e) => {
    e.preventDefault();
    appProps.setEmail(userEmail.current.value);
    appProps.setComment(userComment.current.value);
    navigate('/thankyou');
  }

  const randomItem = (items) => {

    return items[Math.floor(Math.random() * items.length)];

  }

  function checkCustInputs() {
    //try this --arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
    const tempUser = cpyUsers.filter(item => item.email === appProps.email);
    if (tempUser.length > 0 && tempUser[0].customInput1 === null && tempUser[0].customInput2 === null) {
      const newUser = {
        email: appProps.email,
        customInput1: randomItem(customOptions1),
        customInput2: randomItem(customOptions2)
      }



      appProps.setUsers(updateArray(appProps.users, newUser))
      console.log('tempUser: ', tempUser);
      //console.log('Merged array: ', mergeArrayWithObject(cpyUsers,newUser))
      //appProps.setUsers();

    }
  }

  //For updating array with an specific object
  const updateArray = (arr, obj) => {
    const index = arr.findIndex(item => item.email === obj.email);

    const newArray = [...arr]
    newArray[index] = {
      email: obj.email,
      customInput1: obj.customInput1,
      customInput2: obj.customInput2

    }

    return newArray;
  }




  return (
    <Card style={{ width: '18rem' }} className={styles.cardForm}>
      <Form >
        <Form.Group>
          <Form.Label>Course Code:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Course Name:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Student email:</Form.Label>
          <Form.Control ref={userEmail} type="text" defaultValue={appProps.email} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your Comments:</Form.Label>
          <Form.Control ref={userComment} type="textarea" className={styles.formTextArea} />
        </Form.Group>

        <Form.Group>
          <Form.Label>{cpyUsers.filter(item => item.email === appProps.email)[0].customInput1}</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>

        <Form.Group>
          <Form.Label>{cpyUsers.filter(item => item.email === appProps.email)[0].customInput2}</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>



        <Form.Group className={styles.formBtnContainer}>
          <Button variant="success" type="submit" onClick={handleCommentSubmit} className={styles.formButton}>
            Submit
          </Button>
          <Button variant="success" type="button" onClick={loginProps.handleLoginLogout} className={styles.formButton}>
            Logout
          </Button>
        </Form.Group>

      </Form>

    </Card>

  )
}

/*

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
*/

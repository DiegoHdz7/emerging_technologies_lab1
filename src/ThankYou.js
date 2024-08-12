import React from 'react'
import {  useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';


export default function ThankYou({email,comment}) {

  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }} className={styles.cardForm}>
        <h1>Thank You {email}</h1>
        <h3>We appreciate your comments: {comment}</h3>
        <Button variant="success" type="submit" onClick={()=>{navigate('/')}}>Go Home</Button>
    </Card>
  )
}

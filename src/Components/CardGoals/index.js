import React from "react";
import {Link} from "react-router-dom"

// Styles 
import {
  LinkRouter,
  BoxTitleGoals
} from "./styles"


export default function CardGoals(props) {


  return (
    <LinkRouter background={props.background} onClick={props.openGoalsPage}>
      <Link to={`/Objetivos/${props.id}`} style={{ textDecoration: 'none' }}>
          <BoxTitleGoals>
            <strong>{props.id}</strong>
            <h2>{props.title}</h2>
          </BoxTitleGoals>
          <img src={props.icon} alt={props.title}/>
      </Link>
    </LinkRouter>
  )
}
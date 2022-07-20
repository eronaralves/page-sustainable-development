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
      <Link to={`/objetivos/${props.id}`} style={{ textDecoration: 'none' }}>
          <BoxTitleGoals>
            <strong>{props.id}</strong>
            <h2>{props.title}</h2>
          </BoxTitleGoals>
          <img src={props.icon}/>
      </Link>
    </LinkRouter>
  )
}
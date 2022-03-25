import React from "react"
// import { makeStyles } from "@material-ui/core/styles"s
import Fade from "react-reveal/Fade"
import placeholder from "../../../assets/png/placeholder.png"
import "./SingleProject.css"

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  //   const useStyles = makeStyles((t) => ({
  //     iconBtn: {
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       width: 40,
  //       height: 40,
  //       borderRadius: 50,
  //       border: `2px solid ${theme.tertiary}`,
  //       color: theme.tertiary,
  //       transition: "all 0.2s",
  //       "&:hover": {
  //         backgroundColor: theme.secondary,
  //         color: theme.primary,
  //         transform: "scale(1.1)",
  //         border: `2px solid ${theme.secondary}`,
  //       },
  //     },
  //     icon: {
  //       fontSize: "1.1rem",
  //       transition: "all 0.2s",
  //       "&:hover": {},
  //     },
  //   }))

  //   const classes = useStyles()

  return (
    <Fade bottom>
      <div className="container">
        <div className="container__img">
          <img key={id} src={image || placeholder} alt={name} />
        </div>

        <h2>{name}</h2>
        <p>{desc}</p>

        <div className="container__btn">
          <a href={code} className="btn">
            Code
          </a>
          <a href={demo} className="btn">
            Demo
          </a>
        </div>
      </div>
    </Fade>
  )
}

export default SingleProject

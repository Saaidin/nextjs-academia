import React from "react"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import PersonIcon from "@mui/icons-material/Person"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import CommentIcon from "@mui/icons-material/Comment"

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle="OUR BLOG" title="Recent From Blog" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
              <div key={val.id} className="items shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span className="flex items-center">
                      <i className="">
                        <PersonIcon />
                      </i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span className="flex items-center ">
                      <i className="">
                        <CalendarMonthIcon />
                      </i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span className="flex items-center">
                      <i className="">
                        <CommentIcon />
                      </i>
                      <label htmlFor="">{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog

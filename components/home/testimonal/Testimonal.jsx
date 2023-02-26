import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

          <div className="content grid2">
            {testimonal.map((val) => (
              <div key={val.id} className="items shadow">
                <div className="box flex items-center">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="icon rotate-180 transform scale-[1.2]">
                      <FormatQuoteIcon />
                    </i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal

import React from "react"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="flex justify-between max-w-[450px] sm:container mx-auto">
          <div className="logo">
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div>
            <i className="icon bg-white rounded-lg p-2 sm:p-4">
              <FacebookRoundedIcon />
            </i>
            <i className="icon bg-white rounded-lg p-2 sm:p-4">
              <InstagramIcon />
            </i>
            <i className="icon bg-white rounded-lg p-2 sm:p-4">
              <TwitterIcon />
            </i>
            <i className="icon bg-white rounded-lg p-2 sm:p-4">
              <YouTubeIcon />
            </i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head

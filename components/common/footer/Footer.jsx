import React from "react"
import { blog } from "../../../dummydata"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import PersonIcon from "@mui/icons-material/Person"
import MapIcon from "@mui/icons-material/Map"
import PhoneIcon from "@mui/icons-material/Phone"
import Image from "next/image"

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container mx-auto flex flex-col sm:flex-row gap-5">
          <div className="left sm:w-[50%] ">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right sm:w-[50%] ">
            <div className="flex items-center w-full">
              <input
                className=""
                type="text"
                placeholder="Enter email address"
              />
              <Image
                src="/images/paper-plane.png"
                width={43}
                height={43}
                alt="image"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="pt-10">
        <div className="max-w-[400px] sm:container mx-auto flex flex-col sm:flex-row gap-5">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <i className="icon bg-white rounded-lg p-2 sm:p-4">
              <FacebookRoundedIcon />
            </i>
            <i className="icon bg-white rounded-lg p-2 sm:p-4">
              <TwitterIcon />
            </i>
            <i className="icon bg-white rounded-lg p-2 sm:p-4">
              <InstagramIcon />
            </i>
          </div>
          <div className="flex gap-5">
            <div className="box link w-[50%]">
              <h3>Explore</h3>
              <ul>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  About Us
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Services
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Courses
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Blog
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Contact us
                </li>
              </ul>
            </div>
            <div className="box link w-[50%]">
              <h3>Quick Links</h3>
              <ul>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Contact us
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Pricing
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Terms & Conditions
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Privacy
                </li>
                <li className="flex">
                  <i className="text-[#1eb2a6]">
                    <ArrowRightAltIcon />
                  </i>
                  Feedbacks
                </li>
              </ul>
            </div>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div key={val.id} className="items flexSB">
                <div className="flex gap-2">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <i className="">
                        <CalendarMonthIcon />
                      </i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <i className="">
                        <PersonIcon />
                      </i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <h4>{val.title.slice(0, 40)}...</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li className="flex">
                <i className="">
                  <MapIcon />
                </i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className="">
                  <PhoneIcon />
                </i>
                +2 392 3929 210
              </li>
              <li className="flex flex-row relative">
                <i className="-rotate-45 absolute -top-[20px]">
                  <SendOutlinedIcon />
                </i>
                <div className="absolute left-[70px]">info@yourdomain.com</div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          ©2023 Make this Next-JS Website with{" "}
          <i>
            <FavoriteIcon />
          </i>{" "}
          by DinWebDev
        </p>
      </div>
    </>
  )
}

export default Footer

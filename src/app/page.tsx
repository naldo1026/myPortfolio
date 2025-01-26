import Image from "next/image"

// React Icons
import { FaLinkedin, FaTreeCity } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen p-10 lg:p-20 font-mono text-2xl font-bold gap-16">
      <div className="flex-col w-full lg:w-1/2">
        <div className="flex flex-col lg:flex-row">
          <Image
            src="/ronaldo.png"
            width={150}
            height={150}
            alt="Picture of Ronaldo Goncalves"
            className="rounded-xl mr-5"
          />

          <div>
            <h3 className="mt-2 lg:mt-0">Ronaldo Goncalves</h3>
            <p className="text-lg font-light mb-2">Software Developer</p>
            <span className="text-sm font-light">
              <p className="flex items-center">
                <FaTreeCity className="mr-1" />
                London
              </p>
              <p className="flex items-center">
                <IoCall className="mr-1" />
                +44 7539 537166
              </p>
              <p className="flex items-center">
                <MdEmail className="mr-1" />
                rgoncalves1026@gmail.com
              </p>
              <p className="flex items-center">
                <FaLinkedin className="mr-1" />
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ronaldogon/"
                >
                  linkedin.com/in/ronaldogon
                </a>
              </p>
            </span>
          </div>
        </div>
        <div className="mt-10">
          <h3>Tech Stack & Tools</h3>
          <p className="text-sm">
            Typescript, React, Redux, Next js, Testing with Cypress & Jest,
            Tailwind, Material UI, Bootstrap, HTML, CSS, Javascript, Vite,
            Webpack, Validation with ZOD, Axios, React Tanstack Query,
            proficient with Git, Ruby and Ruby on Rails
          </p>
        </div>
        <div className="mt-10">
          <h3>Education</h3>
          <h2 className="text-lg font-light">
            Le Wagon, London - Fullstack software developer Bootcamp
          </h2>
          <p className="text-sm">
            Le Wagon, London - Fullstack software developer Bootcamp I Learned
            Ruby, SQL, HTML, CSS, Javascript, Rest API’s, TDD, Ruby on Rails,
            Git.
          </p>
        </div>
        <div className="mt-10 text-lg font-light">
          My portfolio was created by using next js, react and tailwind css
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="flex-col">
          <h3>Work Experience</h3>
          <p className="font-light text-sm mt-2">April 2023 - PRESENT</p>
          <p className="text-lg mb-2">Joe & The Juice - Front End Developer</p>

          <ul className="text-sm list-disc ml-5">
            <li>
              Focused around building tech tools & solutions for the supply
              chain & purchasing teams.
            </li>
            <li>
              Currently have a live UK availability app running in real time
              that is used in 4 markets: UK, Sweden, Finland & Denmark that was
              developed by myself. It helps 250+ stores in these markets to
              monitor the product availability in each store. This web app is
              now vital in stores and is closely monitored by HQ. it&apos;s a
              web app that was built on react with typescript, using react fetch
              api.
            </li>

            <li>
              The UK Availability app is also used across other departments such
              as our facilities team & supply chain team. Facilities teams use
              the app to locate problems that occur in stores as you can see if
              grills, coffee machines or ice machines are down. Supply chain
              team uses it to monitor product availability across the whole
              market.
            </li>
          </ul>
        </div>

        <div className="flex-col mt-5">
          <p className="font-light text-sm">January 2022 - April 2023</p>
          <p className="text-lg mb-2">
            Joe & The Juice - Junior Front End Developer
          </p>
          <ul className="text-sm list-disc ml-5">
            <li>
              Worked as a junior software developer in a team of 6, reporting to
              the senior front end developer.
            </li>

            <li>
              Worked on and maintained 6 different projects. Projects worked on
              were an internal admin and employee management web app where shift
              plans tools, employee contracts, employee database, accounting &
              reporting tools were managed.
            </li>

            <li>
              Main focus was a customer care web app that allowed our company to
              see transactions, receipts and communicate with customers as well
              as process refunds etc.
            </li>
            <li>
              Other projects worked on were a campaign management app for
              marketing to manage and create new promotions, and marketing
              strategies etc. An inventory system used by supply chain and store
              managers, managing stock, orders, sales etc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

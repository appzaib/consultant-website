import { useState } from "react";

import EmailIcon from "@assets/mail.svg";
import PhoneIcon from "@assets/phone.svg";
import LocationIcon from "@assets/location.svg";
import FacebookIcon from "@assets/facebook-white.svg";
import GithubIcon from "@assets/github-white.svg";
import LinkedInIcon from "@assets/linkedIn-white.svg";
import TwitterIcon from "@assets/twitter-white.svg";
import SendIcon from "@assets/send.svg";

import stl from "./ContactPage.module.scss";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  console.log(name, "name");
  console.log(email, "email");
  console.log(msg, "msg");

  return (
    <div className={stl.contactPage}>
      <div className={stl.left}>
        <div className={stl.text}>
          <h1 className={stl.heading}>Let's talk</h1>
          <p className={stl.desc}>
            Officia ad cupidatat ea proident elit exercitation cupidatat. Esse
            deserunt id laborum ipsum nulla dolore. Et est nisi et officia
            adipisicing ipsum et. Reprehenderit tempor irure laboris eiusmod et
            anim aliqua non occaecat Lorem ipsum. Ex Lorem reprehenderit
            exercitation ea in cupidatat ipsum do.
          </p>
        </div>
        <div className={stl.contactOpt}>
          <button
            onClick={() => console.log("Clicked...")}
            className={stl.emailBtn}
          >
            <EmailIcon />
            Write us an Email
          </button>
          <button
            onClick={() => console.log("Clicked...")}
            className={stl.phoneBtn}
          >
            <PhoneIcon />
            Call us
          </button>
          <button
            onClick={() => console.log("Clicked...")}
            className={stl.locationBtn}
          >
            <LocationIcon />
            Find us on Map
          </button>
        </div>
        <div className={stl.social}>
          <div className={stl.text}>
            <h2 className={stl.desc}>Connect with us on social</h2>
          </div>
          <div className={stl.btnContainer}>
            <button
              onClick={() => console.log("Clicked...")}
              className={stl.socialBtn}
            >
              <FacebookIcon />
            </button>
            <button
              onClick={() => console.log("Clicked...")}
              className={stl.socialBtn}
            >
              <GithubIcon />
            </button>
            <button
              onClick={() => console.log("Clicked...")}
              className={stl.socialBtn}
            >
              <LinkedInIcon />
            </button>
            <button
              onClick={() => console.log("Clicked...")}
              className={stl.socialBtn}
            >
              <TwitterIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={stl.right}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className={stl.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className={stl.input}
        />
        <textarea
          placeholder="Your Message..."
          onChange={(e) => setMsg(e.target.value)}
          className={stl.msg}
        ></textarea>
        <button
          onClick={() => console.log("Clicked...")}
          type="submit"
          className={stl.submitBtn}
        >
          <SendIcon />
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactPage;

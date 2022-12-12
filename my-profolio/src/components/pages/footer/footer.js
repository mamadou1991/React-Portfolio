import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { FaStackOverflow } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"


export default function Footer() {
  return (
    <div>
      <div class="footer">
        <a class="icon" href="https://github.com/mamadou1991" target="_blank" rel="noreferrer noopener">
            <VscGithub />
        </a>
        <a class="icon" href="https://www.stackoverflow.com/mamadou1991" target="_blank" rel="noreferrer noopener">
          <FaStackOverflow />
        </a>
        <a class="icon" href="https://www.linkedin.com/mamadou1991" target="_blank" rel="noreferrer noopener">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

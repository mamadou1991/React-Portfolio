import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { FiGlobe } from "react-icons/fi";

export default function Portfolio() {
  return (
    <div>
      <div class="page-container">
        <p class="page-content">
          My projects
        </p>
      </div>
      <div class="row">
        <div class="column">
          <div class="card cocktail-card">
            <h3 class="card-head">E-commerce back end</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/mamadou1991/E-commerce-Back-End" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card text-card">
            <h3 class="card-head">Tech blog</h3>
            <div class="project-link">
              <a class="icon" href="https://github.com/mamadou1991/Tech-Blog" target="_blank" rel="noreferrer noopener"><VscGithub /></a>
              <a class="icon" href="https://damp-lowlands-04738.herokuapp.com/" target="_blank" rel="noreferrer noopener"><FiGlobe /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

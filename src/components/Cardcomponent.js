import React from 'react'
import {Card, CardGroup} from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';

import "../Css/About.css";
import {GiTrophyCup} from 'react-icons/gi';
import {AiOutlineSetting,AiOutlineClockCircle,AiOutlineHeart} from 'react-icons/ai';
import {BiLaptop} from 'react-icons/bi';
import {VscFeedback} from 'react-icons/vsc';
import { display } from '@material-ui/system'

function Cardcomponent() {



    return (
        <div data-aos="fade-up">
<div class="m-5">
<section id="services" class="featured-services">
<div class="third-container st">

<h2>
        Services
        </h2>
<br /> 
  <p className="ht">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

<br/>
<div class="row mb-6">
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon"><i><GiTrophyCup/></i></div>  
                    <h4 class="title">Personality Development through Vocabulary</h4>
                    <p class="description">It's important to enhance childs vocabulary so as to make his/her 
                    personality filled with more confidence by making them more linguistic.</p>
                    </div>
                </div> 

                 <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon"><i><AiOutlineSetting/></i></div>
                    <h4 class="title">Problem Solving Classes</h4>
                    <p class="description">Levels are like stairs, you step on one stair successfully then 
                    a new stair is their to take you to your goal. In the same way,the problems will be divided 
                    into several levels, so that each one of you can differentiate between every question deeply.</p>
                    </div>
                </div>  

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon"><i><BiLaptop/></i></div>
                    <h4 class="title">Brainstroming</h4>
                    <p class="description">Learning with fun is our goal and thus every weekend, you will be 
                    having special brainstorming games, fancy puzzles, unsolved questions and a treasure box will be 
                    waiting for you on your way.</p>
                    </div>
                </div> 


                  

                 </div> 

                 <div class="row mb-6">
                
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon"><i><AiOutlineClockCircle/></i></div>
                    <h4 class="title">Monthly Test</h4>
                    <p class="description">Tests brings the best. Learn with us and test your learning by giving 
                    monthly tests. No one can stop you from being the best. Perceptions made easy with us.</p>
                    </div>
                </div> 

                 <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon"><i><AiOutlineHeart/></i></div>
                    <h4 class="title">Online one-to-one learning</h4>
                    <p class="description">If u face any problem in learning path, 
                    then for sure you can contact the teachers personally. If still the problem 
                    is not resolved, we can take your separate explanation classes. 
                    </p>
                    </div>
                </div> 

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mx-6">
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon"><i><VscFeedback/></i></div>
                    <h4 class="title">Feedback Function</h4>
                    <p class="description">Every weekend a feedback form will be shared with the respective student, 
                    and it's the responsibility of the parents as well as the students to fill that form and tell us 
                    their experience. Each and every feedback is valuable for us.</p>
                    </div>
                </div> 

                 
</div>
</div>

</section>
</div>
</div>);
}

export default Cardcomponent;



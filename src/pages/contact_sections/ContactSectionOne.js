import React, {useState} from 'react';
import {Label} from './contac_components/Label'
import {Validation} from './contac_components/Validation'
import { Input } from './contac_components/Input';
import { Focus } from './contac_components/Focus';




// const name = document.getElementById('first-name')
// const lastName = document.getElementById('last-name')
// const email = document.getElementById('email')
// const message = document.getElementById('message')


const ContactSectionOne = () => {

		return (
			<section id="kontakt">
			   <div class="container-contact100">
			<div class="wrap-contact100">
				<form id="form" class="contact100-form validate-form" >
					<span class="contact100-form-title">
						Send Us A Message
					</span>
					<Label for="first-name" title="Tell us your name *" />
					<Validation styling="wrap-input100 rs1-wrap-input100 validate-input alert-validate" data-validate="Type first name">
						<Input id="first-name"  placeholder="First name" />
						<Focus />
					</Validation>
				
					<Validation styling="wrap-input100 rs1-wrap-input100 validate-input">
						<Input id="last-name"  placeholder="Last name" />
						<Focus />
					</Validation>
				
					<Label for="email" title="Enter your email *" />
					<Validation styling="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz"> 
						<Input id="email" type="text" placeholder="Eg. example@email.com" />
						<Focus />
					</Validation>
	
					<Label for="phone" title="Enter hone number" />
					<Validation styling="wrap-input100">
						<Input id="phone" class="input100" placeholder="Eg. +48 800 000 000" />
						<Focus />
					</Validation>
					
					<Label for="message" title="Message *" />
					<Validation styling="wrap-input100 validate-input" data-validate = "Message is required">
						<textarea id="message" class="input100"  placeholder="Write us a message" ></textarea>
						<Focus />
					</Validation>
	
					<div class="container-contact100-form-btn">
						<button class="contact100-form-btn" >
							Send Message
						</button>
					</div>
				</form>
	
				<div class="contact100-more flex-col-c-m">
					<div class="flex-w size1 p-b-47">
						<div class="txt1 p-r-25">
							<span class="lnr lnr-map-marker"></span>
						</div>
	
						<div class="flex-col size2">
							<span class="txt1 p-b-20">
								Address
							</span>
	
							<span class="txt2">
								Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
							</span>
						</div>
					</div>
	
					<div class="dis-flex size1 p-b-47">
						<div class="txt1 p-r-25">
							<span class="lnr lnr-phone-handset"></span>
						</div>
	
						<div class="flex-col size2">
							<span class="txt1 p-b-20">
								Lets Talk
							</span>
	
							<span class="txt3">
								+1 800 1236879
							</span>
						</div>
					</div>
	
					<div class="dis-flex size1 p-b-47">
						<div class="txt1 p-r-25">
							<span class="lnr lnr-envelope"></span>
						</div>
	
						<div class="flex-col size2">
							<span class="txt1 p-b-20">
								General Support
							</span>
	
							<span class="txt3">
								contact@example.com
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
			</section>
	)
}

export {ContactSectionOne}
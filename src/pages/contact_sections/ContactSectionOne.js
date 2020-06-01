import React from 'react';
import {Label} from './contac_components/Label'
import {Validation} from './contac_components/Validation'
import { Input } from './contac_components/Input';
import { Focus } from './contac_components/Focus';
import { useForm } from "react-hook-form";





const ContactSectionOne = () => {

	const {handleSubmit, register, errors, reset} = useForm();
 



	const onSubmit = (data) => {
		alert('Message has been sent')

		reset();
		
	}



		return (
			<section id="kontakt">
			   <div class="container-contact100">
			<div class="wrap-contact100">
				<form noValidate id="form" class="contact100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
					<span class="contact100-form-title">
						Send Us A Message
					</span>

					
					{/* <Label for="first-name" title="Tell us your name *" />
					<Validation className={'wrap-input100 rs1-wrap-input100 validate-input'  } data-validate="Type first name" isValid={errors && errors.firstName && "alert-validate"}>
						<Input id="first-name"  placeholder="First name" name="firstName" ref={register({required: true})}/>
						<Focus />
					</Validation>
				//nawiasy []
					<Validation className={["wrap-input100 rs1-wrap-input100 validate-input ", addClass]}>
						<Input id="last-name"  placeholder="Last name" name="lastName" ref={register({required: true})}/>
						<Focus />
					</Validation> */}

				<Label for="first-name" title="Tell us your name *" />
					<Validation className={'wrap-input100 rs1-wrap-input100 validate-input' } data-validate="Type first name" isValid={errors && errors.firstName}>
						<Input id="first-name"  placeholder="First name" name="firstName" ref={register({required: true})}/>
						<Focus />
					</Validation>
				
					<Validation className={["wrap-input100 rs1-wrap-input100 validate-input "]} isValid={errors && errors.lastName}>
						<Input id="last-name"  placeholder="Last name" name="lastName" ref={register({required: true})}/>
						<Focus />
					</Validation>
				
					<Label for="email" title="Enter your email *" />
					<Validation className={"wrap-input100 validate-input"} data-validate = "Valid email is required: ex@abc.xyz" isValid={errors && errors.email}> 
						<Input id="email" type="email" placeholder="Eg. example@email.com" name="email" ref={register({required: true})}/>
						<Focus />
					</Validation>
	
					<Label for="phone" title="Enter hone number" />
					<Validation className="wrap-input100">
						<Input id="phone" class="input100" valuer="not-needed" placeholder="Eg. +48 800 000 000" />
						<Focus />
					</Validation>
					
					<Label for="message" title="Message *" />
					<Validation className={"wrap-input100 validate-input"} data-validate = "Message is required" isValid={errors && errors.message}>
						<textarea id="message" class="input100"  placeholder="Write us a message" name="message" ref={register({required: true})}></textarea>
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
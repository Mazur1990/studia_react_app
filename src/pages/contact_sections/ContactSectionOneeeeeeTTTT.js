import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from './contac_components/Input';



const ContactSectionOne = () => {
		
	const [firstName, setFirstName] = useState(false)
	const [lastName, setLastName] = useState(false)
	const [email, setEmail] = useState(false)
	const [message, setMessage] = useState(false)

	const handleFirstName = (e) =>{
		
		console.log(firstName)
		if(setFirstName(e.target.value.length) >=0){
			setFirstName(true)
			console.log('test')
			console.log(firstName)
		}

	}
	const handleLastName = (e) =>{
		setLastName(e.target.value)
		console.log(lastName)
	}
	const handleEmail = (e) =>{
		setEmail(e.target.value)
	}
	const handleMessage = (e) =>{
		setMessage(e.target.value)

}

	const {handleSubmit, register} = useForm();
 
	const onSubmit = (data) => {
		// e.preventDefault()
		console.log("submitted")
		console.log(data)
		console.log(data.firstName.length)
		console.log(data.lastName)
		console.log(data.email)
		console.log(data.message)
		if(data.firstName.length <=0){
			console.log('malo')
		}
		
	}
	<Label for="first-name" title="Tell us your name *" />
					<Validation className={'wrap-input100 rs1-wrap-input100 validate-input' } data-validate="Type first name" isValid={errors && errors.firstName}>
						<Input id="first-name"  placeholder="First name" name="firstName" ref={register({required: true})}/>
						<Focus />
					</Validation>
				
					<Validation className={["wrap-input100 rs1-wrap-input100 validate-input "]} isValid={errors && errors.firstla}>
						<Input id="last-name"  placeholder="Last name" name="lastName" ref={register({required: true})}/>
						<Focus />
					</Validation>
	// alert-validate
	return (
        <section id="kontakt">
           <div className="container-contact100">
		<div className="wrap-contact100">
			<form className="contact100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
				<span className="contact100-form-title">
					Send Us A Message
				</span>

				<label className="label-input100" for="first-name">Tell us your name *</label>
				  <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
					{/* <Input id="first-name" className="input100" type="text" placeholder="First name"  name="firstName" ref={register({required: true})}/> */}
					<input id="first-name" className="input100" type="text" placeholder="First name"  name="firstName" ref={register({required: true})} value={firstName.value} onChange={handleFirstName}/>

					
					<span className="focus-input100"></span>
				  </div>
				<div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
					<input className="input100" type="text"  placeholder="Last name" name="lastName" ref={register({required: true})} value={lastName.value} onChange={handleLastName}/>
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100" for="email">Enter your email *</label>
				<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input id="email" className="input100" type="text"  placeholder="Eg. example@email.com" name="email" ref={register({required: true})} value={email.value} onChange={handleEmail}/>
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100" for="phone">Enter phone number</label>
				<div className="wrap-input100">
					<input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +1 800 000000" />
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100" for="message">Message *</label>
				<div className="wrap-input100 validate-input" data-validate = "Message is required">
					<textarea id="message" className="input100" name="message" placeholder="Write us a message" ref={register({required: true})} value={message.value} onChange={handleMessage}></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
					<button className="contact100-form-btn">
						Send Message
					</button>
				</div>
			</form>

			<div className="contact100-more flex-col-c-m">
				<div className="flex-w size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-map-marker"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
							Address
						</span>

						<span className="txt2">
							Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
						</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-phone-handset"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
							Lets Talk
						</span>

						<span className="txt3">
							+1 800 1236879
						</span>
					</div>
				</div>

				<div className="dis-flex size1 p-b-47">
					<div className="txt1 p-r-25">
						<span className="lnr lnr-envelope"></span>
					</div>

					<div className="flex-col size2">
						<span className="txt1 p-b-20">
							General Support
						</span>

						<span className="txt3">
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
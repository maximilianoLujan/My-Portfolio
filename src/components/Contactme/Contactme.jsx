import { Formik ,Form , Field , ErrorMessage} from "formik";
import "./contactme.css"
import emailjs from '@emailjs/browser';

export default function ContactMe(){
    const sendEmail = (values) => {
        emailjs.send("service_k5ihpyk","template_2wk8fiy",values,"n7Ddl573qFxuQlxRp")
        .then(result => {
            console.log(result.text)
        }, (error => console.log(error)))
    }
    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
        }
        if (!values.name) {
            errors.name = 'Required'
        } else if (
            !/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i.test(values.name)){
                errors.name = 'Invalid name';
        }
        if (!values.message) {
            errors.message = 'Required'
        } else if (values.message.length < 10){
            errors.message = 'The message is too short'
        }


        return errors
    }
    return(
        <div id="contactme" className="flex flex-col items-center w-full">
            <h2 className="mt-6 w-max px-6 py-2 border-4 font-bold text-sm sm:text-lg tracking-widest mb-8">CONTACT ME</h2>
            <div className="w-full md:w-1/2 px-8">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        message: ""
                    }}
                    onSubmit={ sendEmail }
                    validate={ validate }
                >
                    <Form className="w-full flex flex-col items-center gap-6">
                        <div className="w-full">
                            <Field className="w-full p-2 bg-opacity-0 border-l-4 border-b-4" required placeholder="ENTER YOUR NAME *" type="text" name="name"/> 
                            <p className="text-error">

                                <ErrorMessage  name="name"/> 
                            </p>
                        </div>
                        <div className="w-full">
                            <Field className="w-full p-2 bg-opacity-0 border-l-4 border-b-4" required placeholder="ENTER YOUR MAIL*" type="email" name="email"/> 
                            <p className="text-error">

                                <ErrorMessage  name="email" />
                            </p>
                        </div>
                        <div className="w-full">
                            <Field className="w-full p-2 bg-opacity-0 border-l-4 border-b-4" required placeholder="MESSAGE*" as="textarea" name="message"/> 
                            <p className="text-error">
                                <ErrorMessage  name="message" />
                            </p>
                        </div>
                        <button type="submit" className="w-max font-bold px-6 py-2 border-x-2">SUBMIT</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
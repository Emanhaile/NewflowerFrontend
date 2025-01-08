import React, {useEffect, useState} from 'react'
import commenService from '../../Component/Service/comment.service';
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
   
    const [comment, setComment] = useState("");
    const [emailError, setEmailError] = useState("");
    const [NameError, setNameError] = useState("");
    const [commentError, setcommentError] = useState("");
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const { user } = useAuth();
    const loggedInUserToken = user?.token || "";
    const navigate = useNavigate();
  
    const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let valid = true;
  
      setEmailError(email ? (validateEmail(email) ? "" : "Invalid email format") : "Email is required");
     
      setNameError(name ? "" : " name is required");
      setcommentError(comment ? "" : "comment  is required");
     
  
      if (!email || !validateEmail(email) || !name || !comment ) {
        valid = false;
      }
  
      if (!valid) return;
  
      setLoading(true);
      const formData = { name, email, comment };
  
      try {
        const response = await commenService.createComment(formData, loggedInUserToken);
        const data = await response.json();
        alert("your comment inserted sucessfully")
        navigate("/weddingdecore");
  
        if (data.status === "success") {
          localStorage.setItem("user", JSON.stringify(data.data));
          
        } else {
          setServerError(data.message || "Failed to process request");
        }
      } catch (error) {
        setServerError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <>
      <div class="page_content_wrap page_paddings_no">
                <div class="content">
                    <article class="">
                        <div class="post_content">
                        <section class="no-col-padding">
                                <div class="container-fluid ">    
                                    <div class="content_container">
                                        <div class="columns_wrap">
                                            <div class="column_container column-1_1">
                                                <div class="column-inner">
                                                    <div class="m_wrapper">
                                                        <div class="sc_form_wrap">
                                                            <div class="sc_form sc_form_style_form_1 aligncenter sc_home-param-type-g">
                                                                <h3 class="sc_form_title sc_item_title sc_item_title_without_descr">Give Us a Feedback</h3>
                                                                <h6 class="sc_form_subtitle sc_item_subtitle">contact form</h6>
                                                                <form onClick={handleSubmit} class="sc_input_hover_default" data-formtype="form_1" method="post" action="include/contact-form.php">
                                                                    <div class="sc_form_info columns_wrap">
                                                                        <div class="sc_form_item sc_form_field label_over column-1_2">
                                                                            <input id="sc_form_username" type="text" name="name"  value={name}
              onChange={(event) => setName(event.target.value)}

                                                                            placeholder="Name *" aria-required="true"/>
                                                                             {NameError && <div className="validation-error text-red-500">{NameError}</div>}
                                                                        </div><div class="sc_form_item sc_form_field label_over column-1_2">
                                                                            <input id="sc_form_email" type="email" name="email" value={email}
              onChange={(event) => setEmail(event.target.value)}
               placeholder="E-mail *" aria-required="true"/>
                {emailError && <div className="validation-error text-red-500">{emailError}</div>}
                                                                        </div>
                                                                        <div class="sc_form_item sc_form_message column-1_1">
                                                                            <textarea id="sc_form_message" name="message"  value={comment}
              onChange={(event) => setComment(event.target.value)}placeholder="Message" aria-required="true"></textarea>
               {commentError && <div className="validation-error text-red-500">{commentError}</div>}
                                                                        </div>
                                                                    </div>
                                                                    <div class="sc_form_item sc_form_button">
                                                                        <button type='submit'>Send Message</button>
                                                                    </div>
                                                                    <div class="result sc_infobox"></div>
                                                                </form> 
                                                            </div>
                                                        </div>   
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </section>  
                            </div>
                            </article>
                            </div>
                            </div>
                            
                            
    </>
  )
}

export default Contact

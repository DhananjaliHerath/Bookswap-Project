// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Col,
//   Row,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   CustomInput,
//   Alert,
//   Input,
// } from "reactstrap";

// import axios from "axios";
// import moment from "moment";
// import { forEach, filter, find } from "lodash";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";
// import ToastCommon from "../../components/toastCommon";
// import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
// import { REGISTER_CANDIDATE, HOSTMexxar } from "../../configs/api-config";

// const ReferenceForm = (props) => {
//   const { mode = "POST", candidateId, closeModal } = props;
//   const MexxarApiRoot = HOSTMexxar;

//   const { addToast } = useToasts();
//   var ukey;
//   const [newQArray, setNewQArray] = useState([]);
//   const [editable, setEditable] = useState(false);
//   const [addMore, setAddMore] = useState([{}, {}]);
//   const [candidateID, setCandidateID] = useState([]);
//   const { register, handleSubmit, errors } = useForm();
//   const [dataExcisting, setDataExcisting] = useState([]);

//   const [questions, setQuestions] = useState([
//     {
//       questionNo: "colleagueRelationships",
//       question: "Colleague Relationships",
//     },
//     {
//       questionNo: "patientRelationships",
//       question: "Patient Relationships",
//     },
//     {
//       questionNo: "attitude",
//       question: "Attitude",
//     },
//     {
//       questionNo: "reliability",
//       question: "Reliability",
//     },
//     {
//       questionNo: "clinicalCompetency",
//       question: "Clinical Competency",
//     },
//     {
//       questionNo: "flexibility",
//       question: "Flexibility",
//     },
//   ]);

//   const handleEdit = () => {
//     if (editable) {
//       //edit call
//     }
//     setEditable(!editable);
//   };
//   const onSubmit = (data) => {
//     axios
//       .post(
//         MexxarApiRoot + `reference-form/save-reference-details?ukey=${ukey}`,
//         data
//       )
//       .then((res) => {
//         if (res.data.status == "failed") {
//           ToastCommon(true, "error", addToast);
//         } else if (res.data.status == "success")
//           ToastCommon(true, "success", addToast);
//       })
//       .catch((err) => {
//         ToastCommon(true, "error", addToast);
//       });
//   };

//   const [referenceForm, setReferenceForm] = useState(null);

//   const getReferenceForm = () => {
//     axios
//       .get(`${HOSTMexxar}reference-form/candidate/${candidateId}`)
//       .then((res) => {
//         setReferenceForm(res.data.body[0]);
//       });
//   };

//   useEffect(() => {
//     if (mode == "GET" && candidateId != null && candidateId != undefined) {
//       getReferenceForm();
//     } else {
//       ukey = new URLSearchParams(props.location.search).get("ukey");
//     }
//     return () => {};
//   }, [candidateId]);

//   useEffect(() => {
//     if (mode == "POST") {
//       ukey = new URLSearchParams(props.location.search).get("ukey");
//     }
//     return () => {};
//   }, []);

//   const checkBoxStatus = (question, identifier) => {
//     let checkStatus = find(referenceForm, function (value, key) {
//       if (key == question && value == identifier) {
//         return true;
//       } else {
//         return false;
//       }
//     });

//     return checkStatus;
//   };

//   return (
//     <div className={`row ${mode == "POST" && "mx-5"}`}>
//       <div className={`col-md-12  ${mode == "POST" && "p-5"}`}>
//         {mode == "POST" && (
//           <div className={`${mode == "POST" && "px-3 mx-5"}`}>
//             <div className="card-header d-flex justify-content-center text-align-center">
//               <h2>Employment Reference Request</h2>
//               {/* <FormGroup row>
//                 <button
//                   className={`btn btn-wave btn-raised ${
//                     editable ? "bg-warning " : "bg-danger "
//                   }`}
//                   type="button"
//                   onClick={() => handleEdit()}
//                 >
//                   {editable ? "Save" : "Edit"}
//                   {editable ? (
//                     <FontAwesomeIcon icon={faCheck} className="ml-3" />
//                   ) : (
//                     <FontAwesomeIcon icon={faEdit} className="ml-3" />
//                   )}
//                 </button>
//               </FormGroup> */}
//             </div>

//             <div className="m-3">
//               <div>
//                 <Alert>
//                   The following person has applied to work for us at ........
//                   and you have been nominated by them to be their referee. We
//                   will need the following information from you in order to
//                   assess their suitability to work for us. Please fill this
//                   information out as accurately as possible.
//                 </Alert>
//                 <Alert color="info">
//                   <span className="text-danger mx-2">*</span>
//                   Note : Please fill all the fileds before submiting the form.
//                 </Alert>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className={`${mode == "POST" && "p-3 mx-5"}`}>
//           <div className="">
//             <Form onSubmit={handleSubmit(onSubmit)}>
//               <>
//                 <div className="  col-md-12 d-flex justify-content-between align-items-center">
//                   <h5>Candidate Employement Details</h5>
//                 </div>

//                 <div className="mt-2">
//                   <FormGroup row className="m-3">
//                     <Col sm={12} md={4}>
//                       <Label>Candidate Name</Label>
//                       <Input
//                         type="name"
//                         name={"candidateName"}
//                         //placeholder="Job Title "
//                         defaultValue={
//                           referenceForm && referenceForm.candidateName
//                         }
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                     <Col sm={12} md={4}>
//                       <Label>Employed at</Label>
//                       <Input
//                         type="name"
//                         name={"employedAt"}
//                         // placeholder="Job Title "
//                         defaultValue={referenceForm && referenceForm.employedAt}
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                     <Col sm={12} md={4}>
//                       <Label>Job Title</Label>
//                       <Input
//                         type="name"
//                         name={"jobTittle"}
//                         //  placeholder="Job Title "
//                         defaultValue={referenceForm && referenceForm.jobTittle}
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row className="m-3">
//                     <Col sm={12} md={6}>
//                       <Label>Date of Employment</Label>
//                       <Input
//                         type="date"
//                         name={"dateOfEmployment"}
//                         //  placeholder="Date of employment"
//                         defaultValue={
//                           referenceForm &&
//                           moment(referenceForm.dateOfEmployment).format(
//                             "YYYY-MM-DD"
//                           )
//                         }
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                     <Col sm={12} md={6}>
//                       <Label>Reason for Leaving</Label>
//                       <Input
//                         type="name"
//                         name={"reasonForLeaving"}
//                         //  placeholder="Organisation Name"
//                         defaultValue={
//                           referenceForm && referenceForm.reasonForLeaving
//                         }
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                   </FormGroup>
//                   <hr />

//                   <div className="col-md-12 d-flex justify-content-between align-items-center mb-3">
//                     <h5>Candidate Assessment </h5>
//                   </div>
//                   {/* {newQArray.map((question, id) => { */}
//                   {questions.map((question, id) => {
//                     return (
//                       <FormGroup row key={id} className="m-3">
//                         <Col sm={12} md={12} lg={4}>
//                           <Label>
//                             {id + 1}. {question.question}
//                           </Label>
//                         </Col>
//                         <Col sm={12} md={12} lg={2}>
//                           <FormGroup check>
//                             <Label>
//                               <Input
//                                 type="radio"
//                                 name={question.questionNo}
//                                 value={0}
//                                 checked={
//                                   referenceForm &&
//                                   checkBoxStatus(
//                                     question.questionNo,
//                                     "VERY_POOR"
//                                   )
//                                 }
//                                 innerRef={register({
//                                   required: {
//                                     value: true,
//                                     message: "This field is required!",
//                                   },
//                                 })}
//                               />
//                               Unsatisfactory
//                             </Label>
//                           </FormGroup>
//                         </Col>

//                         <Col sm={12} md={12} lg={1}>
//                           <FormGroup check>
//                             <Label>
//                               <Input
//                                 type="radio"
//                                 name={question.questionNo}
//                                 value={1}
//                                 checked={
//                                   referenceForm &&
//                                   checkBoxStatus(question.questionNo, "POOR")
//                                 }
//                                 innerRef={register({
//                                   required: {
//                                     value: true,
//                                     message: "This field is required!",
//                                   },
//                                 })}
//                               />
//                               Poor
//                             </Label>
//                           </FormGroup>
//                         </Col>
//                         <Col sm={12} md={12} lg={2}>
//                           <FormGroup check>
//                             <Label>
//                               <Input
//                                 type="radio"
//                                 name={question.questionNo}
//                                 value={2}
//                                 // checked={
//                                 //   referenceForm &&
//                                 //   referenceForm.rating == "SATISFACTORY"
//                                 //     ? true
//                                 //     : false
//                                 // }
//                                 checked={
//                                   referenceForm &&
//                                   checkBoxStatus(
//                                     question.questionNo,
//                                     "SATISFACTORY"
//                                   )
//                                 }
//                                 innerRef={register({
//                                   required: {
//                                     value: true,
//                                     message: "This field is required!",
//                                   },
//                                 })}
//                               />
//                               Satisfactory
//                             </Label>
//                           </FormGroup>
//                         </Col>
//                         <Col
//                           sm={12}
//                           md={12}
//                           lg={1}
//                           style={{ marginLeft: "-10px", marginRight: "5px" }}
//                         >
//                           <FormGroup check>
//                             <Label>
//                               <Input
//                                 type="radio"
//                                 name={question.questionNo}
//                                 value={3}
//                                 checked={
//                                   referenceForm &&
//                                   checkBoxStatus(question.questionNo, "GOOD")
//                                 }
//                                 innerRef={register({
//                                   required: {
//                                     value: true,
//                                     message: "This field is required!",
//                                   },
//                                 })}
//                               />
//                               Good
//                             </Label>
//                           </FormGroup>
//                         </Col>
//                         <Col sm={12} md={12} lg={2}>
//                           <FormGroup check>
//                             <Label>
//                               <Input
//                                 type="radio"
//                                 name={question.questionNo}
//                                 value={4}
//                                 checked={
//                                   referenceForm &&
//                                   checkBoxStatus(
//                                     question.questionNo,
//                                     "VERY_GOOD"
//                                   )
//                                 }
//                                 innerRef={register({
//                                   required: {
//                                     value: true,
//                                     message: "This field is required!",
//                                   },
//                                 })}
//                               />
//                               Excellent
//                             </Label>
//                           </FormGroup>
//                         </Col>
//                       </FormGroup>
//                     );
//                   })}
//                   <hr />
//                   <div className=" col-md-12 d-flex justify-content-between align-items-center mb-3">
//                     <h5>How Would You Rate This Candidate Overall?</h5>
//                   </div>

//                   <FormGroup row className="m-3">
//                     <Col sm={12} md={12} lg={4}>
//                       <Label> Rating</Label>
//                     </Col>
//                     <Col sm={2} md={2}>
//                       <FormGroup check>
//                         <Label>
//                           <Input
//                             type="radio"
//                             name={"rating"}
//                             value={0}
//                             checked={
//                               referenceForm &&
//                               referenceForm.rating == "VERY_POOR"
//                                 ? true
//                                 : false
//                             }
//                             innerRef={register({
//                               required: {
//                                 value: true,
//                                 message: "This field is required!",
//                               },
//                             })}
//                           />
//                           Unsatisfactory
//                         </Label>
//                       </FormGroup>
//                     </Col>

//                     <Col sm={12} md={12} lg={1}>
//                       <FormGroup check>
//                         <Label>
//                           <Input
//                             type="radio"
//                             name={"rating"}
//                             value={1}
//                             checked={
//                               referenceForm && referenceForm.rating == "POOR"
//                                 ? true
//                                 : false
//                             }
//                             innerRef={register({
//                               required: {
//                                 value: true,
//                                 message: "This field is required!",
//                               },
//                             })}
//                           />
//                           Poor
//                         </Label>
//                       </FormGroup>
//                     </Col>
//                     <Col sm={12} md={12} lg={2}>
//                       <FormGroup check>
//                         <Label>
//                           <Input
//                             type="radio"
//                             name={"rating"}
//                             value={2}
//                             checked={
//                               referenceForm &&
//                               referenceForm.rating == "SATISFACTORY"
//                                 ? true
//                                 : false
//                             }
//                             innerRef={register({
//                               required: {
//                                 value: true,
//                                 message: "This field is required!",
//                               },
//                             })}
//                           />
//                           Satisfactory
//                         </Label>
//                       </FormGroup>
//                     </Col>
//                     <Col
//                       sm={12}
//                       md={12}
//                       lg={1}
//                       style={{ marginLeft: "-10px", marginRight: "5px" }}
//                     >
//                       <FormGroup check>
//                         <Label>
//                           <Input
//                             type="radio"
//                             name={"rating"}
//                             value={3}
//                             checked={
//                               referenceForm && referenceForm.rating == "GOOD"
//                                 ? true
//                                 : false
//                             }
//                             innerRef={register({
//                               required: {
//                                 value: true,
//                                 message: "This field is required!",
//                               },
//                             })}
//                           />
//                           Good
//                         </Label>
//                       </FormGroup>
//                     </Col>
//                     <Col sm={12} md={12} lg={2}>
//                       <FormGroup check>
//                         <Label>
//                           <Input
//                             type="radio"
//                             name={"rating"}
//                             value={4}
//                             checked={
//                               referenceForm &&
//                               referenceForm.rating == "VERY_GOOD"
//                                 ? true
//                                 : false
//                             }
//                             innerRef={register({
//                               required: {
//                                 value: true,
//                                 message: "This field is required!",
//                               },
//                             })}
//                           />
//                           Excellent
//                         </Label>
//                       </FormGroup>
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row className="m-3">
//                     <Col sm={12} md={12} lg={8}>
//                       <Label>Would you re-employ this candidate?</Label>
//                     </Col>
//                     <Col sm={2} md={2}>
//                       <FormGroup check>
//                         <Label>
//                           <Input
//                             type="radio"
//                             name={"reEmployCandidate"}
//                             value={"true"}
//                             checked={
//                               referenceForm && referenceForm.reEmployCandidate
//                             }
//                             innerRef={register({
//                               required: {
//                                 value: true,
//                                 message: "This field is required!",
//                               },
//                             })}
//                           />
//                           Yes
//                         </Label>
//                       </FormGroup>
//                     </Col>

//                     <Col sm={12} md={12} lg={2}>
//                       <FormGroup check>
//                         <Label>
//                           <Input
//                             type="radio"
//                             name={"reEmployCandidate"}
//                             value={"false"}
//                             checked={
//                               referenceForm && !referenceForm.reEmployCandidate
//                             }
//                             innerRef={register({
//                               required: {
//                                 value: true,
//                                 message: "This field is required!",
//                               },
//                             })}
//                           />
//                           No
//                         </Label>
//                       </FormGroup>
//                     </Col>
//                   </FormGroup>
//                   <hr />
//                   <div className="col-md-12 d-flex justify-content-between align-items-center">
//                     <h5>Your Signature </h5>
//                   </div>

//                   <FormGroup row className="m-3">
//                     <Col sm={12} md={12} lg={4}>
//                       <Label>Referee Name</Label>
//                       <Input
//                         type="name"
//                         name={"ReferenceName"}
//                         placeholder="Referee's Name"
//                         defaultValue={
//                           referenceForm && referenceForm.referenceName
//                         }
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                     <Col sm={12} md={12} lg={4}>
//                       <Label>Telephone Number </Label>
//                       <Input
//                         type="text"
//                         name={"telephoneNo"}
//                         placeholder="Telephone Number"
//                         defaultValue={
//                           referenceForm && referenceForm.telephoneNo
//                         }
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                           pattern: {
//                             value:
//                               /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
//                             message: "Please enter a valid phone number",
//                           },
//                         })}
//                       />
//                     </Col>
//                     <Col sm={12} md={12} lg={4}>
//                       <Label>Referee Email </Label>

//                       <Input
//                         type="Email"
//                         name={"refereeEmail"}
//                         placeholder="Refree Email"
//                         defaultValue={
//                           referenceForm && referenceForm.refereeEmail
//                         }
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                           pattern: {
//                             value:
//                               /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                             message: "Please enter a valid email address!",
//                           },
//                         })}
//                       />
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row className="m-3">
//                     <Col sm={12} md={12} lg={8}>
//                       <Label>Address</Label>
//                       <Input
//                         type="text"
//                         name={"address"}
//                         placeholder="Refree Address"
//                         defaultValue={referenceForm && referenceForm.address}
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                     <Col sm={12} md={12} lg={4}>
//                       <Label>Post Code</Label>
//                       <Input
//                         type="text"
//                         name={"postCode"}
//                         placeholder="Postal code"
//                         defaultValue={referenceForm && referenceForm.postCode}
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row className="m-3">
//                     <Col sm={12} md={12} lg={4}>
//                       <Label>Band</Label>
//                       <Input
//                         type="text"
//                         name={"band"}
//                         placeholder="Band"
//                         defaultValue={referenceForm && referenceForm.band}
//                         innerRef={register({
//                           required: {
//                             value: true,
//                             message: "This field is required!",
//                           },
//                         })}
//                       />
//                     </Col>
//                   </FormGroup>

//                   {mode == "POST" && (
//                     <div className="card-header">
//                       <div className="col-md-12 d-flex justify-content-between align-items-center">
//                         <Alert>
//                           <small>
//                             By signing this reference form, I declare that all
//                             the information provide is accurate and factual to
//                             my knowledge and that this information may be shared
//                             with employers.
//                           </small>
//                           <Input type="checkBox"></Input>
//                         </Alert>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </>
//               <div className="d-flex justify-content-between">
//                 <div></div>
//                 <div>
//                   {mode == "POST" ? (
//                     <Button className="mr-2" color="success" type="submit">
//                       Save
//                     </Button>
//                   ) : (
//                     <Button
//                       className="mr-2"
//                       color="danger"
//                       onClick={closeModal}
//                     >
//                       Close
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </Form>
//             {mode == "POST" && (
//               <div className="d-flex justify-content-center">
//                 Powered By Mexxar
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferenceForm;

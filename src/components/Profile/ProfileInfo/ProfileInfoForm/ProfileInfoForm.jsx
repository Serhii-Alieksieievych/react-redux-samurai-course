import React from "react";
import classes from './ProfileInfoForm.module.css';
import { Form, Field } from "react-final-form";
import { requiredField } from "../../../../utils/validators/validator";
import { CustomField } from "../../../common/CustomForms/CustomForms";
import CloseButton from "../../../common/CloseButton/CloseButton";

const ProfileInfoForm = ({ profileInfo, updateProfileInfo, disableEditMode }) => {

  const onSubmit = (values) => {
    updateProfileInfo(values).then(()=>{
      disableEditMode()
    })
  }

  const closeHandler = () => {
    disableEditMode()
  }

  if (!profileInfo) return <div> Loading... </div>
  return (
    <div className={classes.profileInfoForm}>
      <Form
        onSubmit={onSubmit}
        initialValues={{...profileInfo.data}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div onClick={closeHandler} className={classes.closeButtonWrapper}><CloseButton /></div>
            <div>
              <div className={classes.fieldWrapper}>
                <p>Full Name</p>
                <Field
                  //value={values.fullName}
                  name="fullName"
                  component={CustomField}
                  type="text"
                  placeholder="Full Name"
                  validate={requiredField}
                />
              </div>
              
              <div className={classes.fieldWrapper}>
              <p>About me:</p>
              <Field
                name="aboutMe"
                component={CustomField}
                placeholder="About me"
                //value={values.aboutMe}
              />
              </div>
            </div>
            <div className={classes.fieldWrapper}>
              <p>Looking for a job</p>
              <Field name="lookingForAJob" component="input" type="checkbox" />
            </div>

            
            <div className={classes.fieldWrapper}>
              <p>Skills:</p>
              <Field
                name="lookingForAJobDescription"
                component={CustomField}
                placeholder="Skills"
                //value={values.lookingForAJobDescription}
              />
            </div>

            <div className={classes.contactsBlock}>
            <div className={classes.fieldWrapper}>
            <p>Facebook</p>
            <Field
              name="contacts.facebook"
              component={CustomField}
              type="text"
              placeholder="Facebook"
              //value={values.contacts.facebook}
            / ></div>
<div div className={classes.fieldWrapper}>
            <p>Website</p>
            <Field
              name="contacts.website"
              component={CustomField}
              type="text"
              placeholder="Website"
            /></div>
  <div className={classes.fieldWrapper}>
            <p>Twitter</p>
            <Field
              name="contacts.twitter"
              component={CustomField}
              type="text"
              placeholder="Twitter"
            /></div>
    <div className={classes.fieldWrapper}>
            <p>Instagram</p>
            <Field
              name="contacts.instagram"
              component={CustomField}
              type="text"
              placeholder="Instagram"
            /></div>
    <div className={classes.fieldWrapper}>
            <p>Youtube</p>
            <Field
              name="contacts.youtube"
              component={CustomField}
              type="text"
              placeholder="Youtube"
            /></div>
  <div className={classes.fieldWrapper}>
            <p>Github</p>
            <Field
              name="contacts.github"
              component={CustomField}
              type="text"
              placeholder="Github"
            /></div>
                <div className={classes.fieldWrapper}>
            <p>Main link</p>
            <Field
              name="contacts.mainLink"
              component={CustomField}
              type="text"
              placeholder="Main link"
            /></div>
            </div>
            <div className={classes.buttons}>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{/*JSON.stringify(values, 0, 2)*/}</pre>
          </form>
        )}
      
      />
    </div>
  )
}

export default ProfileInfoForm;
import React from "react";
import classes from './ProfileInfoForm.module.css';
import { CustomField } from "../../../common/CustomForms/CustomForms";
import CloseButton from "../../../common/CloseButton/CloseButton";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IProfileInfo, IProfileInfoRequest } from "../../../../types/ProfileTypes";
type PropsType = {
  currentUserId: number,
  profileInfo: { data: IProfileInfo, isFetching: boolean },
  updateProfileInfo: (values: IProfileInfoRequest) => Promise<void>,
  disableEditMode: () => void,
  setProfile: (id: number) => Promise<void>,
}

const ProfileInfoForm = ({
  currentUserId,
  profileInfo,
  updateProfileInfo,
  disableEditMode,
  setProfile
}: PropsType) => {
  let {
    fullName,
    lookingForAJob, 
    lookingForAJobDescription,
    aboutMe,
    contacts,
  } = profileInfo.data
  let {
    facebook,
    website,
    vk,
    twitter,
    instagram,
    youtube,
    github,
    mainLink,
  } = contacts

  const closeHandler =() => {
    disableEditMode()
  }
  return (
    <div>
      <CloseButton size="20px" color="black" onClick={closeHandler}/>
      <Formik
        initialValues={{
          fullName,
          lookingForAJob,
          lookingForAJobDescription,
          aboutMe,
          facebook,//facebook === null ? undefined : facebook,
          website,//website === null ? undefined : website,
          vk,//vk === null ? undefined : vk,
          twitter,//twitter === null ? undefined : twitter,
          instagram,//instagram === null ? undefined : instagram,
          youtube,//youtube === null ? undefined : youtube,
          github,//github === null ? undefined : github,
          mainLink,//mainLink === null ? undefined : mainLink,
        }}

        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lookingForAJobDescription: Yup.string().required('Required'),
        })}

        onSubmit={(values, { setSubmitting }) => {
          const data = {
            fullName: values.fullName,
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription,
            aboutMe: values.aboutMe,
            contacts: {
              facebook: values.facebook,
              website: values.website,
              vk: values.vk,
              twitter: values.twitter,
              instagram: values.instagram,
              youtube: values.youtube,
              github: values.github,
              mainLink: values.mainLink,
            }
          }
          updateProfileInfo(data).then(() => {
            disableEditMode()
            setProfile(currentUserId)
          })
        }}
      >
        <Form>
          <label htmlFor="fullName">fullName</label>
          <Field name="fullName" type="text" />
          <ErrorMessage name="fullName" />

          <label htmlFor="lookingForAJob">lookingForAJob</label>
          <Field name="lookingForAJob" type="checkbox" />
          <ErrorMessage name="lookingForAJob" />

          <label htmlFor="lookingForAJobDescription">lookingForAJobDescription</label>
          <Field name="lookingForAJobDescription" type="text" />
          <ErrorMessage name="lookingForAJobDescription" />

          <label htmlFor="aboutMe">About me</label>
          <Field name="aboutMe" as="textarea" />
          <ErrorMessage name="aboutMe" />

          <label htmlFor="facebook">Facebook</label>
          <Field name="facebook" type="text" />
          <ErrorMessage name="facebook" />

          <label htmlFor="website">Website</label>
          <Field name="website" type="text" />
          <ErrorMessage name="website" />

          <label htmlFor="twitter">Twitter</label>
          <Field name="twitter" type="text" />
          <ErrorMessage name="twitter" />

          <label htmlFor="vk">VK</label>
          <Field name="vk" type="text" />
          <ErrorMessage name="vk" />

          <label htmlFor="instagram">Instagram</label>
          <Field name="instagram" type="text" />
          <ErrorMessage name="instagram" />

          <label htmlFor="youtube">Youtube</label>
          <Field name="youtube" type="text" />
          <ErrorMessage name="youtube" />

          <label htmlFor="github">Github</label>
          <Field name="github" type="text" />
          <ErrorMessage name="github" />

          <label htmlFor="mainLink">Main link</label>
          <Field name="mainLink" type="text" />
          <ErrorMessage name="mainLink" />
          
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileInfoForm;
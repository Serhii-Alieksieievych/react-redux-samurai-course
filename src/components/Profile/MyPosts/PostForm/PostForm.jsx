import React from "react";
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLengthCreator, minLengthCreator } from "../../../../utils/validators/validator";
import { CustomField } from "../../../common/CustomForms/CustomForms";

const maxLengthValidate = maxLengthCreator(20)
const minLengthValidate = minLengthCreator(2)

const PostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="post"
                component={CustomField}
                placeholder="New post"
                validate={ [requiredField, maxLengthValidate, minLengthValidate] }
            />
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

export default PostReduxForm;
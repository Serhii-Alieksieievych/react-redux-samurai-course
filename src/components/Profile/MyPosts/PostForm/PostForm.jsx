import React from "react";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator } from "../../../../utils/validators/validator";
import { CustomField } from "../../../common/CustomForms/CustomForms";

const maxLengthValidate = maxLengthCreator(2000)

const PostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="post"
                component={CustomField}
                placeholder="New post"
                validate={ [maxLengthValidate] }
            />
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

export default PostReduxForm;
import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import validateArticle from '../../../services/validateArticle'


const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderArticles = ({fields, meta: {error, submitFailed}}) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>
                Ajouter un article
            </button>
            {
                submitFailed && error && <span>{error}</span>
            }
        </li>
        {
            fields.map((article, index) => (
                <li key={index}>
                    <button
                        type="button"
                        title="Supprimer"
                        onClick={() => fields.remove(index)}
                    />
                    <Field
                        name={`${article}.codeArticle`}
                        type="text"
                        component={renderField}
                        label="Code article"
                    />
                    <Field
                        name={`${article}.quantite`}
                        type="text"
                        component={renderField}
                        label="Quantite"
                    />
                </li>
            ))
        }
    </ul>
);

const FieldArrayArticles = ({props}) => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="codeArticle"
                type="text"
                component={renderField}
                label="Code article"
            />
            <Field
                name="codeCategory"
                type="text"
                component={renderField}
                label="Code category"
            />
            <Field
                name="codeOperation"
                type="text"
                component={renderField}
                label="Code operation"
            />
            <FieldArray name="articles" component={renderArticles}/>
            <div>
                <button type="submit" disabled={submitting || pristine}>
                    Submit
                </button>
                <button type="button" disabled={submitting || pristine} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'article',
    validateArticle
})(FieldArrayArticles);

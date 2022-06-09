const validateArticle = (values) => {
    const errors = {};

    for (let key in values) {
        if (!values[key]) {
            errors[key] = 'Required';
        }
    }

    if (values.articles.length === 0) {
        errors.articles = {
            _error: 'At least one article is required'
        }
    } else {
        const articlesArrayErrors = [];
        values.articles.forEach((article, index) => {
            const articleErrors = {};
            if (!article.codeArticle) {
                articleErrors.codeArticle = 'Required';
            }
            if (!article.quantite || article.quantite < 1) {
                articleErrors.quantite = 'Required';
            }
            articlesArrayErrors[index] = articleErrors;
        });
        if (articlesArrayErrors.length > 0) {
            errors.articles = articlesArrayErrors;
        }
    }

    return errors;
}

export default validateArticle;
import GetAll from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";
import CreateArticle from "../../form/Article/CreateArticle";
import FieldArrayArticles from "../../form/Article/ArticleForm";
import showResults from "./showResults";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(rootReducer);
export default function Articles() {

    const handleResult = values => {
        console.log(values);
    }
    const data = GetAll('articles');
    return (
        <>
            {/*<CreateArticle/>*/}
            <Provider store={store}>
                <FieldArrayArticles onSubmit={handleResult}/>
            </Provider>
            <Biglist data={data} id={true}/>
        </>
    )
}

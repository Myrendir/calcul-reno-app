//{codeArticle}-{codeCategorie}-{codeOperation}:({codeArticle}*{quantite}}),({codeArticle}*quantite}});
const parse = (data, string) => {
    let result = string ? [] : '';
    if (string) {
        // String to Json
        const finalString = cleanString(data);
        const strings = splitStrings(finalString, ';');

        strings.map(r => {
            result.push(setQueryObject(r));
        });

        return result;
    } else {
        // Json to String
        const infos = data.codeArticle + "-" + data.codeCategorie + "-" + data.codeOperation + ":";
        let articles = '';
        data.articles.map(r => {
            articles += '(' + r.codeArticle + '*' + r.quantite + '),';
        })

        result = infos + articles;
        result = result.substring(0, result.length - 1);
        return cleanString(result);
    }
}

const splitStrings = (str, separator) => {
    let res = [];
    const iterations = str.split(separator).length - 1
    for (let i = 0; i < iterations; i++) {
        res.push(getStringBs(str, separator))
        str = str.slice(str.indexOf(separator) + 1)
    }

    return res;
}

const getStringBs = (str, separator) => {
    if (str.substring(0, str.indexOf(separator)) === '') {
        return {
            error: "Le format n'est pas respecté"
        }
    }
    return str.substring(0, str.indexOf(separator));
}

const getStringAs = (str, separator) => {
    if (str.substring(0, str.indexOf(separator)) === '') {
        return {
            error: "Le format n'est pas respecté"
        }
    }
    return str.substring(str.indexOf(separator) + 1);
}

const setNotTraitedStr = (str, separator) => {
    return str.slice(str.indexOf(separator) + 1);
}

const getArticles = (str) => {
    const parenthRegex = /\(([^)]+)\)/;
    const articles = [];
    const iterations = str.split(',').length - 1

    articles.push({
        "codeArticle": getStringBs(str.match(parenthRegex)[1], '*'),
        "quantite": parseInt(getStringAs(str.match(parenthRegex)[1], '*')),
    });

    str = setNotTraitedStr(str, ':');

    for (let i = 0; i < iterations; i++) {
        str = setNotTraitedStr(str, ',');
        articles.push({
            "codeArticle": getStringBs(str.match(parenthRegex)[1], '*'),
            "quantite": parseInt(getStringAs(str.match(parenthRegex)[1], '*')),
        });
    }

    return articles;
}
const cleanString = (str) => {
    str = str.replace(/\s+/g, '');

    if (str.charAt(str.length - 1) !== ';') {
        str += ';';
    }

    return str;
}

const setQueryObject = (str) => {
    const response = {
        "codeArticle": "",
        "codeCategorie": "",
        "codeOperation": "",
        "articles": []
    }
    response.codeArticle = getStringBs(str, '-');

    str = setNotTraitedStr(str, '-');

    response.codeCategorie = getStringBs(str, '-');
    str = setNotTraitedStr(str, '-');

    response.codeOperation = getStringBs(str, ':');
    str = setNotTraitedStr(str, ':');

    response.articles = getArticles(str);

    return response;
}

module.exports = parse;
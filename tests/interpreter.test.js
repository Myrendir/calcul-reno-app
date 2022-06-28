const parse = require('../services/parse');

describe('Parse to JSON the written string in textarea', () => {
    test('parse should be OK', () => {
        const string = "codeArticle1-codeCategory1-codeOperation1:(codeArticle2*4),(codeArticle3*7),(codeArticle8*25);";
        const toJson = parse(string);
        const attempted = [
            {
                codeArticle: 'codeArticle1',
                codeCategorie: 'codeCategory1',
                codeOperation: 'codeOperation1',
                articles: [
                    {
                        codeArticle: 'codeArticle2',
                        quantite: 4
                    },
                    {
                        codeArticle: 'codeArticle3',
                        quantite: 7
                    },
                    {
                        codeArticle: 'codeArticle8',
                        quantite: 25
                    }
                ]
            }
        ]

        expect(toJson[0].codeArticle).toBe(attempted[0].codeArticle)
        expect(toJson[0].codeCategorie).toBe(attempted[0].codeCategorie)
        expect(toJson[0].codeOperation).toBe(attempted[0].codeOperation)
        expect(toJson[0].articles[0].codeArticle).toBe(attempted[0].articles[0].codeArticle)
        expect(toJson[0].articles[0].quantite).toBe(attempted[0].articles[0].quantite)
        expect(toJson[0].articles[1].codeArticle).toBe(attempted[0].articles[1].codeArticle)
        expect(toJson[0].articles[1].quantite).toBe(attempted[0].articles[1].quantite)
        expect(toJson[0].articles[2].codeArticle).toBe(attempted[0].articles[2].codeArticle)
        expect(toJson[0].articles[2].quantite).toBe(attempted[0].articles[2].quantite)
    })
})
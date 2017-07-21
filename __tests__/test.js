'use strict';

const {Matrix} = require('ml-matrix');
const LogisticRegressionTwoClasses = require('../src/logreg_2classes');
const LogisticRegression = require('../src/logreg');

describe('Logistic Regression algorithm', function () {
// test for 2 classes

    it('Test of the function used with 2 classes', function() {
        var X = new Matrix([[0, -1], [1, 0], [1, 1], [1, -1], [2, 0], [2, 1], [2, -1], [3, 2], [0, 4], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4]]);
        var Y = Matrix.columnVector([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]);

        var Xtest = new Matrix([[0, -2], [1, 0.5], [1.5, -1], [1, 4.5], [2, 3.5], [1.5, 5]]);

        var logreg = new LogisticRegressionTwoClasses({numSteps: 500, learningRate: 5e-4});
        logreg.train(X, Y);
        var results = logreg.predict(Xtest); // compute results of the training set
        expect(results).toEqual([0, 0, 0, 1, 1, 1]);
    });

    it('Test of the prediction with 3 classes', function(){
        var X = new Matrix([[0,-1], [1,0], [1,1], [1,-1], [2,0], [2,1], [2,-1], [3,2], [0,4], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5], [3,4], [1, 10], [1, 12], [2, 10], [2,11], [2, 14], [3, 11]]);
        var Y = Matrix.columnVector([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2]);

        var Xtest = new Matrix([[0, -2], [1, 0.5], [1.5, -1], [1, 2.5], [2, 3.5], [1.5, 4], [1, 10.5], [2.5, 10.5], [2, 11.5]])
        var Ytest = Matrix.columnVector([0, 0, 0, 1, 1, 1, 2, 2, 2]);

        var logreg = new LogisticRegression({numSteps: 1000, learningRate: 5e-3});
        logreg.train(X,Y);
        var finalResults = logreg.predict(Xtest);
        expect(finalResults).toEqual([0, 0, 0, 1, 1, 1, 2, 2, 2]);
    });
});

from flask import Flask,request
from flask_restful import Api, Resource, reqparse
import pickle
import numpy as np
import requests as rq
import json
# import PredictionForm from '../pages/HomePage/PredictForm'
app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('data')


@app.route('/predict',methods=['POST'])
def predict(): 
        json1 = request.json
        
        # args = parser.parse_args()
        # # args = args.replace('"','\\"')
        print(json1)
        # X = np.array(json.loads(args['data']))
        # print(X)
        input = [json1['team1'],json1["team2"],json1["venue"],json1["tossDecision"],json1["tossWinner"]]
        final = [np.array(input)] 

        
        output=model.predict(final)
        print (output);
        return json.dumps(output.tolist())


if __name__ == '__main__':
    # Load model
    model = pickle.load(open('model.pkl','rb'))

    app.run(debug=True)

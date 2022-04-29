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

teamList = {
1:'India',
2: 'New Zealand' ,
3: 'Sri Lanka' ,
4: 'Pakistan' ,
5: 'England' ,
6: 'Australia' ,
7: 'Bangladesh' ,
8: 'South Africa' ,
9: 'West Indies' ,
10: 'Zimbabwe' ,
11: 'Ireland' ,
12: 'Afghanistan' ,
13: 'Kenya' ,
14: 'Scotland' ,
15: 'Netherlands' ,
16: 'Ireland' ,
17: 'Bermuda' ,
18: 'Namibia' ,
19: 'Canada' ,
20: 'UAE' ,
21: 'Hong Kong' ,
22: 'Nepal' ,
23: 'P.N.G.' ,
24: 'Oman' ,
25: 'World-XI' ,
26: 'Namibia' ,
27: 'Nigeria' ,
28: 'U.S.A.' ,
29: 'Botswana' ,
30: 'Cayman Islands' ,
31: 'Singapore' ,
32: 'Jersey ' 
}

@app.route('/predict',methods=['POST'])
def predict(): 
        json1 = request.json
        
        # args = parser.parse_args()
        # # args = args.replace('"','\\"')
        # print(json1)
        # X = np.array(json.loads(args['data']))
        # print(X)
        input = [json1['team1'],json1["team2"],json1["venue"],json1["tossDecision"],json1["tossWinner"]]
        final = [np.array(input)] 

        
        output=model.predict(final)
        counrtryId = output[0]
        # print (counrtryId)
        countryName = teamList[counrtryId]
        
        return countryName


if __name__ == '__main__':
    # Load model
    model = pickle.load(open('model.pkl','rb'))

    app.run(host='0.0.0.0',debug=True)

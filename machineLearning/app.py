from flask import Flask,render_template,request
import json
import pickle
import numpy as np
import requests as rq
import PredictionForm from '../pages/HomePage/PredictForm'
app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('data')

class Model(Resource):
    def post(self):
        args = parser.parse_args()
        X = np.array(json.loads(args['data']))
        prediction = model.predict(X)

api.add_resource(Model, '/prediction')

if __name__ == '__main__':
    # Load model
    model = pickle.load(open('model.pkl','rb'))

    app.run(debug=True)

@app.route('/')
def home():
    return render_template('')

@app.route('/',methods=['POST'])
def predict(): 
        response = rq.get("http://localhost:8080/prediction/predict")
        resJson = response.json()
        team1 = resJson.team1.id
        team1 = resJson.team2.id
        toss_decision= resJson.

        final = [np.array()] 

        
        prediction=model.predict(final)
        print(f"The winner would be: {list(team_encodings.keys())[list(team_encode_dict['team1'].values()).index(output)]}")
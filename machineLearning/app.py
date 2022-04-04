from flask import Flask,render_template,request
import json
import pickle
import numpy as np
import requests as rq
import PredictionForm from '../pages/HomePage/PredictForm'
app = Flask(__name__)
api = Api(app)


@app.route('/Prediction')
def home():
    return render_template('Home.js')

@app.route('/predict',methods=['POST'])
def predict(): 
        team1 = request.form["team1"]
        team2 = request.form["team2"]
        venue = request.form["venue"]
        toss_decision = request.form["tossDecision"]
        toss_winner = request.form["tossWinner"]
        
        input = [team1,team2,toss_winner,venue,toss_decision]
        final = [np.array()] 

        
        output=model.predict(final)
        return render_template ('Prediction.js',data={'Winner is:',output})

if __name__ == '__main__':
    # Load model
    model = pickle.load(open('model.pkl','rb'))

    app.run(debug=True)

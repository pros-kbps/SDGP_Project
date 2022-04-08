from flask import Flask,render_template,request;
import json;
import pickle;
import numpy as np;
import requests as rq;

app = Flask(__name__)



@app.route('/')
def home():
    return render_template('Index.html')

@app.route('/Prediction',methods=['POST'])
def predict(): 
        team1 = request.form["team1"]
        team2 = request.form["team2"]
        venue = request.form["venue"]
        toss_decision = request.form["tossDecision"]
        toss_winner = request.form["tossWinner"]
        
        input = [team1,team2,toss_winner,venue,toss_decision]
        print(input)
        final = [np.array(input)] 

        
        output=model.predict(final)
        return render_template ('index.html',data=output)

if __name__ == '__main__':
    # Load model
    model = pickle.load(open('model.pkl','rb'))

    app.run(debug=True)

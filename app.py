from flask import Flask, request
from flask_cors import CORS
from pattern.en import conjugate
import nltk
from nltk.corpus import wordnet as wn

# https://github.com/clips/pattern/wiki/pattern-en#conjugation
app = Flask(__name__)
cors = CORS(app)
app.debug = True



@app.route('/', methods = ['GET'])
def hello_world():
    subject = request.args.get('subject')
    verb = request.args.get('verb')
    forms = get_forms(subject, verb)
    return forms

def get_forms(subject, verb):
    baseform = conjugate(verb, "VB")
    thirdpers = conjugate(verb, "3sg")
    simplepast = conjugate(verb, "p")
    pastpart = conjugate(verb, "VBN")
    ingform = conjugate(verb, "VBG")
    isVerb = is_verb(baseform)
    return {'thirdpers': thirdpers, 
      'simplepast': simplepast, 
      'pastpart': pastpart, 
      'ingform': ingform, 
      'baseform': baseform,
      'subject': subject,
      'isVerb': isVerb
    }

def is_verb(verb):
  synset = wn.synsets(verb, wn.VERB)
  return ( not not[wd for wd in synset if wd.name().split('.')[0] in verb ])
  


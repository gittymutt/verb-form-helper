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

def get_forms(subject, word):
    pos =[]
    verb = word
    if wn.morphy(verb, wn.VERB):
      verb = wn.morphy(verb, wn.VERB)
      pos = get_pos(verb)
    pos += get_pos(wn.morphy(verb))
    list(set(pos))
    
    if not pos: return {'baseform': False}
    baseform = conjugate(verb, "VB")
    thirdpers = conjugate(verb, "3sg")
    simplepast = conjugate(verb, "p")
    pastpart = conjugate(verb, "VBN") 
    ingform = conjugate(verb, "VBG")
    


    return {'thirdpers': thirdpers, 
      'simplepast': simplepast, 
      'pastpart': pastpart, 
      'ingform': ingform, 
      'baseform': baseform,
      'subject': subject,
      'pos': list(set(pos))
    }


def get_pos(word):
    if not word: 
      return []
    synset = wn.synsets(word)
    #print(synset)
    poss = []
    for s in synset:
        synset_pos = s.name().split('.')[1]
        synset_name = s.name().split('.')[0]
        if synset_name == word:
            poss.append(synset_pos)
        if len(s.lemmas()) > 1:
            for l in s.lemmas():
                if l.name() == word:
                    poss.append(synset_pos)
    return poss

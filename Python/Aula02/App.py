from flask import Flask, jsonify, request

app = Flask(__name__)



livros = [
    {
        'id': 1,
        'titulo': "O Senhor dos anéis - A sociedade do Anel",
        'autor': 'J.R.R Tolkien'
    },
    {
        'id': 2,
        'titulo': "Harry potter e a pedra filosofal",
        'autor': 'J.K Howling'
    },
    {
        'id': 3,
        'titulo': "James Clear",
        'autor': 'Hábitos Atômicos'
    }
]

# Consultar todos livros
@app.route('/livros', methods=['GET'])
def obter_livros():
    return jsonify(livros)
# Consultar por id 
@app.route('/livros/<int:id>', methods=['GET'])
def obter_livros_por_id(id):
    for livro in livros:
        if livro['id'] == id:
            return jsonify(livro)

# Editar
@app.route('/livros/<int:id>', methods=['PUT'])
def editar_livro_por_id(id):
    livro_alterado = request.get_json()
    for indice,livro in enumerate(livros):
        if livro['id'] == id:
            livros[indice] = livro_alterado
            return jsonify(livro_alterado)
        
# Criar 
@app.route('/livros', methods=['POST'])
def incluir_novo_livro():
    novo_livro = request.get_json()
    livros.append(novo_livro)
    return  jsonify(livros)

app.run(port=5000,host='localhost',debug=True)
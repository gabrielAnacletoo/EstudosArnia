

class Blog {
    constructor(data){
        this.author = data.author
        this.content = data.content
        this.createdAt = new Date().toLocaleDateString('pt-BR');
        this.likes = null;
        this.deleted = false;
    }
}

export {Blog}
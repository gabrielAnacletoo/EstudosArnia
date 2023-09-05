import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'uploads/')// Pasta pra salvar arquivos 
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now()+ '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname.split(".").pop())
    }
})

//filtrar os arquivos
const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Arquivo inválido! Apenas imagens são permitidas.'))
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

const UploadMulter = upload.single('imagem');

export {UploadMulter}
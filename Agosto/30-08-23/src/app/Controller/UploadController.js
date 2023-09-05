class UploadController {
    constructor(service) {
      this.service = service; // Array para armazenar os nomes dos arquivos enviados
    }
  
    handleUpload(req, res) {
      try {
        if (!req.file) {
          return res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
        }
  
        const fileName = req.file.filename;
        this.service.uploadFile(fileName);
  
        return res.status(200).json({ message: 'Arquivo enviado com sucesso.', fileName });
      } catch (error) {
        console.error('Erro no upload:', error);
        return res.status(500).json({ error: 'Ocorreu um erro durante o upload.' });
      }
    }
  
    listUploadedFiles(req, res) {
      return res.status(200).json({ files: this.service.getUploadedFiles() });
    }
  }
  
  export {UploadController};
  
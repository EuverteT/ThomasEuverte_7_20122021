const multer = require('multer');

const MIME_TYPES = { // Dictionnaire mime types pour ceux disponibles depuis le frontend
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({ // Objet de configuration pour multer. Nécessite 2 élements: destination et filename
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => { // Générer le nouveau nom
        const name = file.originalname.split(' ').join('_'); // Partie avant l'extension
        const extension = MIME_TYPES[file.mimetype]; // Extension
        callback(null, name + Date.now() + '.' + extension); // Nom global: partie avant l'extension + Timestamp créant un fichier unqiue + extension
    }
});

module.exports = multer({ storage: storage }).single('image'); // Export du middleware configuré avec méthode multer précisant l'unicité du fichier et le type image
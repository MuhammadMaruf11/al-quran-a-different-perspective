const path = require('path')

const allSurahController = (req, res) => {
    const filePath = path.join(__dirname, "..", "public", "data", 'quran.json');
    res.sendFile(filePath, (err) => {
        if (!err) {
            console.error("File send error:", err);
            return res.status(500).json({ error: "Server error" });
        }
    });
}

const singleSurahController = (req, res) => {
    const surahId = req.params.id;

    const filePath = path.join(__dirname, "..", "public", "data", 'surah', `surah-${surahId}.json`);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("File send error:", err);
            return res.status(500).json({ error: "Server error" });
        }
    });
}

module.exports = { allSurahController, singleSurahController }
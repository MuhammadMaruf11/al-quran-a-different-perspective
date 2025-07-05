const path = require("path");

const topicController = (req, res) => {
    const topicId = req.params.topicId;

    const filePath = path.join(__dirname, "..", "public", "data", 'quranic-topics', 'topics', `topic-${topicId}`, `topic-${topicId}.json`);

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("File send error:", err);
            if (err.code === "ENOENT") {
                return res.status(404).json({ error: "Topic not found" });
            }
            return res.status(500).json({ error: "Server error" });
        }
    });
};

const subTopicController = (req, res) => {
    const topicId = req.params.topicId;
    const subTopicId = req.params.subTopicId;

    const filePath = path.join(__dirname, '..', 'public', 'data', 'quranic-topics', 'topics', `topic-${topicId}`, 'verses', `verses-${subTopicId}.json`)

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('file send error: ', err);
            if (err.code === 'ENDENT') {
                return res.status(404).json({ error: 'Sub topic not found' })
            }
            return res.status(500).json({ error: 'Server error' })
        }
    });
};

const mainTopicController = (req, res) => {

    const filePath = path.join(__dirname, '..', 'public', 'data', 'quranic-topics', 'topics-name.json')

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('file send error: ', err);
            if (err.code === 'ENDENT') {
                return res.status(404).json({ error: 'Sub topic not found' })
            }
            return res.status(500).json({ error: 'Server error' })
        }
    });
};

module.exports = { topicController, subTopicController, mainTopicController };

import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
    id : String,
    from: String,
    data: String,
    date: String,
    time: String
});

const defaultExport = mongoose.model('messageContent', whatsappSchema);

export default defaultExport;











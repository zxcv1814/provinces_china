const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    id_original: Number,
    name_translation: String,
    ParentId: Number,
    LevelType: Number,
    CityCode: String,
    ZipCode: Number,
    MergerName: String,
    lng: Number,
    Lat: Number,
    name_original: String,
    port_mapping: String,
    border_mapping: String,
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb+srv://dongquang:HWGxBa7ni6UVE6JY@provinces.mc0oyvt.mongodb.net/')
    .then(() => {
        console.log('Kết nối thành công');
        const newUser = new User({
            id_original: 10000,
            name_translation: '中国',
            ParentId: 0,
            LevelType: 0,
            CityCode: 'CN',
            ZipCode: 54321,
            lng: 116.3683244,
            Lat: 39.915085,
            name_original: 'China',
        });

        return newUser.save();
    })
    .then(() => {
        console.log('Lưu thành công');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Lỗi kết nối', err);
    });
